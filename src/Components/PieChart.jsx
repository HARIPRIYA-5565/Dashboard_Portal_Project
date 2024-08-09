import React from "react";
import { useEffect } from 'react';
import ApexCharts from 'apexcharts';
export default function PieChartSection(){
useEffect(() => {
    const options = {
      chart: {
        height: '150px', 
        type: 'pie',
        zoom: {
          enabled: false,
        },
      },
      series: [60, 40],
      labels: ['Direct', 'Organic search'],
      title: {
        show: false,
      },
      dataLabels: {
        style: {
          fontSize: '10px',
          fontFamily: 'Inter, ui-sans-serif',
          fontWeight: '400',
          colors: ['#fff', '#fff', '#1f2937'],
        },
        dropShadow: {
          enabled: false,
        },
        formatter: (value) => `${value.toFixed(1)} %`,
      },
      plotOptions: {
        pie: {
          dataLabels: {
            offset: -10,
          },
        },
      },
      legend: {
        show: false,
      },
      stroke: {
        width: 2, 
        colors: ['rgb(255, 255, 255)'],
      },
      grid: {
        padding: {
          top: -5,
          bottom: -5,
          left: -5,
          right: -5,
        },
      },
      tooltip: {
        enabled: false,
      },
      states: {
        hover: {
          filter: {
            type: 'none',
          },
        },
      },
      colors: ['#6E757C', '#007CFF'],
    };

    const chart = new ApexCharts(document.querySelector('#hs-pie-chart'), options);
    chart.render();
    return () => {
      chart.destroy();
    };
  }, []);

  return (
      <><div className="flex flex-wrap px-4 gap-x-4 mt-3 sm:mt-2 ">
          <div className="inline-flex items-center">
              <span className="h-3 w-8 inline-block bg-[#6B757F] rounded-sm me-2"></span>
              <span className="text-[13px] text-gray-600 dark:text-neutral-400">Pending</span>
          </div>
          <div className="inline-flex items-center">
              <span className="h-3 w-8 inline-block bg-[#FFC107] rounded-sm me-2"></span>
              <span className="text-[13px] text-gray-600 dark:text-neutral-400">Processing</span>
          </div>
          <div className="inline-flex items-center">
              <span className="h-3 w-8 inline-block bg-[#007AFF] rounded-sm me-2"></span>
              <span className="text-[13px] text-gray-600 dark:text-neutral-400">Ready to deliver</span>
          </div>
          <div className="inline-flex items-center">
              <span className="h-3 w-8 inline-block bg-[#15A2B6] rounded-sm me-2"></span>
              <span className="text-[13px] text-gray-600 dark:text-neutral-400">Ready to deliver</span>
          </div>
          <div className="inline-flex items-center">
              <span className="h-3 w-8 inline-block bg-[#DB3543] rounded-sm me-2"></span>
              <span className="text-[13px] text-gray-600 dark:text-neutral-400">Ready to deliver</span>
          </div>
      </div><div className="flex flex-col justify-center items-center">
              <div className=" py-2 px-4"> {/* Adjust padding for a tighter fit */}
                  <div id="hs-pie-chart" className="flex justify-center items-center"></div>
              </div>
          </div></>
  );
}


