import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface IMealItem {
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
}
const MealItem: FC<IMealItem> = ({
  title,
  slug,
  image,
  summary,
  creator,
}) => {
  return (
    <article className="flex flex-col justify-between h-full rounded shadow-[0_0_12px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-300 ease-in-out text-[#ddd6cb] bg-gradient-to-r from-[#2c1e19] to-[#25200f]">
      <header>
        <div className="relative h-[15rem]">
          {image && image !== "" && (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover w-full h-full"
            />
          )}
        </div>
        <div className="pt-2 px-4">
          <h2 className="m-0 text-[1.5rem] ">{title}</h2>
          <p className="text-[0.75rem] text-[#cfa69b] italic">by {creator}</p>
        </div>
      </header>
      <div className="flex flex-col justify-between h-full">
        <p className="pt-4 px-4">{summary}</p>
        <div className="p-4 text-right">
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
};

export default MealItem;
