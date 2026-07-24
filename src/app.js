import express from "express";
import reservationRouter from "./routes/reservation.js";

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(reservationRouter);

app.listen(8080, () => {
    console.log("Server running");
});