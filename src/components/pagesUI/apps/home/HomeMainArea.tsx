"use client";
import React from "react";
import DashboardDetailsCards from "./DashboardDetailsCards";
import MonthlyTargetCard from "./MonthlyTargetCard";
import StatisticsChart from "./StatisticsChart";
import CustomersDemographic from "./CustomerDemographic";
// import AnnouncementTable from "./AnnouncementTable";

const HomeMainArea = () => {
  return (
    <>
      {/* -- App side area start -- */}
      <div className="container">
        <div className="app__slide-wrapper">
          <div className="grid grid-cols-12 gap-x-6 maxXs:gap-x-0">
            <DashboardDetailsCards />
            <MonthlyTargetCard />
            <StatisticsChart />
            <CustomersDemographic />
          </div>
        </div>
      </div>
      {/* -- App side area end -- */}
    </>
  );
};

export default HomeMainArea;
