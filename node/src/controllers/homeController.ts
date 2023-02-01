import { Request, Response } from "express";
import { gettingHomes } from "../services/homeService.js";

async function getHome(req: Request, res: Response) {
  try {
    const result = await gettingHomes();
    return res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
}

export { getHome };
