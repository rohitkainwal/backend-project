import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router();

// This will respond to POST /api/v1/users/register
router.route("/register").post(registerUser)

// Debug log
console.log("✅ User routes loaded")

export default router