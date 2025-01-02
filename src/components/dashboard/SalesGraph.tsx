import React from "react";
import { FaTable } from "react-icons/fa";
import ChartComponent from "../charts/chartComponent";
import { lineChartData, noGridOptions } from "../charts/data";

const SalesGraph: React.FC = () => {

  return (
    <div className="w-full shadow-md border-2 border-lightGray">
      <div className="flex justify-between mb-2 border-b-2 border-b-lightGray p-4">
        <div className="flex justify-between gap-2">
          <FaTable className="w-6 h-6" />
          <h3>Sales Graph</h3>
        </div>
      </div>
      <div className={`transition-all ease-in-out duration-300 overflow-hidden mt-4`}>
        <ChartComponent
          type="line"
          data={lineChartData}
          options={noGridOptions}
          className="p-2.5 h-72 max-w-screen-sm"
        />
      </div>
    </div>
  );
};

export default SalesGraph;