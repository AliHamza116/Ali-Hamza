"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useTransition } from "./TransitionContext";

const links = [
  { name: "home", path: "/", hash: "home" },
  { name: "Services", path: "/services", hash: "services" },
  { name: "resume", path: "/resume", hash: "resume" },
  { name: "work", path: "/work", hash: "work" },
  { name: "contact", path: "/contact", hash: "contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [activeSection, setActiveSection] = useState("home");
  const [open, setOpen] = useState(false);
  const { trigger } = useTransition();

  useEffect(() => {
    if (!isHome) return;

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "-40% 0px -55% 0px",
      threshold: 0,
    });

    links.forEach(({ hash }) => {
      const el = document.getElementById(hash);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHome]);

  const handleNavClick = useCallback(
    (e, link) => {
      trigger();
      setOpen(false);
      if (isHome) {
        e.preventDefault();
        const el = document.getElementById(link.hash);
        if (el) {
          setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 350);
        }
      }
    },
    [isHome, trigger]
  );

  const isActive = (link) => {
    if (isHome) return activeSection === link.hash;
    return link.path === pathname;
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-24 mb-20 text-center text-2xl">
          <Link href="/" onClick={() => setOpen(false)}>
            <h1 className="text-4xl font-semibold">
              Ali Hamza<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/* navlinks */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link
              href={isHome ? `#${link.hash}` : link.path}
              key={index}
              onClick={(e) => handleNavClick(e, link)}
              className={`${
                isActive(link) ? "text-accent border-b-2 border-accent" : ""
              } text-xl capitalize hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
