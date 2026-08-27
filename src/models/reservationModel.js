import pool from "../db/database.js";
export async function getReservations() {
  const result = await pool.query("SELECT * FROM reservations");
  return result.rows;
}
export async function insertReservation(name, time, people, token, maxpeople) {
  const client = await pool.connect();
  try{
    await client.query("BEGIN;");
    await client.query("SELECT pg_advisory_xact_lock(hashtext($1));",[time]);
    const result=await client.query("SELECT COALESCE(SUM(people),0) AS total_people FROM reservations WHERE time=$1;",[time]);
    const totalPeople=Number(result.rows[0].total_people);
    if (totalPeople+people<=maxpeople){
      await client.query("INSERT INTO reservations (name,time,people,token) VALUES($1,$2,$3,$4);",[name,time,people,token]);
      await client.query("COMMIT");
      return true;
    } else {
      await client.query("ROLLBACK");
      return false;
    }
  } catch(error){
    await client.query("ROLLBACK");
    throw error;
  } finally{
    client.release();
  }
}