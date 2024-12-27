import React, { useState } from "react";
import ChartComponent from "./chartComponent";
import { areaChartData, noGridOptions } from "./data";
import { BiMinus, BiPlus } from "react-icons/bi";

function AreaChart() {
  const [visible, setVisible] = useState(true);

  const handleShow = () => {
    setVisible(!visible);
  };

  return (
    <div className="border-solid rounded shadow-md">
     <div className="bg-[#003459] px-8 py-1.5 flex rounded-t-md justify-between text-white">
        <h3>Area Chart</h3>
        <button
          onClick={() => handleShow()}
          className="transition-transform duration-300 transform"
        >
          {visible ? (
            <BiMinus size={24} className="transition-transform rotate-180" />
          ) : (
            <BiPlus size={24} />
          )}
        </button>
      </div>

      <div
        className={`transition-all duration-500 ease-in-out ${visible ? "h-auto" : "h-0"}`}
        style={{ overflow: "hidden" }}
      >
        <div className="border-r-darkGray border-b-darkGray">
          <ChartComponent
            type="line"
            data={areaChartData}
            options={noGridOptions}
            className="w-full p-2.5 bg-white"
          />
        </div>
      </div>
    </div>
  );
}

export default AreaChart;
