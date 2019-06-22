import express from 'express';
import bodyParser from 'body-parser';
import productsRoutes from './routes/products';

const app = express();

// middlewares
app.use(bodyParser.json());

// register routes
app.use('/products', productsRoutes);

export default app;
