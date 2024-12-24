import React, { useState } from 'react'
import ChartComponent from './chartComponent'
import { barChartData, chartOptions } from './data'
import { BiMinus, BiPlus } from 'react-icons/bi'

function BarChart() {

    const [visible,setVisible] = useState(true)

    const handleShow=()=>{
       setVisible(!visible)
    }

  return (
    <div className="w-full box-border h-auto border-solid  rounded shadow-md">
        <div className="bg-[#003459] px-8 py-1.5 flex rounded-t-md justify-between text-white">
          <h3> Bar Chart </h3>
          <button onClick={() => handleShow()}>
            {visible ? <BiMinus size={24} /> : <BiPlus size={24} />}
          </button>
        </div>
        {visible ? (
          <div className="border-r-darkGray border-b-darkGray">
            <ChartComponent
              type="bar"
              data={barChartData}
              options={chartOptions}
              className="w-full h-auto p-2.5 bg-white"
            />
          </div>
        ) : (
          ""
        )}
      </div>
  )
}

export default BarChart