// src/layouts/MainLayout.tsx
import Nav from '@/components/Nav';
import SideNav from '../components/SideNav';
import { useState } from 'react';

const MainLayout = ({ children }: { children: React.ReactNode }) => {

  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => setIsSideNavOpen(!isSideNavOpen);

  return (
    <div className="flex min-h-screen">

      {/* <aside className='lg:w-56 md:w-0 sm:w-0'> */}
        <SideNav isOpen={isSideNavOpen} toggleSideNav={toggleSideNav} />
      {/* </aside> */}

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