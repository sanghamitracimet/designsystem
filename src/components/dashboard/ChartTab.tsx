import React, { useState } from "react";
import { BiSolidPieChartAlt2 } from "react-icons/bi";
import ChartComponent from "../charts/chartComponent";
import { areaChartData, donutChartData, noAxisOptions, noGridOptions } from "../charts/data";

const ChartTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"area" | "donut">("area");

  return (
    <div className="pt-2 pb-2 w-full shadow-md border-2 border-lightGray">
      <div className="flex justify-between mb-2 border-b-2 border-b-lightGray p-2">
        <div className="flex justify-between gap-2">
          <BiSolidPieChartAlt2 className="w-6 h-6" />
          <h3>Sales</h3>
        </div>
        <div className="flex justify-around">
          <button
            onClick={() => setActiveTab("area")}
            className={`px-4 py-2 rounded-md text-sm font-semibold ${activeTab === "area" ? "bg-blue text-white" : "bg-white"
              }`}
          >
            Area
          </button>
          <button
            onClick={() => setActiveTab("donut")}
            className={`px-4 py-2 rounded-md text-sm font-semibold ${activeTab === "donut" ? "bg-blue text-white" : "bg-white"
              }`}
          >
            Donut
          </button>
        </div>
      </div>

      <div className="relative">
        {activeTab === "area" ? (
          <div className="w-full">
            <div className="border-r-darkGray border-b-darkGray">
              <ChartComponent
                type="line"
                data={areaChartData}
                options={noGridOptions}
                className="w-full p-2.5 h-72 bg-white"
              />
            </div>
          </div>
        ) : (
          <div className="w-full">
            <div className="border-r-darkGray border-b-darkGray">
              <ChartComponent
                type="doughnut"
                data={donutChartData}
                options={noAxisOptions}
                className="p-2.5 h-72"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChartTab;
