import express from "express";
import { loginUser } from "./auth.controller";
const router = express.Router();

router.get("/login", loginUser);
export default router;