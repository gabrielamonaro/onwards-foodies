import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all();
  // all for fetching data and getting all the returned lines
  // get for fetching just one line
  // run for creating/updating sth
}
