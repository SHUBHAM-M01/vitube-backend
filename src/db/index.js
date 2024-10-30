import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const DB_CONNECT = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `Connection to MongoDB Succeded at PORT : ${connectionInstance.connection.port}`
    );
  } catch (error) {
    console.error("MONGODB CONNECTION ERROR : ", error);
  }
};
