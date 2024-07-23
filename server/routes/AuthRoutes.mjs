import { Router } from "express";
import { signup } from "../controllers/AuthController.mjs";

const authRoutes = Router();

authRoutes.post("/signup", signup);

export default authRoutes;