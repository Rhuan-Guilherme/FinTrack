import { UserAlreadyExistsError } from '@/use-cases/errors/user-already-exists-error';
import { makeAuthenticateUser } from '@/use-cases/factoryes/authenticate';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

export async function authenticateUser(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const authenticateSchema = z.object({
    email: z.string().email(),
    password: z.string(),
  });

  const { email, password } = authenticateSchema.parse(request.body);

  try {
    const registerUser = makeAuthenticateUser();
    const { user } = await registerUser.execute({ email, password });

    const token = await reply.jwtSign({}, { sub: user.email });

    return reply.status(201).send({ token: token });
  } catch (error) {
    if (error instanceof UserAlreadyExistsError) {
      reply.status(409).send({ message: error.message });
    }
  }
}
