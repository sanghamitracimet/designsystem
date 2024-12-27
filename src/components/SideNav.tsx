// src/components/SideNav.tsx
import Link from 'next/link';
import { AiFillDashboard } from "react-icons/ai";
import { BiSolidPieChartAlt2 } from "react-icons/bi";
import { FaTable } from "react-icons/fa";
import { LuListTodo } from "react-icons/lu";

const SideNav = () => {
  return (
    <div className="fixed flex flex-col w-56 h-screen bg-primary-sidebar text-lightGray p-4 z-10">
      <div>
        <h2 className="text-2xl mb-8">My App</h2>
        <ul className="space-y-8">
          <li className='flex gap-2 items-center'>
            <AiFillDashboard className='w-6 h-6' />
            <Link className='text-md' href="/">Dashboard</Link>
          </li>
          <li className='flex gap-2 items-center'>
            <BiSolidPieChartAlt2 className='w-6 h-6' />
            <Link className='text-md' href="/charts">Chart</Link>
          </li>
          <li className='flex gap-2 items-center'>
            <FaTable className='w-6 h-6' />
            <Link className='text-md' href="/datatable">Data Table</Link>
          </li>
          <li className='flex gap-2 items-center'>
            <LuListTodo className='w-6 h-6' />
            <Link className='text-md' href="/todo">Todo</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
