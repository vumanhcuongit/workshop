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

// error handling
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(500).json({
    error: err.message,
  });
});

app.use((req, res) => {
  res.status(404).json({
    error: 'Not found',
  });
});

export default app;
