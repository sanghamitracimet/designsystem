// import CalendarComponent from "@/components/dashboard/CalendarComponent";
import DashboardCards from "@/components/dashboard/DashboardCards";
import ChartTab from "@/components/dashboard/ChartTab";
import CalendarComponent from "@/components/dashboard/Calendar";
import SalesGraph from "@/components/dashboard/SalesGraph";
import Todo from "@/components/todo/Todo";

// src/pages/index.tsx
const Home = () => {
  return (
    <div className="flex-col flex flex-grow">
      <DashboardCards />
      <div className="mt-6 flex flex-col lg:flex-row lg:flex-wrap">
        <div className="m-2 w-full lg:w-1/2">
          <ChartTab />
        </div>
        <div className="w-full lg:w-1/3">
          <CalendarComponent />
        </div>
      </div>

      <div className="mt-6 flex flex-col lg:flex-row lg:flex-wrap">
      <div className="w-full lg:w-1/2">
          <Todo />
        </div>
        <div className="w-full lg:w-1/2">
          <SalesGraph />
        </div>
      </div>

    </div>
  );
};

export default Home;