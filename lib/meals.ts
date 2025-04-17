import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export interface IMeal {
  id: string;
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
  creator_email: string;
  instructions: string;
}

export interface ICreateMeal {
  id: string;
  title: string;
  slug?: string;
  image: string | null;
  image_file: File;
  summary: string;
  creator: string;
  creator_email: string;
  instructions: string;
}

export async function getMeals(): Promise<IMeal[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("error while fetching data");
  return db.prepare("SELECT * FROM meals").all() as IMeal[];
  // all for fetching data and getting all the returned lines
  // get for fetching just one line
  // run for creating/updating sth
}

export function getMeal(slug: string): IMeal {
  return db.prepare("SELECT * from meals where slug = ?").get(slug) as IMeal;
}

export async function saveMeal(meal: Omit<ICreateMeal, "id">) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image_file.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);

  const bufferedImage = await meal.image_file.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed! ");
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(
    `
    INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (@title, @summary, @instructions, @creator, @creator_email, @image_url, @slug)
    `
  ).run(meal);
}
