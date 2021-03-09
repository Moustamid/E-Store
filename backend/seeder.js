//-npm
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import chalk from 'chalk';
//-local : data
import users from './data/users.js';
import products from './data/products.js';
//-local : models
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

//- SECTION:

dotenv.config();

connectDB();

//- SECTION:

const importData = async () => {
  try {
    //-clearing the Database :
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    //-Inserting Users Data :
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    //-Inserting Products Data :
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    console.log(chalk.hex('#00e640').underline.bold(`Data Imported`));
    process.exit();
  } catch (error) {
    console.log(chalk.hex('#f03434').underline.bold(`${error}`));
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log(chalk.hex('#f03434').underline.bold(`Data destroyed `));
    process.exit();
  } catch (error) {
    console.log(chalk.hex('#f03434').underline.bold(`${error}`));
    process.exit(1);
  }
};

// IMPORTANTE: node backend/seeder -d : destroyes the data , using process.argv[2]

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
