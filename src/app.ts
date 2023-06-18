import "reflect-metadata";
import express from "express";
import "./config/database/typeorm/data-source";

import { router } from "@shared/api/routes";

const app = express();

app.use(express.json());

app.use("/api", router);

export default app;