//-npm
import express from 'express';
import asyncHandler from 'express-async-handler';
//-local
import Product from '../models/productModel.js';

// SECTION:

const router = express.Router();

// SECTION:

//! @desc   : fetch all products
//! @route  : GET  /api/products
//! @access : Public

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});

    res.status(200).json({
      status: 'success',
      requestedAt: req.requestTime,
      data: {
        products: products,
      },
    });
  })
);

//! @desc   : fetch single product
//! @route  : GET  /api/products/:id
//! @access : Public

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.status(200).json({
        status: 'success',
        requestedAt: req.requestTime,
        data: {
          product,
        },
      });
    } else {
      res.status(404).json({
        status: 'failed',
        message: 'Product not found',
      });
    }
  })
);

export default router;
