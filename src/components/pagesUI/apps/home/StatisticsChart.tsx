"use client";
import React from "react";
import dynamic from "next/dynamic";
import { Calendar } from "lucide-react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const StatisticsChart = () => {
  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "area",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#3758F9", "#A5B4FC"], // primary + light blue
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 100],
      },
    },
    grid: {
      borderColor: "#E5E7EB",
      strokeDashArray: 4,
    },
    xaxis: {
      categories: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
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
    legend: { show: false },
    tooltip: {
      theme: "light",
    },
  };

  const chartSeries = [
    {
      name: "Revenue",
      data: [680, 700, 740, 720, 760, 780, 770, 800, 830, 850, 880, 920],
    },
    {
      name: "Sales",
      data: [450, 470, 480, 500, 530, 550, 560, 580, 590, 610, 640, 670],
    },
  ];

  return (
     <div className="col-span-12">
            <div className="card__wrapper">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        {/* Left Side: Title */}
        <div>
          <h2 className="text-gray-800 font-semibold text-lg">Statistics</h2>
          <p className="text-gray-500 text-sm">
            Target you’ve set for each month
          </p>
        </div>

        {/* Right Side: Tabs + Date + Menu */}
        <div className="flex items-center gap-2">
          {/* Tabs */}
          <div className="flex items-center bg-borderLight rounded-lg p-0.5">
            <button className="text-sm font-semibold bg-white text-headingPrimary px-3 py-2.5 rounded-md shadow-sm">
              Overview
            </button>
            <button className="text-sm font-semibold text-body hover:text-gray-800 px-3 py-2.5">
              Sales
            </button>
            <button className="text-sm font-semibold text-body hover:text-gray-800 px-3 py-2.5">
              Revenue
            </button>
          </div>

          {/* Date */}
          <div className="flex items-center border rounded-lg px-3 py-2.5 text-[14px] font-semibold text-headingPrimary bg-gray-50 hover:bg-gray-100 cursor-pointer">
            <Calendar className="w-4 h-4 mr-1" />
            <span>05 Feb – 06 March</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="max-h-[250px] mt-2">
        <Chart
          options={chartOptions}
          series={chartSeries}
          type="area"
          height={265}
        />
      </div>
    </div>
     </div>
    
  );
};

export default StatisticsChart;
