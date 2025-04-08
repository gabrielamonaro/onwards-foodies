"use client";
import Link from "next/link";
import { FC, ReactNode } from "react";
import { usePathname } from "next/navigation";

interface INavLink {
  href: string;
  children: ReactNode;
}
const NavLink: FC<INavLink> = ({ href, children }) => {
  const path = usePathname(); //current path
  return (
    <Link
      href={href}
      className={path === href ? "nav-link nav-link-active" : "nav-link"}
    >
      {children}
    </Link>
  );
};

export default NavLink;
