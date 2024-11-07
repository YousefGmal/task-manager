import express from "express";
import { config } from "dotenv";
import connectDB from "./config/dbConnection.js";

import {
  routersMiddlware,
  configurationMiddlware,
} from "./middlewares/appMiddleware.js";

config();
const PORT = process.env.PORT;
const port = PORT || 3000;
export const app = express();

// middlwares
configurationMiddlware(app);
routersMiddlware(app);
const server = app.listen(port, () => {
  console.log(`🔥 Server running on port ${port}`);
  connectDB();
});
