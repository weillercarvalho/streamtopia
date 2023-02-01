import express from "express";
import { getPayment, postPayment } from "../controllers/paymentController.js";
import {
  getPaymentValidation,
  postPaymentValidation,
} from "../middlewares/paymentMiddlewareValidation.js";

const paymentRouter = express.Router();

paymentRouter.get("/payment", getPaymentValidation, getPayment);
paymentRouter.post("/payment", postPaymentValidation, postPayment);

export default paymentRouter;
