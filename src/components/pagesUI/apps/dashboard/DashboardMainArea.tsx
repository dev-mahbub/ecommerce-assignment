"use client";
import React from "react";
import DashboardDetailsCards from "./DashboardDetailsCards";
import MonthlyTargetCard from "./MonthlyTargetCard";
import StatisticsChart from "./StatisticsChart";
import CustomersDemographic from "./CustomerDemographic";
import RecentOrders from "./RecentOrders";
// import AnnouncementTable from "./AnnouncementTable";

const DashboardMainArea = () => {
  return (
    <>
      {/* -- App side area start -- */}
      <div className="container-dashboard">
        <div className="app__slide-wrapper">
          <div className="grid grid-cols-12 gap-x-6 maxXs:gap-x-0">
            <DashboardDetailsCards />
            <MonthlyTargetCard />
            <StatisticsChart />
            <CustomersDemographic />
            <RecentOrders />
          </div>
        </div>
      </div>
      {/* -- App side area end -- */}
    </>
  );
};

export default DashboardMainArea;
