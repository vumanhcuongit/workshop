import express from 'express';
import bodyParser from 'body-parser';
import productsRoutes from './routes/products';

const app = express();
app.use(bodyParser.json());
app.use('/products', productsRoutes);

export default app;
