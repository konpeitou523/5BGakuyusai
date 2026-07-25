import { getReservations } from "../models/reservationModel.js";

export async function sendTable(req, res) {
  const reservations = await getReservations();
  const { interval } = req.app.locals;
  res.render("table.ejs", {
    reservations: reservations,
  });
}
