import express from "express";
import { sendMypage,cancel } from "../controllers/mypageController.js";

const router=express.Router();

router.get(
    "/mypage",
    sendMypage
)
router.post(
    "/mypage",
    cancel
)

export default router;