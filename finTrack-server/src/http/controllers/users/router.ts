import { FastifyInstance } from 'fastify';
import { registerUser } from './register-user';
import { authenticateUser } from './authenticate';

export async function UserRoutes(app: FastifyInstance) {
  app.post('/user/create', registerUser);
  app.post('/user/session', authenticateUser);
}
