import express from "express";
import reservationRouter from "./routes/reservation.js";
import tableRouter from "./routes/table.js";
import mypageRouter from "./routes/mypage.js";
import adminRouter from "./routes/admin.js"
import * as settings from "./config/settings.js";
const PORT = process.env.PORT || 8080;

const app = express();
// 学友祭の基礎設定系はsetting.jsへ移行
// 送信処理
app.locals.interval = settings.interval;
app.locals.maxpeople = settings.maxpeople;
app.locals.timeschedule = settings.timeschedule;
app.locals.timelist=settings.timelist;

// その他設定
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(reservationRouter);
app.use(tableRouter);
app.use(mypageRouter);
app.use(adminRouter);

app.listen(PORT, () => {
  console.log(`running on ${PORT}`);
});
