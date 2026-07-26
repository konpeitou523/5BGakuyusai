import pool from "../db/database.js";
export async function getReservations() {
  const result = await pool.query("SELECT * FROM reservations");
  return result.rows;
}
export async function insertReservation(name, time, people, token) {
  await pool.query(
    "INSERT into reservations (name,time,people,token) values($1,$2,$3,$4)",
    [name, time, people, token],
  );
}

export async function updateReservation(id, name, time, people) {
  await pool.query(
    "UPDATE reservations SET name=$1,time=$2,people=$3 WHERE id=$4",
    [name, time, people, id],
  );
}
