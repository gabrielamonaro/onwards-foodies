import { FC } from "react";
import Image from "next/image";

interface SlugPageProps {
  params: {
    mealSlug: string;
  };
}

const Slug: FC<SlugPageProps> = ({ params }) => {
  return (
    <>
      <header className="header">
        <div className="image">
          <Image fill src={""} alt={""} />
        </div>
        <div className="headerText">
          <h1>TITLE</h1>
          <p className="creator">
            {" "}
            by <a href={`mailto:${"EMAIL"}`}>NAME</a>
          </p>
          <p className="Summary"> SUMMARY</p>
        </div>
      </header>
      <main>
        <h1 style={{ color: "white", textAlign: "center" }}>
          {params.mealSlug}
        </h1>
        <p
          className="instructions"
          dangerouslySetInnerHTML={{ __html: "..." }}
        ></p>
      </main>
    </>
  );
};

export default Slug;
