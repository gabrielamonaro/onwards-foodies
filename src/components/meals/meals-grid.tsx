import { FC } from "react";
import MealItem from "./meal-item";

interface IMealsGrid {
  meals: {
    id: string;
    title: string;
    slug: string;
    summary: string;
    image_url: string;
    creator: string;
  }[];
}
const MealsGrid: FC<IMealsGrid> = ({ meals }) => {
  return (
    <ul className="w-[90%] max-w-[90rem] grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-[5rem] my-[2rem] mx-auto list-none p-0">
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
