import {
  getReservations,
  insertReservation,
} from "../models/reservationModel.js";

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
  const { name, time, people } = req.body;
  const peopleNum = Number(people);
  const nameStr = String(name);
  if (
    nameStr !== "" &&
    time in timeschedule &&
    peopleNum >= 1 &&
    peopleNum <= maxpeople
  ) {
    await insertReservation(name, time, people);
    res.redirect("/reservation");
  } else {
    console.log(`不正な入力${name}${time}${people}`);
    res.redirect("/reservation");
  }
}
