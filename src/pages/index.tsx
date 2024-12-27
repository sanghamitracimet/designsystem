import CalendarComponent from "@/components/dashboard/CalendarComponent";
import DashboardCards from "@/components/dashboard/DashboardCards";
import ChartTab from "@/components/dashboard/ChartTab";

// src/pages/index.tsx
const Home = () => {
  return (
    <div className="flex-col flex flex-grow">
      <DashboardCards />
      <div className="flex flex-wrap mt-6">
        <div className="w-1/2">
          <ChartTab />
        </div>
        <div className="w-1/2">
          <CalendarComponent />
        </div>
      </div>
    </div>
  );
};

export default Home;