import React, { useState } from 'react'
import ChartComponent from './chartComponent'
import { donutChartData, noAxisOptions } from './data'
import { BiMinus, BiPlus } from 'react-icons/bi';

function DonutChart() {

     const [visible, setVisible] = useState(true);
    
        const handleShow=()=>{
            setVisible(!visible)
        }

  return (
    <div className="w-full border-solid  rounded shadow-sm">
      <div className="w-full box-border h-auto border-solid rounded shadow-md">
        <div className="bg-[#003459] px-8 py-1 flex rounded-t-md justify-between text-white">
          <h3> Donut Chart </h3>
          <button onClick={() => handleShow()}>
            {visible ? <BiMinus size={24} /> : <BiPlus size={24} />}
          </button>
        </div>
        <div
          className={`transition-all delay-150 ease-in-out duration-300 ${
            visible ? "h-auto" : "h-[0px]"
          } overflow-hidden`}
        >
        {visible ? (
          <div className="border-r-darkGray border-b-darkGray">
            <ChartComponent
              type="doughnut"
              data={donutChartData}
              options={noAxisOptions}
              className="p-2.5 h-60"
            />
          </div>
        ) : (
          ""
        )}
        </div>
      </div>
    </div>
  )
}

export default DonutChart