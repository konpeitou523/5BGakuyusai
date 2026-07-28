import {
  getReservations,
  insertReservation,
  updateReservation,
} from "../models/reservationModel.js";
import { getReservationsByToken } from "../models/mypageModel.js";
import crypto from "crypto";

export async function sendReservationForm(req, res) {
  const reservations = await getReservations();
  const { timeschedule,maxpeople } = req.app.locals;
  const schedule = { ...timeschedule };
  reservations.forEach((reservation) => {
    if (reservation.time in schedule) {
      schedule[reservation.time] += reservation.people;
    } else {
      console.log("存在しない時間帯の予約が入っています");
    }
  });
  let { time = "" } = req.query;
  if (!(time in timeschedule)) {
    console.log(`Warning 不正な入力${time}`);
    time = "";
  }
  if(Number(schedule[time]>=maxpeople)){
    time="";
  }

  res.render("reservation.ejs", {
    reservations: reservations,
    selectedtime: time,
    schedule: schedule,
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
    !Number.isInteger(peopleNum) ||
    peopleNum > maxpeople
  ) {
    console.log(`不正な入力 ${name}${time}${people}`);
    return res.redirect("/reservation");
  }
  const schedule = { ...timeschedule };
  const reservations = await getReservations();
  reservations.forEach((reservation) => {
    if (reservation.time in schedule) {
      schedule[reservation.time] += reservation.people;
    } else {
      console.log("存在しない時間帯の予約が入っています");
    }
  });

  if (Number(schedule[time]) + peopleNum > maxpeople) {
    return res.send("ごめんなさい。その時間帯はもう満員です");
  }

  try {
    let token = requestToken;

    if (token) {
      const reservation = await getReservationsByToken(token);

      if (reservation) {
        const id = reservation.id;
        updateReservation(id, name, time, peopleNum);
        res.redirect(`/mypage?token=${token}`);
        return;
      }
    }

    // 新規作成
    token = crypto.randomBytes(32).toString("hex");

    await insertReservation(name, time, peopleNum, token);

    res.redirect(`/mypage?token=${token}`);
  } catch (error) {
    console.log(error);
    res.send("予約に失敗しました");
  }
}
