// src/layouts/MainLayout.tsx
import SideNav from '../components/SideNav';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row">
      {/* Sidebar */}
      <div className='w-[18%]'>
      <SideNav />
      </div>
      {/* Main Content */}
      <div className="ml-[18%] w-[100%] p-4">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
