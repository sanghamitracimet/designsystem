import React, { useState } from "react";
import ChartComponent from "./chartComponent";
import { lineChartData, noGridOptions } from "./data";
import { BiMinus, BiPlus } from "react-icons/bi";

const LineChart = () => {
  const [visible, setVisible] = useState(true);

  const handleShow = () => {
    setVisible(!visible);
  };

  return (
    <div className={`border-solid rounded ${ visible ? "shadow-md" : ""}  lg:w-full`}>
      <div className="bg-[#003459] px-8 py-1.5 flex rounded-t-md justify-between text-white">
        <h3> Line Chart </h3>
        <button onClick={() => handleShow()}>
          {visible ? <BiMinus size={24} /> : <BiPlus size={24} />}
        </button>
      </div>
      <div className={`transition-all ease-in-out duration-300 overflow-hidden`}>
        {visible && (
          <ChartComponent
            type="line"
            data={lineChartData}
            options={noGridOptions}
            className="h-64 p-2.5"
          />
        )}
      </div>
    </div>
  );
};

export default LineChart;
