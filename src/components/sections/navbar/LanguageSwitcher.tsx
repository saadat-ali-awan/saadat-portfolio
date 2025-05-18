import Link from "next/link";
import { Button } from "@/components/ui/button";

type LanguageSwitcherProps = {
  closeMenu?: () => void;
};

export default function LanguageSwitcher({ closeMenu }: LanguageSwitcherProps) {
  const handleClick = () => {
    if (closeMenu) closeMenu();
  };
  return (
    <div className="flex items-center justify-center md:flex-col text-2xl gap-0">
      <Button asChild variant="link" className="p-0 h-max">
        <Link href="/" onClick={handleClick}>En</Link>
      </Button>
      <div className="md:hidden">|</div>
      <Button asChild variant="link" className="p-0 h-max">
        <Link href="/" onClick={handleClick}>Ge</Link>
      </Button>
    </div>
  );
}
