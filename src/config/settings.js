export const interval = 10;
export const maxpeople = 10;
const schedule = {};
const list=[];
for (let i = 540; i <= 820; i = i + interval) {
  const hour = String(Math.floor(i / 60)).padStart(2, "0");
  const minute = String(i % 60).padStart(2, "0");
  schedule[`${hour}:${minute}`] = 0;
  list.push(`${hour}:${minute}`);
}
export const timeschedule=schedule;
export const timelist=list;