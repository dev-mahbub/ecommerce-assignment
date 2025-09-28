"use client";
import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const MonthlyTargetCard = () => {
  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "radialBar",
      sparkline: { enabled: true },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: {
          margin: 0,
          size: "78%",
        },
        track: {
          background: "#E5E7EB",
          strokeWidth: "100%",
        },
        dataLabels: {
          show: true,
          name: {
            show: false,
          },
          value: {
            offsetY: -50,
            fontSize: "38px",
            fontWeight: 600,
            color: "#111827",
            formatter: (val) => `${val}%`,
          },
        },
      },
    },
    colors: ["#3758F9"], // Tailwind blue-500
    stroke: {
      lineCap: "round",
    },
    labels: ["Progress"],
  };

  const chartSeries = [75.55]; // percentage value

  return (
     <div className="col-span-12 sm:col-span-5 xxl:col-span-5">
        <div className="card__wrapper rounded-2xl w-full border border-border dark:border-border-dark p-6">
            <h2 className="text-heading font-semibold text-lg">Monthly Target</h2>
            <p className="text-gray-500 text-sm mt-1">Target you’ve set for each month</p>

            <div className="flex justify-center items-center my-6">
                <div className="w-[420px] relative">
                <Chart options={chartOptions} series={chartSeries} type="radialBar" />
                  <span className="absolute top-[78%] left-[50%] -translate-x-2/4 bg-green-100 text-green-600 text-xs font-medium px-2 py-1 rounded-full">
                  +10%
                  </span>
                </div>
            </div>

            {/* Percentage & Status */}
            <div className="text-center">
                <p className="text-base mt-2">
                You earn $3287 today, it’s higher than last month.
                <p className="inline-block">Keep up your good work!</p>
                </p>
            </div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-3 gap-4 mt-4 pt-4 text-center text-sm">
                <div>
                <p className="text-gray-500">Target</p>
                <p className="font-semibold">$20K</p>
                </div>
                <div>
                <p className="text-gray-500">Revenue</p>
                <p className="font-semibold">$16K</p>
                </div>
                <div>
                <p className="text-gray-500">Today</p>
                <p className="font-semibold">$1.5K</p>
                </div>
            </div>
        </div>
     </div>
  );
};

export default MonthlyTargetCard;
