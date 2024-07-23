import { Router } from "express";
import { updateProfile,getUserInfo, login, signup } from "../controllers/AuthController.mjs";
import { verifyToken } from "../middlewares/AuthMiddleware.mjs";

const authRoutes = Router();

authRoutes.post("/signup", signup);
authRoutes.post("/login", login);
authRoutes.get("user-info",verifyToken, getUserInfo);
authRoutes.post("/update-profile", verifyToken, updateProfile);

export default authRoutes;