import { getReservations } from "../models/reservationModel.js";

export async function sendadmin(req, res) {
  const reservations = await getReservations();
  const { timeschedule } = req.app.locals;
  const { timelist }=req.app.locals;
  const schedule = { ...timeschedule };
  timelist.forEach(time => {
    schedule[time]=[]    
  });

  reservations.forEach(reservation => {
    schedule[reservation.time].push([reservation.id,reservation.name,reservation.people])
  });
  console.log(reservations);

  res.render("admin.ejs", {
    reservations: reservations,
    schedule: schedule,
  });
}
