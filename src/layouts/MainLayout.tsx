// src/layouts/MainLayout.tsx
import Nav from '@/components/Nav';
import SideNav from '../components/SideNav';
import { useState } from 'react';

const MainLayout = ({ children }: { children: React.ReactNode }) => {

  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => setIsSideNavOpen(!isSideNavOpen);

  return (
    <div className="flex min-h-screen">

        <SideNav isOpen={isSideNavOpen} toggleSideNav={toggleSideNav} />

      <div className="flex-1 flex-grow pt-4 overflow-y-auto">
        <Nav toggleSideNav={toggleSideNav} />
        <main className="p-6 pt-12">
          {children}
        </main>
      </div>

    </div>
  );
};

export default MainLayout;