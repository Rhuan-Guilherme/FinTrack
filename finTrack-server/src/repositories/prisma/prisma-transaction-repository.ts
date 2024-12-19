import { Prisma, Transaction } from '@prisma/client';
import { TransactionRepositoryInterface } from '../transactions-repository-interface';
import { prisma } from '@/lib/prisma';

export class PrismaTransactionRepository
  implements TransactionRepositoryInterface
{
  async create(data: Prisma.TransactionCreateInput): Promise<Transaction> {
    const transaction = await prisma.transaction.create({ data });

    return transaction;
  }
  async findAllTransactions(userId: string, page: number) {
    const transactions = await prisma.transaction.findMany({
      where: {
        userId,
      },
      take: 20,
      skip: (page - 1) * 20,
    });

    return transactions;
  }
}
