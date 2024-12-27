// src/layouts/MainLayout.tsx
import Nav from '@/components/Nav';
import SideNav from '../components/SideNav';
import { useState } from 'react';

const MainLayout = ({ children }: { children: React.ReactNode }) => {

  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => setIsSideNavOpen(!isSideNavOpen);

  return (
    <div className="flex min-h-screen">

      <div className='w-56'>
        <SideNav isOpen={isSideNavOpen} toggleSideNav={toggleSideNav} />
      </div>

      <div className="flex-1 flex-grow pt-4 overflow-y-auto">
        <Nav toggleSideNav={toggleSideNav} />
        <main className="p-6">
          {children}
        </main>
      </div>

    </div>
  );
};

export default MainLayout;