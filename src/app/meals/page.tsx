import Link from "next/link";
import { getMeals } from "@/../lib/meals";
import MealsGrid from "@/components/meals/meals-grid";
import { Suspense } from "react";
import LoadingMeals from "./loading";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <div className="min-h-screen flex flex-col align-center justify-center">
      <header className="flex flex-col gap-12 my-[3rem] mx-auto mb-[5rem] w-[90%] max-w-[75rem] text-[#ddd6cb] text-[1.5rem]">
        <h1 className="font-montserrat">
          Delicious meals, created{" "}
          <span className="bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
            by you
          </span>
        </h1>
        <p className="m-0">
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className="m-0">
          <Link
            href="/meals/share"
            className="inline-block mt-4 px-4 py-2 rounded-lg bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold no-underline"
          >
            Share your favorite recipe
          </Link>
        </p>
      </header>
      <main className="flex-1">
        <Suspense fallback={<LoadingMeals />}>
          <Meals />
        </Suspense>
      </main>
    </div>
  );
}
