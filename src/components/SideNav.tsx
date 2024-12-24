// src/components/SideNav.tsx
import Link from 'next/link';

const SideNav = () => {
  return (
    <div className="fixed top-0 left-0 w-[15%] h-full bg-primary-sidebar bg-slate-900 text-white p-4 z-10">
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
  );
};

export default SideNav;
