import sql from "better-sqlite3";

const db = sql("meals.db");

interface Meal {
  id: string;
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
  creator_email: string;
  instructions: string;
}

export async function getMeals(): Promise<Meal[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("error while fetching data");
  return db.prepare("SELECT * FROM meals").all() as Meal[];
  // all for fetching data and getting all the returned lines
  // get for fetching just one line
  // run for creating/updating sth
}

export function getMeal(slug: string): Meal {
  return db.prepare("SELECT * from meals where slug = ?").get(slug) as Meal;
}
