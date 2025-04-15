import { FC } from "react";
import Image from "next/image";
import { getMeal } from "../../../../lib/meals";
import { notFound } from "next/navigation";

interface SlugPageProps {
  params: {
    mealSlug: string;
  };
}

const Slug: FC<SlugPageProps> = ({ params }) => {
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");
  return (
    <>
      <header className="header flex  py-8 px-4 gap-12  m-auto max-w-[80rem]">
        <div className="relative  w-[30rem] h-[20rem]">
          <Image
            fill
            src={meal.image}
            alt={meal.title}
            className="object-cover rounded-lg  shadow-sm animate-fadeSlideInFromLeft"
          />
        </div>
        <div className=" px-4 pt-2 pb-0 text-orange-100 m-w-[40rem] animate-fadeSlideInFromLeft">
          <h1 className=" m-0 text-5xl uppercase font-sans shadow-2xl">
            {meal.title}
          </h1>
          <p className=" m-0 text-5xl uppercase font-sans text-shadow-sm">
            {" "}
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className="text-2xl"> {meal.summary}</p>
        </div>
      </header>
      <main>
        {/* <h1 style={{ color: "white", textAlign: "center" }}>
          {params.mealSlug}
        </h1> */}
        <p
          className="text-2xl bg-amber-100 text-black rounded-lg shadow-2xl p-8 max-w-[60rem] my-[2rem] mx-auto animate-fadeSlideInFromBottom"
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
};

export default Slug;
