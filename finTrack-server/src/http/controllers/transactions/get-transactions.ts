import { TransactionsNotFoundError } from '@/use-cases/errors/transactions-not-found-error';
import { makeGetTransactions } from '@/use-cases/factoryes/get-transactions';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

export async function getTransactions(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const pageSchema = z.object({
    page: z.coerce.number(),
  });

  const { page } = pageSchema.parse(request.params);

  try {
    const getTransactions = makeGetTransactions();
    const { transactions } = await getTransactions.execute({
      userId: request.user.sub,
      page,
    });

    return reply.status(200).send({ transactions });
  } catch (error) {
    if (error instanceof TransactionsNotFoundError) {
      return reply.status(401).send({ message: error.message });
    }

    return reply.status(500).send({
      message: 'Erro ao processar a solicitação. Tente novamente mais tarde.',
    });
  }
}
