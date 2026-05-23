import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routes from './main/routes';
import { errorMiddleware } from './presentation/middlewares/errorMiddleware';

const app = express();

// CORS — aceita a URL do frontend (configurável por variável de ambiente)
const allowedOrigins = process.env.FRONTEND_URL
  ? process.env.FRONTEND_URL.split(',').map((o) => o.trim())
  : ['http://localhost:4200'];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use(express.json());

// Rotas da aplicação
app.use(routes);

// Middleware de erro global (sempre após as rotas)
app.use(errorMiddleware);

export default app;
