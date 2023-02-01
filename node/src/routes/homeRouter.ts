import express from "express";
import { getHome } from "../controllers/homeController.js";
const homeRouter = express.Router();

homeRouter.get("/home", getHome);
export default homeRouter;
