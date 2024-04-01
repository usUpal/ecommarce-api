import { Router } from "express";
import { health } from "../controllers/health";

const healthRoutes: Router = Router();

healthRoutes.get("/health", health);

export default healthRoutes;
