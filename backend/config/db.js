import mongoose from 'mongoose';
import chalk from 'chalk';

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(
      chalk
        .hex('#4d13d1')
        .bold(`MongoDb Connected : ${connect.connection.host}`)
    );
  } catch (error) {
    console.error(chalk.hex('#cf000f').bold(`Error : ${error.message}`));
    process.exit(1);
  }
};

export default connectDB;
