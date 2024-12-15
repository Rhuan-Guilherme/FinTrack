import fastify from 'fastify';
import { env } from './env';
import { UserRoutes } from '@/http/controllers/users/router';
import fastifyJwt from '@fastify/jwt';

const app = fastify();

app.register(fastifyJwt, { secret: env.JWT_SECRET });

app.register(UserRoutes);

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP server listening in http://localhost:' + env.PORT);
  });
