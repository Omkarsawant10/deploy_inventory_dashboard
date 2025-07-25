import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();


const connectDB = (async () => {
  try {
    
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI is not defined in environment variables');
    }

    console.log('Attempting to connect to MongoDB...');

    
    const conn = await mongoose.connect(process.env.MONGO_URI);

    
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
})();


export default connectDB;