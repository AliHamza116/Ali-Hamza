"use client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = ({ className }) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Software Engineer",
        "Full Stack Developer",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      cursorChar: "|",
    });

    return () => typed.destroy();
  }, []);

  return (
    <>
      <style>{`.typed-cursor { color: #00ff99; }`}</style>
      <span className={className} style={{ color: "#00ff99", fontSize: "32px" }} ref={el} />
    </>
  );
};

export default TypedText;
