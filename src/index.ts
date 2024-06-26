import express, { Express, Request, Response } from "express";
import "dotenv/config";
import { PORT } from "./secrets";
import rootRouter from "./routes";
import { PrismaClient } from "@prisma/client";

const app: Express = express();
require("dotenv").config();

app.use(express.json());
app.use("/api/v1", rootRouter);

export const prismaClient = new PrismaClient({
  log: ["query"],
});

app.listen(PORT, () => {
  console.log(`server: ${PORT} ✅ `);
});
