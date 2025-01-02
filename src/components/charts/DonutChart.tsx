import React, { useState } from "react";
import ChartComponent from "./chartComponent";
import { donutChartData, noAxisOptions } from "./data";
import { BiMinus, BiPlus } from "react-icons/bi";

function DonutChart() {
  const [visible, setVisible] = useState(true);

  const handleShow = () => {
    setVisible(!visible);
  };

  return (
    <div className={`border-solid rounded ${ visible ? "shadow-md" : ""}  lg:w-full`}>
        <div className="bg-[#003459] px-8 py-1 flex rounded-t-md justify-between text-white">
          <h3> Donut Chart </h3>
          <button onClick={() => handleShow()}>
            {visible ? <BiMinus size={24} /> : <BiPlus size={24} />}
          </button>
        </div>
          {visible &&
           <div  className={`transition-slow ${visible ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
         >
              <ChartComponent
                type="doughnut"
                data={donutChartData}
                options={noAxisOptions}
                className="p-2.5 h-64"
              />
            </div>
          }
      </div>
  );
}

export default DonutChart;
