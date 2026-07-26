import {
  getReservations,
  insertReservation,
  updateReservation,
} from "../models/reservationModel.js";
import { getReservationsByToken } from "../models/mypageModel.js";
import crypto from "crypto";

export async function sendReservationForm(req, res) {
  const reservations = await getReservations();
  const { timeschedule } = req.app.locals;
  const { maxpeople } = req.app.locals;
  let { time = "09:00" } = req.query;
  if (!(time in timeschedule)) {
    console.log(`Warning 不正な入力${time}`);
    time = "09:00";
  }

  res.render("reservation.ejs", {
    reservations: reservations,
    selectedtime: time,
  });
}

export async function createReservation(req, res) {
  const { timeschedule, maxpeople } = req.app.locals;
  const { name, time, people, token: requestToken } = req.body;

  const peopleNum = Number(people);
  const nameStr = String(name);

  if (
    nameStr === "" ||
    !(time in timeschedule) ||
    peopleNum < 1 ||
    peopleNum > maxpeople
  ) {
    console.log(`不正な入力 ${name}${time}${people}`);
    return res.redirect("/reservation");
  }

  try {
    let token = requestToken;

    if (token) {
      const reservation = await getReservationsByToken(token);

      if (reservation) {
        const id=reservation.id;
        updateReservation(id,name,time,people)
        res.redirect(`/mypage?token=${token}`);
        return;
      }
    }

    // 新規作成
    token = crypto.randomBytes(32).toString("hex");

    await insertReservation(name, time, people, token);

    res.redirect(`/mypage?token=${token}`);

  } catch (error) {
    console.log(error);
    res.send("予約に失敗しました");
  }
}
