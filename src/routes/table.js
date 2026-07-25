import express from "express";
import { sendTable } from "../controllers/tableController.js";

const router = express.Router();

router.get("/table", sendTable);

export default router;
