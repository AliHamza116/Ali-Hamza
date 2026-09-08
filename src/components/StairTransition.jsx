"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Stairs from "./Stairs";
import { useTransition } from "./TransitionContext";

const StairTransition = () => {
  const { key } = useTransition();

  if (key === 0) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        className="h-screen w-full fixed top-0 left-0 pointer-events-none z-40 flex"
      >
        <Stairs />
      </motion.div>
    </AnimatePresence>
  );
};

export default StairTransition;
