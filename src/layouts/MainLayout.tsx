// src/layouts/MainLayout.tsx
import SideNav from '../components/SideNav';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className='w-56'>
        <SideNav />
      </div>
      {/* Main Content */}
      <div className="flex-1 flex-grow pt-4 overflow-y-auto">
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
