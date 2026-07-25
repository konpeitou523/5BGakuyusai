import { getReservations } from "../models/reservationModel.js";

export async function sendTable(req, res) {
  const reservations = await getReservations();
  const { interval } = req.app.locals;
  const schedule = {};
  for (let i = 540; i <= 820; i = i + interval) {
    const hour = String(Math.floor(i / 60)).padStart(2, "0");
    const minute = String(i % 60).padStart(2, "0");
    schedule[`${hour}:${minute}`] = 0;
  }

  reservations.forEach((reservation) => {
    if (reservation.time in schedule) {
      schedule[reservation.time] += reservation.people;
    } else {
      console.log("存在しない時間帯の予約が入っています");
    }
  });
  res.render("table.ejs", {
    reservations: reservations,
    schedule:schedule,
  });
}
