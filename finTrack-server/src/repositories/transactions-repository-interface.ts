import { Prisma, Transaction } from '@prisma/client';

export interface TransactionRepositoryInterface {
  create(data: Prisma.TransactionCreateInput): Promise<Transaction>;
  findAllTransactions(
    userId: String,
    page?: number
  ): Promise<Transaction[] | null>;
}
