import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();
let MONGODB = String(process.env.MONGODB);

export const dbConnect = async () => {
  try {
    mongoose.set("strictQuery", false);

    const db = await mongoose.connect(MONGODB);
    console.log(`Database is connected to ${db.connection.db.databaseName}`);
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
  }
};
