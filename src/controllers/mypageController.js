import { getReservations } from "../models/reservationModel.js";
import { getReservationsByToken } from "../models/mypageModel.js";

export async function sendMypage(req, res) {
  const reservations = await getReservations();
  let { token = "" } = req.query;
  const reservation = await getReservationsByToken(token);
  const id = reservation.id;
  const name = reservation.name;
  const time = reservation.time;
  const people = reservation.people;
  res.render("mypage.ejs", {
    reservations: reservations,
    id: id,
    name: name,
    time: time,
    people: people,
  });
}
