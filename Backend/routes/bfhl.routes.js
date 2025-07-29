import express from "express";
import { handleBFHL } from "../Controller/bfhl.Controller.js";

const router = express.Router();

router.post("/bfhl", handleBFHL);

export default router;
