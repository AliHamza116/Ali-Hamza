"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        {children}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeOut " },
          }}
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
        />
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
