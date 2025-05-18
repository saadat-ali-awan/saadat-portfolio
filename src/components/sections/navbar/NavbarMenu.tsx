"use client";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

type NavbarMenuProps = {
  closeMenu?: () => void;
};

export default function NavbarMenu({ closeMenu }: NavbarMenuProps) {
  const handleClick = () => {
    if (closeMenu) closeMenu();
  };
  return (
    <>
      <ul className="flex flex-col md:flex-row flex-1 justify-center md:space-x-4 gap-4 md:gap-0 items-center">
        <li><Link onClick={handleClick} href="/">Main</Link></li>
        <li><Link onClick={handleClick} href="/about">About</Link></li>
        <li><Link onClick={handleClick} href="/projects">Projects</Link></li>
        <li><Link onClick={handleClick} href="/articles">Articles</Link></li>
      </ul>
      <LanguageSwitcher closeMenu={closeMenu} />
    </>
  );
}
