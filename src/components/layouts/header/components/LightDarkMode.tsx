"use client";
import React from "react";
import useGlobalContext from "@/hooks/use-context";

const LightDarkMode = () => {
  const { theme, toggleTheme } = useGlobalContext();

  return (
    <button
      onClick={toggleTheme}
      className="w-[45px] h-[45px] flex items-center justify-center rounded-full border border-border dark:border-borderLightest-dark transition"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <i className="fa-light fa-sun text-body text-lg"></i>
      ) : (
        <i className="fa-light  fa-moon text-body text-lg"></i>
      )}
    </button>
  );
};

export default LightDarkMode;
