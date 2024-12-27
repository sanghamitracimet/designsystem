// src/components/ChartComponent.tsx
import React, { useState, useEffect, useRef } from 'react';
// import { Line } from 'react-chartjs-2';  // For Area chart (Line chart with fill)
// import { Doughnut } from 'react-chartjs-2';  // For Donut chart
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// // Register the necessary components from Chart.js
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement  // Register ArcElement for the donut chart
// );

const AreaChart: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'area' | 'donut'>('area');
  const chartRef = useRef<any>(null);

  const areaChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales Over Time',
        data: [30, 60, 10, 20, 50, 70, 40],
        fill: true,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
    ],
  };

  // Data for Donut chart
  const donutChartData = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        data: [10, 20, 30, 40],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#4BC0C0', '#9966FF', '#FFCD56'],
      },
    ],
  };

  // Destroy the previous chart instance before re-rendering the new chart
  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();  // Destroy the previous chart instance
    }
  }, [activeTab]);

  return (
    <div className="p-6 w-1/2 border-1 border-teal ml-[12%]">
      {/* Tabs for chart type */}
      {/* <div className="flex justify-around mb-6">
        <button
          onClick={() => setActiveTab('area')}
          className={`px-4 py-2 text-lg font-semibold ${activeTab === 'area' ? 'bg-blue text-white' : 'bg-white'}`}
        >
          Area Chart
        </button>
        <button
          onClick={() => setActiveTab('donut')}
          className={`px-4 py-2 text-lg font-semibold ${activeTab === 'donut' ? 'bg-blue text-white' : 'bg-white'}`}
        >
          Donut Chart
        </button>
      </div>

      {/* Chart rendering based on activeTab */}
      {/*<div className="relative h-[400px]">
        {activeTab === 'area' ? (
          <Line
            ref={chartRef}
            data={areaChartData}
            options={{ responsive: true, plugins: { title: { display: true, text: 'Area Chart' } } }}
          />
        ) : (
          <Doughnut
            ref={chartRef}
            data={donutChartData}
            options={{ responsive: true, plugins: { title: { display: true, text: 'Donut Chart' } } }}
          />
        )}
      </div> */}
    </div>
  );
};

export default AreaChart;
