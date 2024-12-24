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
    <div className="w-full h-auto border-solid  rounded shadow-md">
      <div className="bg-[#007bff] px-10 py-2 flex justify-between text-white">
        <h3> Area Chart </h3>
        <button onClick={() => handleShow()}>
          {visible ? <BiMinus size={24} /> : <BiPlus size={24} />}
        </button>
      </div>
      {visible ? (
          <div className="border-r-darkGray border-b-darkGray">
            <ChartComponent
              type="line"
              data={areaChartData}
              options={noGridOptions}
              className="w-full h-auto p-2.5 bg-white"
            />
          </div>
        ) : (
          ""
        )}
    </div>
  );
}

export default AreaChart;
