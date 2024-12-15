import fastify from 'fastify';
import { env } from './env';
import { UserRoutes } from 'http/controllers/users/router';

const app = fastify();
app.register(UserRoutes);

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP server listening in http://localhost:' + env.PORT);
  });
