import DashboardCards from "@/components/dashboard/DashboardCards";
import ChartTab from "@/components/dashboard/ChartTab";
import CalendarComponent from "@/components/dashboard/Calendar";
import Todo from "@/components/todo/Todo";

const Home = () => {
  return (
    <div className="flex flex-grow flex-col p-4">
      {/* Dashboard Cards */}
      <DashboardCards />
      <div className="w-full sm:w-2/3 md:w-full lg:w-full mt-6 ">
        <ChartTab />
      </div>
      {/* Responsive Layout */}
      <div className="mt-6 flex flex-wrap gap-4">
        {/* ChartTab */}
        <div className="w-full md:w-1/2 sm:w-full"> 
          <Todo />
        </div>

        {/* CalendarComponent */}
        <div className="md:w-[45%] sm:w-[100%] lg:w-[45%]">
          <CalendarComponent />
        </div>
      </div>
    </div>
  );
};

export default Home;
