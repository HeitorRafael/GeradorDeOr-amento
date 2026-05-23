/**
 * Entry point para o Vercel (serverless).
 * Importa o app Express e o exporta como handler padrão.
 * O Vercel usa este arquivo para rotear todas as requisições da API.
 */
import app from '../src/app';

export default app;
