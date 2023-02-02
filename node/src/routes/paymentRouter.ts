import express from "express";
import { getPayment, postPayment } from "../controllers/paymentController.js";
import {
  getPaymentValidation,
  postPaymentValidation,
} from "../middlewares/paymentMiddlewareValidation.js";

const paymentRouter = express.Router();

paymentRouter.get("/api/payment", getPaymentValidation, getPayment);
paymentRouter.post("/api/payment", postPaymentValidation, postPayment);

export default paymentRouter;
