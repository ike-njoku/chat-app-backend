import { Router } from "express";
import { signIn } from "./auth.controller";
export const authRoutes = Router();

authRoutes.post('/sign-in', signIn )