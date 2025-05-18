import NavbarBrand from "./NavbarBrand";
import NavbarMenu from "./NavbarMenu";
import MobileMenu from "./MobileMenu";

export function Navbar() {
  return (
    <div className="w-full flex justify-center items-center">
      <nav className="flex items-center justify-between p-8 w-full md:max-w-6xl">
        <NavbarBrand />
        <div className="hidden md:flex flex-1 justify-center items-center gap-6">
          <NavbarMenu />
        </div>
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </nav>
    </div>
  );
}
