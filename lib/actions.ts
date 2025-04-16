"use server";

import { saveMeal } from "./meals";

export async function shareMeal(formData: FormData) {
  "use server";

  const title = formData.get("title")?.toString() ?? "";
  const summary = formData.get("summary")?.toString() ?? "";
  const instructions = formData.get("instructions")?.toString() ?? "";
  const image = formData.get("image") as File;
  const creator = formData.get("creator")?.toString() ?? "";
  const creator_email = formData.get("creator_email")?.toString() ?? "";
  const meal = {
    title,
    summary,
    instructions,
    image: image,
    creator,
    creator_email,
  };
  await saveMeal(meal);
}
