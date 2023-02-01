import { Request, Response } from "express";
import { signUpService, signInService } from "../services/authService.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

async function signUpController(req: Request, res: Response) {
  const name = res.locals.name as string;
  const email = res.locals.email as string;
  const password = res.locals.password as string;
  const hashingPassword = bcrypt.hashSync(password, 10);
  try {
    const result = await signUpService(name, email, hashingPassword);
    return res.status(200).send(result);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

async function signInController(req: Request, res: Response) {
  const email = res.locals.email as string;
  const password = res.locals.password as string;
  try {
    const token = uuidv4() as string;
    await signInService(email, password);
    return res.status(200).send({ token });
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

export { signUpController, signInController };
