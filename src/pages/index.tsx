import DashboardCards from "@/components/dashboard/DashboardCards";
import ChartTab from "@/components/dashboard/ChartTab";
import Todo from "@/components/todo/Todo";
import CalendarComponent from "@/components/dashboard/CalendarComponent";
import SalesGraph from "@/components/dashboard/SalesGraph";

const Home = () => {
  return (
    <div className="flex flex-grow flex-col p-4 mt-8">
      <DashboardCards />
      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="w-full">
          <ChartTab />
        </div>
        <div className="w-full">
          <SalesGraph />
        </div>
        <div className="w-full">
          <Todo />
        </div>
        <div className="w-full">
          <CalendarComponent />
        </div>
      </div>
    </div>
  );
};

export default Home;
