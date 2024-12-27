import React, { useState, useEffect, useRef } from 'react';
import AreaChart from '../charts/AreaChart';
import PieCharts from '../charts/pieCharts';
import { BiSolidPieChartAlt2 } from "react-icons/bi";


const ChartTab: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'area' | 'donut'>('area');

    return (
        <div className="p-4 w-full shadow-md">
            <div className="flex justify-between mb-2 border-b-2 border-b-lightGray p-2">
                <div className='flex justify-between gap-2'>
                    <BiSolidPieChartAlt2 className='w-6 h-6' />
                    <h3>Sales</h3>
                </div>
                <div className="flex justify-around">
                    <button
                        onClick={() => setActiveTab('area')}
                        className={`px-4 py-2 rounded-md text-sm font-semibold ${activeTab === 'area' ? 'bg-blue text-white' : 'bg-white'}`}
                    >
                        
                        Area
                    </button>
                    <button
                        onClick={() => setActiveTab('donut')}
                        className={`px-4 py-2 rounded-md text-sm font-semibold ${activeTab === 'donut' ? 'bg-blue text-white' : 'bg-white'}`}
                    >
                        Donut
                    </button>
                </div>
            </div>

            {/* Chart rendering based on activeTab */}
            <div className="relative">
                {activeTab === 'area' ? (
                    <div className="w-full">
                        <AreaChart />
                    </div>
                ) : (
                    <div className="w-full">
                        <PieCharts />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChartTab;