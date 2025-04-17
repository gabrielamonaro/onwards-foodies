"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function shareMeal(formData: FormData) {
  "use server";

  const title = formData.get("title")?.toString() ?? "";
  const summary = formData.get("summary")?.toString() ?? "";
  const instructions = formData.get("instructions")?.toString() ?? "";
  const image_file = (formData.get("image") as File) ?? null;
  const creator = formData.get("creator")?.toString() ?? "";
  const creator_email = formData.get("creator_email")?.toString() ?? "";
  const meal = {
    title,
    summary,
    instructions,
    image_file: image_file,
    creator,
    creator_email,
    image: null,
  };
  await saveMeal(meal);
  redirect("/meals");
}
