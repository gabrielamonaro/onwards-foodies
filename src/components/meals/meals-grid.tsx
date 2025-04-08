import { FC } from "react";
import MealItem from "./meal-item";

interface IMealsGrid {
  meals: {
    id: string;
    title: string;
    slug: string;
    image: string;
    summary: string;
    creator: string;
  }[];
}
const MealsGrid: FC<IMealsGrid> = ({ meals }) => {
  return (
    <ul className="meals">
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
