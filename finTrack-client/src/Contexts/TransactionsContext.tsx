import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../lib/axios';

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  category: string;
  price: number;
  createdAt: string;
}

interface CreateTransactionProps {
  description: string;
  category: string;
  price: number;
  type: 'income' | 'outcome';
}

interface TransactionsContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionProps) => Promise<void>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const TransactionsContext = createContext({} as TransactionsContextType);

interface TransactionsProviderProps {
  children: ReactNode;
}

export function TransactionProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    });
    setTransactions(response.data);
  }

  async function createTransaction(data: CreateTransactionProps) {
    const { category, description, price, type } = data;

    const response = await api.post('/transactions', {
      category,
      description,
      price,
      type,
      createdAt: new Date().toISOString(),
    });
    console.log(response);

    setTransactions((state) => [response.data, ...state]);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
