"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Preloader from "@/common/Preloader/Preloader";
import DashboardHeader from "./header/DashboardHeader";
import DashBoardSidebar from "./sidebar/DashBoardSidebar";
import useGlobalContext from "@/hooks/use-context";
import HomeFooter from "./footer/HomeFooter";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const { theme } = useGlobalContext();
  const pathName = usePathname();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => setIsLoading(false), 0);
    return () => clearTimeout(loadingTimeout);
  }, []);

  const renderHeader = () => {
    switch (pathName) {
      default:
        return <DashboardHeader />;
    }
  };

  const renderFooter = () => {
    switch (pathName) {
    case "/":
    case "/home":
    return <HomeFooter />;

       default:
        return null;
    }
  };

  return (
    <>
      <div
        className={`page__full-wrapper ${theme === "dark" ? "dark" : "light"}`}
      >
        <DashBoardSidebar />
        <div className="page__body-wrapper">
          {isLoading ? (
            <Preloader />
          ) : (
            <>
              {renderHeader()}
              {children}
              {renderFooter()}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Wrapper;
