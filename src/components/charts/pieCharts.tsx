
import React, { useState } from "react";
import ChartComponent from "./chartComponent";
import {  donutChartData, noAxisOptions, } from "./data";
import { BiMinus, BiPlus } from "react-icons/bi";

const PieCharts = () => {

     const [visible, setVisible] = useState(true);

    const handleShow=()=>{
        setVisible(!visible)
    }

  return (
    <div className="w-full border-solid  rounded shadow-md">
      <div className="w-full box-border h-auto border-solid  rounded shadow-md">
        <div className="bg-red px-10 py-2 flex justify-between text-white">
          <h3> Donut Chart </h3>
          <button onClick={() => handleShow()}>
            {visible ? <BiMinus size={24} /> : <BiPlus size={24} />}
          </button>
        </div>
        <div
          className={`transition-all ease-in-out duration-300 ${
            visible ? "h-auto" : "h-[0px]"
          } overflow-hidden`}
        >
        {visible ? (
          <div className="border-r-darkGray border-b-darkGray">
            <ChartComponent
              type="doughnut"
              data={donutChartData}
              options={noAxisOptions}
              className="p-2.5 "
              
            />
          </div>
        ) : (
          ""
        )}
        </div>
      </div>
    </div>
  );
};

export default PieCharts;
