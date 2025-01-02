import React, from "react";
import { FaTable } from "react-icons/fa";
import ChartComponent from "../charts/chartComponent";
import { lineChartData, noGridOptions } from "../charts/data";

const SalesGraph: React.FC = () => {

  return (
    <div className="p-4 w-full shadow-md border-2 border-lightGray ml-4">
      <div className="flex justify-between mb-2 border-b-2 border-b-lightGray">
        <div className="flex justify-between gap-2">
          <FaTable className="w-6 h-6" />
          <h3>Sales Graph</h3>
        </div>
      </div>
      <div className="relative">
        <div className="w-full">
          <div className="border-r-darkGray border-b-darkGray">
            <ChartComponent
              options={noGridOptions}
              type="line"
              data={lineChartData}
              className="w-full p-2.5 h-70 bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesGraph;
