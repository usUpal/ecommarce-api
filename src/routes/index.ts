import { Router } from "express";
import authRoutes from "./auth";
import healthRoutes from "./health";

const rootRouter: Router = Router();

rootRouter.use("/", healthRoutes);
rootRouter.use("/auth", authRoutes);

export default rootRouter;
