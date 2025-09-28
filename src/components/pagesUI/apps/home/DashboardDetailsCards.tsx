import SummarySingleCard from "@/components/common/SummarySingleCard";
import React from "react"; // Adjust the import path as needed
import MonthlySalesCard from "./MonthlySalesCard";

const DashboardDetailsCards = () => {
  const cardsData = [
    {
      iconClass: "fa-sharp fa-regular fa-users",
      title: "Customers",
      value: "3,782",
      percentageChange: "+10%",
      isIncrease: true,
    },
    {
      iconClass: "fa-sharp fa-regular fa-box",
      title: "Orders",
      value:"5,359",
      percentageChange: "+2.15%",
      isIncrease: false,
    }
  ];

  return (
    <>
    <div className="col-span-12 sm:col-span-7 xxl:col-span-7">
      <div className="grid grid-cols-12 gap-6">
        {cardsData.map((card, index) => (
            <div key={index} className="col-span-12 sm:col-span-6">
                <SummarySingleCard {...card} />
            </div>
        ))}
      </div>
      <MonthlySalesCard />
    </div>
    </>
  );
};

export default DashboardDetailsCards;
