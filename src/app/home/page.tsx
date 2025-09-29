import HomeMainArea from "@/components/pagesUI/apps/home/HomeMainArea";
import MetaData from "@/hooks/useMetaData";
import React from "react";

const HrmDashboardMain = () => {
  return (
    <>
      <MetaData pageTitle="Home">
          <HomeMainArea />
      </MetaData>
    </>
  );
};

export default HrmDashboardMain;
