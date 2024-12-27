import AreaChart from "@/components/AreaChart";
import CalendarComponent from "@/components/CalendarComponent";
import DashboardCards from "@/components/DashboardCards";

// src/pages/index.tsx
const Home = () => {
  return (
    <div className="flex-col flex flex-grow">
      <DashboardCards />
      <div className="flex flex-wrap gap-5 mt-6">
      <AreaChart />
      <CalendarComponent />
      </div>
    </div>
  );
};

export default Home;