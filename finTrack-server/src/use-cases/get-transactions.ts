import { TransactionRepositoryInterface } from '@/repositories/transactions-repository-interface';
import { Transaction } from '@prisma/client';
import { TransactionsNotFoundError } from './errors/transactions-not-found-error';

interface GetTransactionRequest {
  userId: string;
  page?: number;
}

interface GetTransactionResponse {
  transactions: Transaction[] | null;
}

export class GetTransactionUseCase {
  constructor(private transactionRepository: TransactionRepositoryInterface) {}

  async execute({
    userId,
    page = 1,
  }: GetTransactionRequest): Promise<GetTransactionResponse> {
    const transactions = await this.transactionRepository.findAllTransactions(
      userId,
      page
    );

    if (!transactions) {
      throw new TransactionsNotFoundError();
    }

    return {
      transactions,
    };
  }
}
