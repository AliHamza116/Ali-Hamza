"use client";
import React, { createContext, useContext, useState, useCallback } from "react";

const TransitionContext = createContext({ trigger: () => {} });

export const TransitionProvider = ({ children }) => {
  const [key, setKey] = useState(0);

  const trigger = useCallback(() => {
    setKey((k) => k + 1);
  }, []);

  return (
    <TransitionContext.Provider value={{ key, trigger }}>
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransition = () => useContext(TransitionContext);
