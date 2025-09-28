"use client";
import React from "react";
import MettingSchedule from "./MettingSchedule";
import OrderOverview from "./OrderOverview";
import CustomerSatisfaction from "./CustomerSatisfaction";
import UserActivity from "./UserActivity";
import DashboardDetailsCards from "./DashboardDetailsCards";
import MonthlyTargetCard from "./MonthlyTargetCard";
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
            <MettingSchedule />
            <OrderOverview />
            <CustomerSatisfaction />
            <UserActivity />
            {/* <AnnouncementTable /> */}
          </div>
        </div>
      </div>
      {/* -- App side area end -- */}
    </>
  );
};

export default HomeMainArea;
