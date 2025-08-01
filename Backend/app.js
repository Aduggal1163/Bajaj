import express from "express";
import cors from "cors";
import bfhlRoute from "./routes/bfhl.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/", bfhlRoute);

export default app;
