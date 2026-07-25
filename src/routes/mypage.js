import express from "express";
import { sendMypage } from "../controllers/mypageController.js";

const router=express.Router();

router.get(
    "/mypage",
    sendMypage
)

export default router;