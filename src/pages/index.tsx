// import CalendarComponent from "@/components/dashboard/CalendarComponent";
import DashboardCards from "@/components/dashboard/DashboardCards";
import ChartTab from "@/components/dashboard/ChartTab";
import CalendarComponent from "@/components/dashboard/Calendar";

// src/pages/index.tsx
const Home = () => {
  return (
    <div className="flex-col flex flex-grow">
      <DashboardCards />
      <div className="mt-6 flex flex-col lg:flex-row lg:flex-wrap">
        <div className="w-full lg:w-1/2">
          <ChartTab />
        </div>
        <div className="w-full lg:w-1/2">
          <CalendarComponent />
          {/* <CalendarComponent /> */}
        </div>
      </div>

    </div>
  );
};

export default Home;