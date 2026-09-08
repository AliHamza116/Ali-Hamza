"use client";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTransition } from "./TransitionContext";

const links = [
  { name: "home", path: "/", hash: "home" },
  { name: "Services", path: "/services", hash: "services" },
  { name: "resume", path: "/resume", hash: "resume" },
  { name: "work", path: "/work", hash: "work" },
  { name: "contact", path: "/contact", hash: "contact" },
];

const Nav = () => {
  const pathname = usePathname();
  const { trigger } = useTransition();
  const isHome = pathname === "/";
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (!isHome) return;

    const sectionIds = links.map((l) => l.hash);
    const observers = [];

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

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHome]);

  const handleNavClick = useCallback(
    (e, link) => {
      trigger();
      if (isHome) {
        e.preventDefault();
        const el = document.getElementById(link.hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
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
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          href={isHome ? `#${link.hash}` : link.path}
          key={index}
          onClick={(e) => handleNavClick(e, link)}
          className={`${
            isActive(link) ? "text-accent border-b-2 border-accent" : ""
          } capitalize font-medium hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
