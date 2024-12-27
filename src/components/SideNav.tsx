import Link from "next/link";
import { AiFillDashboard } from "react-icons/ai";
import { BiSolidPieChartAlt2 } from "react-icons/bi";
import { FaTable } from "react-icons/fa";
import { LuListTodo } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai"; // Import close icon

const SideNav = ({ isOpen, toggleSideNav }: { isOpen: boolean, toggleSideNav: () => void }) => {
  return (
    <div>
      {/* Overlay for mobile screens */}
      <div
        className={`fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden ${isOpen ? "block" : "hidden"}`}
        onClick={toggleSideNav}
      ></div>

      {/* SideNav content */}
      <div
        className={`fixed left-0 top-0 w-56 h-screen bg-primarySidebar text-lightGray p-4 z-30 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:block`}
      >
        {/* Close button for mobile */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl mb-8">My App</h2>
          <AiOutlineClose
            className="w-6 h-6 cursor-pointer lg:hidden"
            onClick={toggleSideNav}
          />
        </div>
        <ul className="space-y-8">
          <li className="flex gap-2 items-center">
            <AiFillDashboard className="w-6 h-6" />
            <Link className="text-md" href="/">Dashboard</Link>
          </li>
          <li className="flex gap-2 items-center">
            <BiSolidPieChartAlt2 className="w-6 h-6" />
            <Link className="text-md" href="/charts">Chart</Link>
          </li>
          <li className="flex gap-2 items-center">
            <FaTable className="w-6 h-6" />
            <Link className="text-md" href="/data-table">Data Table</Link>
          </li>
          <li className="flex gap-2 items-center">
            <LuListTodo className="w-6 h-6" />
            <Link className="text-md" href="/todo">Todo</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
