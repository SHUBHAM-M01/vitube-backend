import express from "express";
import dotenv from "dotenv";
import { DB_CONNECT } from "./db/index.js";
import app from "./app.js";

dotenv.config({
  path: "./.env",
});

DB_CONNECT()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is Running on PORT : ${process.env.PORT}`);
    });
  })
  .catch((error) => console.error(error));
