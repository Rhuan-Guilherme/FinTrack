import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { api } from '../lib/axios';

interface Transaction {
  id: string;
  description: string;
  type: 'INCOME' | 'OUTCOME';
  category: string;
  price: string;
  created_at: string;
}

interface CreateTransactionProps {
  description: string;
  category: string;
  price: number;
  type: 'INCOME' | 'OUTCOME';
}

interface TransactionsContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string | undefined) => Promise<void>;
  createTransaction: (data: CreateTransactionProps) => Promise<void>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const TransactionsContext = createContext({} as TransactionsContextType);

interface TransactionsProviderProps {
  children: ReactNode;
}

export function TransactionProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = useCallback(async (query?: string | undefined) => {
    const token = window.localStorage.getItem('@fintrack/token');
    const response = await api.get(
      `/transactions/1?query=${query ? query : ''}`,
      {
        headers: { Authorization: 'Bearer ' + token },
      }
    );
    setTransactions(response.data.transactions);
  }, []);

  const createTransaction = useCallback(
    async (data: CreateTransactionProps) => {
      const token = window.localStorage.getItem('@fintrack/token');
      console.log(token);

      const { category, description, price, type } = data;

      const response = await api.post(
        '/transactions/create',
        {
          category,
          description,
          price,
          type,
        },
        {
          headers: { Authorization: 'Bearer ' + token },
        }
      );

      setTransactions((state) => [response.data.transaction, ...state]);
      console.log(transactions);
    },
    []
  );

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
