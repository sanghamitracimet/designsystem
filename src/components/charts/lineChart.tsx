import React, { useState } from "react";
import ChartComponent from "./chartComponent";
import {
  lineChartData,
  noGridOptions,
} from "./data";
import { BiMinus, BiPlus } from "react-icons/bi";

const LineChart = () => {
  const [visible, setVisible] = useState(true);

  const handleShow = () => {
 
    setVisible(!visible);
  };

  return (
  
      <div className="w-full box-border border-solid  rounded shadow-md">
        <div className="bg-[#17a2b8] px-10 py-2 flex justify-between text-white">
          <h3> Line Chart </h3>
          <button onClick={() => handleShow()}>
            {visible? <BiMinus size={24} /> : <BiPlus size={24} />}
          </button>
        </div>
        {visible ? (
          <div>
            <ChartComponent
              type="line"
              data={lineChartData}
              options={noGridOptions}
              className="w-full p-2.5 bg-white"
              
            />
          </div>
        ) : (
          ""
        )}
      </div>
    
  );
};

export default LineChart;
