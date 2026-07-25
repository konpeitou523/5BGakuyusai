import express from "express";
import reservationRouter from "./routes/reservation.js";
import tableRouter from "./routes/table.js";

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(reservationRouter);
app.use(tableRouter);

app.listen(8080, () => {
  console.log("Server running");
});
