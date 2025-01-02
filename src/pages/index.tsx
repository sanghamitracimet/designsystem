import DashboardCards from "@/components/dashboard/DashboardCards";
import ChartTab from "@/components/dashboard/ChartTab";
import Todo from "@/components/todo/Todo";
import CalendarComponent from "@/components/dashboard/CalendarComponent";
import SalesGraph from "@/components/dashboard/SalesGraph";

const Home = () => {
  return (
    <div className="flex flex-grow flex-col p-4">
      <DashboardCards />
      <div className="mt-6 flex flex-wrap">
        <div className="w-full md:w-1/2 sm:w-full">
          <ChartTab />
        </div>
        <div className="w-full md:w-1/2 sm:w-full">
          <SalesGraph />
        </div>
      </div>
      <div className="mt-6 flex flex-wrap">
        <div className="w-full md:w-1/2 sm:w-full">
          <Todo />
        </div>
        <div className="w-1/2">
          <CalendarComponent />
        </div>
      </div>
    </div>
  );
};

export default Home;
