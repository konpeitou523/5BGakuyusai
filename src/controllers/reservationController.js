import {
  getReservations,
  insertReservation,
} from "../models/reservationModel.js";

export async function sendReservationForm(req, res) {
  const reservations = await getReservations();
  const { timeschedule } = req.app.locals;
  let { time } = req.query;
  if (time in timeschedule){}else{
    console.log(`Warning 不正な入力${time}`);
    time="09:00"
  }

  res.render("reservation.ejs", {
    reservations: reservations,
    selectedtime:time
  });
}
export async function createReservation(req, res) {
  const { name, time, people } = req.body;
  await insertReservation(name, time, people);
  res.redirect("/reservation");
}
