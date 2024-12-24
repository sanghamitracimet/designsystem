import { Chart, ChartData, ChartOptions, ChartTypeRegistry } from "chart.js/auto";
import React, { useEffect, useRef } from "react";

interface ChartProps  {
  type: keyof ChartTypeRegistry;
   data: ChartData ;
   options : ChartOptions;
   className: string;
}

const ChartComponent = ({ type, data, options, className } : ChartProps) => {
  const chartRef = useRef<HTMLCanvasElement | null >(null);

  useEffect(() => {
    if(chartRef.current){
    const chart = new Chart(chartRef.current, {
      type: type,
      data: data,
      options: options,
    });
    
    return () => chart.destroy();
  }
  }, [data, options, type]);

  return <canvas ref={chartRef} className={className} > </canvas>
};

export default ChartComponent;  
