import express from "express";
import { sendReservationForm,createReservation } from "../controllers/reservationController.js";

const router = express.Router();

router.get(
    "/reservation",
    sendReservationForm
);
router.post(
    "/reservation",
    createReservation
)

export default router;