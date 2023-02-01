import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/authRouter.js";
import paymentRouter from "./routes/paymentRouter.js";
import homeRouter from "./routes/homeRouter.js";

dotenv.config();
const server = express();
server.use(cors());
server.use(express.json());
server.use(authRouter);
server.use(paymentRouter);
server.use(homeRouter);

server.listen(process.env.PORT, () => {
  console.log(`Listening on the ${process.env.PORT} port.`);
});

export default server;
