import SummarySingleCard from "@/components/common/SummarySingleCard";
import React from "react"; // Adjust the import path as needed

const DashboardDetailsCards = () => {
  const cardsData = [
    {
      iconClass: "fa-sharp fa-regular fa-user",
      title: "Total Employee",
      value: 313,
      description: "Than Last Year",
      percentageChange: "+10%",
      isIncrease: true,
    },
    {
      iconClass: "fa-sharp fa-regular fa-house-person-leave",
      title: "On Leave Employee",
      value: 55,
      description: "Than Last Month",
      percentageChange: "+2.15%",
      isIncrease: true,
    }
  ];

  return (
    <>
    <div className="col-span-12 sm:col-span-7 xxl:col-span-7">
      <div className="grid grid-cols-12">
        {cardsData.map((card, index) => (
            <div key={index} className="col-span-12 sm:col-span-6">
                <SummarySingleCard {...card} />
            </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default DashboardDetailsCards;
