import { getReservations } from "../models/reservationModel.js";

export async function sendTable(req, res) {
  const reservations = await getReservations();
  const { timeschedule } = req.app.locals;
  const schedule = { ...timeschedule };
  reservations.forEach((reservation) => {
    if (reservation.time in schedule) {
      schedule[reservation.time] += reservation.people;
    } else {
      console.log("存在しない時間帯の予約が入っています");
    }
  });
  res.render("table.ejs", {
    reservations: reservations,
    schedule: schedule,
  });
}
