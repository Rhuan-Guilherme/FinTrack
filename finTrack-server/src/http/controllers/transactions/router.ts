import { FastifyInstance } from 'fastify';
import { verifyJWT } from '@/http/middlewares/jwt-verify';
import { getTransactions } from './get-transactions';

export async function TransactionsRoutes(app: FastifyInstance) {
  app.get('/transactions/:page', { onRequest: [verifyJWT] }, getTransactions);
}
