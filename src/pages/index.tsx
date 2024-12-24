import AreaChart from "@/components/AreaChart";
import DashboardCards from "@/components/DashboardCards";

// src/pages/index.tsx
const Home = () => {
  return (
    <div className="w-[100%]">
      <DashboardCards />
      <AreaChart />
    </div>
  );
};

export default Home;
