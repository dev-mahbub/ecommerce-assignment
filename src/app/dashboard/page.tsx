import Wrapper from "@/components/layouts/DefaultWrapper";
import DashboardMainArea from "@/components/pagesUI/apps/dashboard/DashboardMainArea";
import MetaData from "@/hooks/useMetaData";
import React from "react";

const HrmDashboardMain = () => {
  return (
    <>
      <MetaData pageTitle="Dashboard">
        <Wrapper>
          <DashboardMainArea />
        </Wrapper>
      </MetaData>
    </>
  );
};

export default HrmDashboardMain;
