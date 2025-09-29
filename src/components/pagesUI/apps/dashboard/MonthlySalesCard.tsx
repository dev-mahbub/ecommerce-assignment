"use client";
import React from "react";
import dynamic from "next/dynamic";
import { MoreVertical } from "lucide-react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const MonthlySalesCard = () => {
  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
      sparkline: { enabled: false },
    },
    plotOptions: {
        bar: {
            borderRadius: 6,
            borderRadiusApplication: "end",
            columnWidth: "50%",
        },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      strokeDashArray: 4,
      borderColor: "#E5E7EB",
    },
    xaxis: {
      categories: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ],
      labels: {
        style: {
          colors: "#6B7280", // gray text
          fontSize: "12px",
        },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#6B7280",
          fontSize: "12px",
        },
      },
    },
    colors: [
      ({ dataPointIndex }: { dataPointIndex: number }) =>
        dataPointIndex === 2 ? "#3758F9" : "#EDF0F3", // March highlighted
    ],
    tooltip: {
      theme: "light",
    },
  };

  const chartSeries = [
    {
      name: "Sales",
      data: [500, 700, 400, 600, 300, 650, 480, 700, 550, 620, 370, 490],
    },
  ];

  return (
    <div className="col-span-12 sm:col-span-7 xxl:col-span-7">
        <div className="card__wrapper rounded-2xl pb-0 w-full max-w-2xl">
      <div className="flex justify-between items-center">
        <h2 className="text-gray-800 font-semibold text-lg">Monthly Sales</h2>
        <button className="hover:bg-gray-100 p-2 rounded-full">
                <MoreVertical className="w-5 h-5 text-gray-500" />
          </button>
      </div>
      <div className="max-h-[215px]">
        <Chart options={chartOptions} series={chartSeries} type="bar" height={225} />
      </div>
    </div>
    </div>
  );
};

export default MonthlySalesCard;
