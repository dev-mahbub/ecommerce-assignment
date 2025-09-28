import React from "react";

interface CardProps {
  iconClass: string; 
  title: string; 
  value: string | number; 
  percentageChange?: string;
  isIncrease?: boolean;
}

const SummarySingleCard: React.FC<CardProps> = ({
  iconClass,
  title,
  value,
  percentageChange,
  isIncrease,
}) => {
  return (
    <div className="card__wrapper style-five">
      <div className="flex flex-col gap-[20px] maxSm:gap-4">
        <div className="card__icon">
          <span>
            <i className={iconClass}></i>
          </span>
        </div>
        <div className="card__title-wrap">
          <h6 className="card__sub-title mb-[10px]">{title}</h6>
          <div className="flex flex-wrap justify-between items-end gap-[10px]">
            <h3 className="card__title mb-0">{value}</h3>
            <span className="card__desc style_two">
                {percentageChange && (
                  <span
                    className={`price-${isIncrease ? "increase" : "decrease"}`}
                  >
                    <i
                      className={`fa-light ${
                        isIncrease ? "fa-arrow-up" : "fa-arrow-down"
                      }`}
                    ></i>{" "}
                    {percentageChange}
                  </span>
                )}{" "}
              </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummarySingleCard;
