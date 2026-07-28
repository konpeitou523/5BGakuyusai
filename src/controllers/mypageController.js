import {
  getReservationsByToken,
  cancelReservations,
} from "../models/mypageModel.js";

export async function sendMypage(req, res) {
  try {
    let { token = "" } = req.query;
    const reservation = await getReservationsByToken(token);
    if (!reservation) {
      res.send("URLが間違っています");
      return;
    }
    const { id, name, time, people } = reservation;
    res.render("mypage.ejs", {
      id: id,
      name: name,
      time: time,
      people: people,
      token: token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("サーバーエラー");
  }
}

export async function cancel(req, res) {
  const { token } = req.body;
  const reservation=await getReservationsByToken(token);
  if (!reservation){
    console.log("不正なtokenによるキャンセル")
    res.send("不正な入力を検知しました。")
    return
  }
  try {
    await cancelReservations(token);
    res.redirect("/table");
  } catch (error) {
    console.log(error);
    res.status(500).send("サーバーエラー");
  }
}
