import pool from "../db/database.js";
export async function getReservationsByToken(token) {
  const result = await pool.query("SELECT * FROM reservations WHERE token=$1",[token]);
  return result.rows[0];
}
export async function cancelReservations(token) {
  await pool.query("DELETE FROM reservations WHERE token=$1",[token]);
  return;
}