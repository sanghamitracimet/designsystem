// src/components/SideNav.tsx
import Link from 'next/link';

const SideNav = () => {
  return (
    <div className="fixed top-0 left-0 w-[20%] h-full bg-gray-800 text-white p-4 border-r-2 border-yellow z-10">
      <h2 className="text-2xl mb-6">My App</h2>
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
          <Link href="/page4">Todo</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
