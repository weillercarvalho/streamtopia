import { Request, Response, NextFunction } from "express";
import { PaymentType, paymentSchema } from "../schemas/paymentSchema.js";

async function getPaymentValidation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;
  if (typeof authorization !== "string" || !authorization) {
    return res.sendStatus(400);
  }
  try {
    const token = authorization?.replace("Bearer ", "");
    res.locals.token = token;
    return next();
  } catch (error) {
    return res.sendStatus(422);
  }
}

async function postPaymentValidation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;
  const { lastNumbers, name, expirationDate, cvv, packageValue } = req.body as PaymentType;
  if (!lastNumbers || !name || !expirationDate || !cvv || !packageValue) {
    return res.sendStatus(400);
  }
  try {
    const token = authorization?.replace("Bearer ", "");
    paymentSchema.parse(req.body);
    res.locals.token = token;
    res.locals.lastNumber = lastNumbers;
    res.locals.name = name;
    res.locals.expirationDate = expirationDate;
    res.locals.cvv = cvv;
    res.locals.packageValue = packageValue;
    return next();
  } catch (error) {
    return res.sendStatus(422);
  }
}

export { getPaymentValidation, postPaymentValidation };
