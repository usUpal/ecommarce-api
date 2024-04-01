import express, { Express, Request, Response } from "express";
import "dotenv/config";
import { PORT } from "./secrets";
import { rootCertificates } from "tls";
import rootRouter from "./routes";

const app: Express = express();
require("dotenv").config();


app.use("/api/v1", rootRouter);

app.listen(PORT, () => {
  console.log(`server: ${PORT} ✅ `);
});
