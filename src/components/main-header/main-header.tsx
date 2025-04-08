import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import Logo from "@/assets/logo.png";
import NavLink from "../nav-link/NavLink";

const MainHeader: FC = () => {
  return (
    <header className="flex justify-between items-center p-8 px-16">
      <Link
        href="/"
        className="flex items-center justify-center gap-2 no-underline text-stone-300 font-bold text-base tracking-wider uppercase"
      >
        <Image
          src={Logo}
          alt="A plate with food on it"
          className="w-20 h-20 object-contain drop-shadow-[0_0_0.75rem_rgba(0,0,0,0.5)]"
        />
        NextLever Food
      </Link>
      <nav>
        <ul className="m-0 p-0 flex gap-6 text-2xl ">
          <li>
            <NavLink href="/meals">Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Foodies Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
