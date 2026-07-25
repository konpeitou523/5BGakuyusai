import { getReservations } from "../models/reservationModel.js"

export async function sendTable(req,res) {
    const reservations=await getReservations();
    res.render("table.ejs",{
        reservations:reservations,
    });
}