import ImageSlideshow from "@/components/images/image-slideshow";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex justify-center gap-8 my-12">
        <div className="w-[500px] h-[25rem]">
          <ImageSlideshow />
        </div>
        <div className="flex flex-col gap-8 h-[25rem] px-0">
          <div className="text-stone-300 ">
            <h1 className="text-2xl bold  tracking-wider uppercase text-transparent bg-gradient-to-r from-[#f9572a] to-[#ffc905] bg-clip-text">
              NextLevel Food fot NextLever Foodies
            </h1>
            <p>Test & share food from all over the world</p>
          </div>
          <div className="cta text-2xl flex gap-[1rem]">
            <Link
              href="/community"
              className=" btn-gradient !bg-none !text-amber-500 !pl-0 !active:text-amber-500 "
            >
              Join the Community
            </Link>
            <Link href="/meals" className="btn-gradient ">
              Explore Meals
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className="flex flex-col text-[#ddd6cb] text-[1.5rem] max-w-[50rem] w-[90%] my-8 mx-auto text-center">
          <h2 className="font-bold ">How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className="flex flex-col text-[#ddd6cb] text-[1.5rem] max-w-[50rem] w-[90%] my-8 mx-auto text-center">
          <h2 className="font-bold ">Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
