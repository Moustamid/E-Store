//-npm :
import express from 'express';
import dotenv from 'dotenv';
import chalk from 'chalk';
//- locol :
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// SECTION:  Envirement variables Setup :
dotenv.config();

// SECTION: Mongoose DB Connection :

connectDB();

const app = express();

// SECTION:
//!Routes hundlers :

app.get('/', (req, res) => {
  res.send('hello from the server ... Node API is Running');
});

app.use('/api/products', productRoutes);

//* 404 fallback :

app.use(notFound);

//. error middlware :

app.use(errorHandler);

// SECTION:  Starting express server :
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    chalk.hex('#26a65b').bold(`Express Server running on port ${PORT} ...👩‍💻`)
  )
);
