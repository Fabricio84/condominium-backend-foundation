import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { env } from './config/env';
import healthRouter from './routes/health';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger'
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(helmet());
app.use(cors({
    origin: env.CORS_ORIGIN,
    credentials: true,
}))
app.use(express.json());

app.use('/api', healthRouter);
app.get("/api/docs", (_req, res) => {
  res.redirect(302, "/api/docs/");
});
app.use(
  "/api/docs",
  swaggerUi.serveFiles(swaggerSpec),
  swaggerUi.setup(swaggerSpec, {
    swaggerOptions: { url: "/api/openapi.json" },
  })
);
app.get("/api/openapi.json", (_req, res) => {
  res.json(swaggerSpec);
});

app.use(errorHandler);

export default app;