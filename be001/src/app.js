import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerSpecs from './services/swagger-specs';
import productsRoutes from './routes/products';

const app = express();

// middlewares
app.use(bodyParser.json());

// register routes
app.use('/products', productsRoutes);

// api docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

export default app;
