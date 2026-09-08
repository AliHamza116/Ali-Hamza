"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

// components
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const handleHireMe = (e) => {
    if (isHome) {
      e.preventDefault();
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="py-8 xl:py-12 text-white sticky top-0 z-30 bg-primary/95 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Ali Hamza<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* desktop-nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={isHome ? "#contact" : "/contact"} onClick={handleHireMe}>
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile-nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
