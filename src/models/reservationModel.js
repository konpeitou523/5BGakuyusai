import pool from "../db/database.js";
export async function getReservations() {
  const result = await pool.query("SELECT * FROM reservations");
  return result.rows;
}
export async function insertReservation(name,time,people){
    await pool.query("INSERT into reservations (name,time,people) values($1,$2,$3)",[name,time,people]);
}