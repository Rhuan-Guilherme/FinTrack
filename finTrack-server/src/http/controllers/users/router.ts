import { FastifyInstance } from 'fastify';
import { registerUser } from './register-user';

export async function UserRoutes(app: FastifyInstance) {
  app.post('/user/create', registerUser);
}
