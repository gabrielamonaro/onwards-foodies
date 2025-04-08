import Link from "next/link";

export default function Meals() {
  return (
    <>
      <header className="flex flex-col gap-12 my-[3rem] mb-[5rem] mx-auto w-[90%] max-w-[75rem] text-[#ddd6cb] text-[1.5rem]">
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
            Share your favorite receipe
          </Link>
        </p>
      </header>
      <main></main>
    </>
  );
}
