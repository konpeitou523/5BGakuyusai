import express from "express";
import { sendadmin } from "../controllers/adminController.js";

const router=express.Router();

router.get(
    "/admin",
    sendadmin
);

export default router;