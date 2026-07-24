import {
  getReservations,
  insertReservation,
} from "../models/reservationModel.js";

export async function sendReservationForm(req, res) {
  const reservations = await getReservations();

  res.render("reservation.ejs", {
    reservations: reservations,
  });
}
export async function createReservation(req, res) {
  const { name, time, people } = req.body;
  await insertReservation(name, time, people);
  res.redirect("/reservation");
}
