import { Request, Response } from "express";
import { postPay, getPay } from "../services/paymentService.js";

async function getPayment(req: Request, res: Response) {
  const token = res.locals.token;
  try {
    const result = await getPay(token);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
  return;
}

async function postPayment(req: Request, res: Response) {
  const token = res.locals.token;
  const lastNumbers = res.locals.lastNumber;
  const expirationDate = res.locals.expirationDate;
  const cvv = res.locals.cvv;
  const packageValue = res.locals.packageValue;
  const name = res.locals.name;
  try {
    const result = await postPay(
      lastNumbers,
      name,
      expirationDate,
      cvv,
      packageValue,
      token
    );
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
  return;
}

export { getPayment, postPayment };
