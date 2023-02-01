import { signInSchema, signUpSchema } from "../schemas/authSchema.js";
import { Request, Response, NextFunction } from "express";
import { signUpType, signInType } from "../schemas/authSchema.js";
async function signUpValidation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { name, email, password } = req.body as signUpType;
  if (!name || !email || !password) {
    return res.sendStatus(400);
  }

  try {
    signUpSchema.parse(req.body);
    res.locals.name = name;
    res.locals.email = email;
    res.locals.password = password;
    return next();
  } catch (error) {
    return res.sendStatus(422);
  }
}

async function signInValidation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email, password } = req.body as signInType;
  if (!email || !password) {
    return res.sendStatus(400);
  }
  try {
    signInSchema.parse(req.body);
    res.locals.email = email;
    res.locals.password = password;
    return next();
  } catch (error) {
    return res.sendStatus(422);
  }
}

export { signUpValidation, signInValidation };
