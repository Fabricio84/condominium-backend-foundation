import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { env } from './config/env';
import healthRouter from './routes/health';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(helmet());
app.use(cors({
    origin: env.CORS_ORIGIN,
    credentials: true,
}))
app.use(express.json());

app.use('/api', healthRouter);

app.use(errorHandler);

export default app;