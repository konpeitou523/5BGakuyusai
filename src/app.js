import express from "express";
import reservationRouter from "./routes/reservation.js";
import tableRouter from "./routes/table.js";

const app = express();
// 学友祭の基礎設定系
const interval = 10;
const maxpeople = 10;

// 送信処理
app.locals.interval = interval;
app.locals.maxpeople = maxpeople;
const schedule = {};
for (let i = 540; i <= 820; i = i + interval) {
  const hour = String(Math.floor(i / 60)).padStart(2, "0");
  const minute = String(i % 60).padStart(2, "0");
  schedule[`${hour}:${minute}`] = 0;
}
app.locals.timeschedule = schedule;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(reservationRouter);
app.use(tableRouter);

app.listen(8080, () => {
  console.log("Server running");
});
