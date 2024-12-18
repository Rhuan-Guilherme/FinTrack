import { TransactionRepositoryInterface } from '@/repositories/transactions-repository-interface';
import { Transaction } from '@prisma/client';

interface GetTransactionRequest {
  userId: string;
}

interface GetTransactionResponse {
  transactions: Transaction[] | null;
}

export class GetTransactionUseCase {
  constructor(private transactionRepository: TransactionRepositoryInterface) {}

  async execute({
    userId,
  }: GetTransactionRequest): Promise<GetTransactionResponse> {
    const transactions = await this.transactionRepository.findAllTransactions(
      userId
    );

    return {
      transactions,
    };
  }
}
