import { FC } from "react";

interface SlugPageProps {
  params: {
    mealSlug: string;
  };
}

const Slug: FC<SlugPageProps> = ({ params }) => {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>{params.mealSlug}</h1>
    </main>
  );
};

export default Slug;
