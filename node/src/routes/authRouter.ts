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
  .post("/signin", signInValidation, signInController)
  .post("/signup", signUpValidation, signUpController);

export default authRouter;
