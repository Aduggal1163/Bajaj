import express from "express";
import { handleBFHL } from "../Controllers/bfhl.Controller.js";

const router = express.Router();

router.post("/bfhl", handleBFHL);

export default router;
