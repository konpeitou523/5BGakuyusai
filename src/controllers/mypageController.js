import { getReservationsByToken } from "../models/mypageModel.js";

export async function sendMypage(req, res) {
  try {
    let { token = "" } = req.query;
    const reservation = await getReservationsByToken(token);
    if (!reservation) {
      res.send("URLが間違っています");
      return;
    }
    const { id, name, time, people,} = reservation;
    res.render("mypage.ejs", {
      id: id,
      name: name,
      time: time,
      people: people,
      token:token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("サーバーエラー");
  }
}
