// src/components/DashboardCards.tsx
import React from 'react';
import { SlHandbag } from "react-icons/sl";
import { FiUserPlus } from "react-icons/fi";
import { IoStatsChartSharp } from "react-icons/io5";
import { IoPieChart } from "react-icons/io5";
import { FaArrowAltCircleRight } from "react-icons/fa";
import SingleDashboardCard from './SingleDashboardCard';

const DashboardCards: React.FC = () => {
  return (
    <div className='w-full'>
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        <SingleDashboardCard 
          number={150}
          subheading="New Orders" 
          icon={SlHandbag}
          icon2={FaArrowAltCircleRight}
          backgroundColor="teal" 
        />
        <SingleDashboardCard 
          number = {53}
          subheading="Bounce Rate" 
          icon={IoStatsChartSharp}
          icon2={FaArrowAltCircleRight}
          backgroundColor="green" 
        />
        <SingleDashboardCard 
          number={42} 
          subheading="User Registrations" 
          icon={FiUserPlus}
          icon2={FaArrowAltCircleRight}
          backgroundColor="#d8a304" 
        />
        <SingleDashboardCard 
          number={65} 
          subheading="Unique Visitors" 
          icon={IoPieChart}
          icon2={FaArrowAltCircleRight}
          backgroundColor="#dc3545" 
        />
      </div>
    </div>
  );
};

export default DashboardCards;
