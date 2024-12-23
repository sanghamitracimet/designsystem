// src/layouts/MainLayout.tsx
import SideNav from '../components/SideNav';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-[100%]">
      {/* Sidebar */}
      <SideNav />

      {/* Main Content */}
      <div className="ml-[20%] w-[80%] p-4 border-l-2 border-white">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
