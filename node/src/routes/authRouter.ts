import express from "express";
import {
  signUpController,
  signInController,
} from "../controllers/authController.js";
import {
  signUpValidation,
  signInValidation,
} from "../middlewares/authMiddlewareValidation.js";
const authRouter = express.Router();

authRouter
  .post("/api/signin", signInValidation, signInController)
  .post("/api/signup", signUpValidation, signUpController);

export default authRouter;
