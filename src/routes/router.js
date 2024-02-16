import { Router } from "express";
import { validatePassword } from "../services/validatePassword.js";
const passwordRoutes = Router();

passwordRoutes.post("/validate-password", validatePassword);

export default passwordRoutes;
