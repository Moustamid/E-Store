import express from 'express';
import dotenv from 'dotenv';
import chalk from 'chalk';
import connectDB from './config/db.js';
import products from './data/products.js';

//-Envirement variables Setup :
dotenv.config();

//-Mongoose DB Connection :

connectDB();

const app = express();

//!Routes hundlers :

app.get('/', (req, res) => {
  res.send('hello from the server ... Node API is Running');
});

app.get('/api/products', (req, res) => {
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    data: {
      products: products,
    },
  });
});

app.get('/api/products/:id', (req, res) => {
  const id = req.params.id;
  const product = products.find((p) => p._id === id);

  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    data: {
      product,
    },
  });
});

//- Starting express server :
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    chalk.hex('#26a65b').bold(`Express Server running on port ${PORT} ...👩‍💻`)
  )
);
