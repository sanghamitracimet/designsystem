import AreaChart from '@/components/charts/AreaChart'
import BarChart from '@/components/charts/BarChart'
import LineChart from '@/components/charts/lineChart'
import PieCharts from '@/components/charts/pieCharts'
import React from 'react'

const chart = () => {
  return (
    <div className="grid w-full box-border grid-cols-1 sm:grid-cols-2 gap-4 p-10">
    <AreaChart />
    <LineChart />
    <PieCharts />
    <BarChart />
    </div>
  )
}

export default chart