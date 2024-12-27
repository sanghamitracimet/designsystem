// src/components/SideNav.tsx
import Link from 'next/link';

const SideNav = () => {
  return (
    <div className="fixed flex flex-col w-56 h-screen bg-primary-sidebar text-white p-4 z-10">
      <div>
        <h2 className="text-2xl mb-8">My App</h2>
        <ul className="space-y-4">
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>
            <Link href="/charts">Chart</Link>
          </li>
          <li>
            <Link href="/datatable">Data Table</Link>
          </li>
          <li>
            <Link href="/todo">Todo</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
