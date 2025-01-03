import Link from "next/link";
import { useRouter } from "next/router";
import { AiFillDashboard, AiOutlineClose } from "react-icons/ai";
import { BiSolidPieChartAlt2 } from "react-icons/bi";
import { FaTable } from "react-icons/fa";
import { LuListTodo } from "react-icons/lu";

const SideNav = ({ isOpen, toggleSideNav }: { isOpen: boolean; toggleSideNav: () => void; }) => {
  const router = useRouter();

  return (
    <aside className="lg:w-56 md:w-0 sm:w-0">
      <button
        className={`fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden ${isOpen ? "block" : "hidden"}`}
        onClick={toggleSideNav}
        aria-label="Toggle side navigation"
      >
      </button>

      <div
        className={`fixed left-0 top-0 w-56 h-screen bg-primarySidebar text-lightGray p-4 z-30 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:block`}
      >
        <div className="flex justify-between items-center mb-8 p-2">
          <h2 className="text-2xl">My App</h2>
          <AiOutlineClose
            className="w-6 h-6 cursor-pointer lg:hidden"
            onClick={toggleSideNav}
          />
        </div>
        <ul className="space-y-8">
          <Link
            className={`flex gap-2 items-center p-2 rounded-lg ${router.pathname === "/" ? "bg-darkBlue" : ""}`}
            href="/"
          >
            <li className="flex gap-2 items-center">
              <AiFillDashboard className="w-6 h-6" />
              <span className="text-md">Dashboard</span>
            </li>
          </Link>

          <Link
            className={`flex gap-2 items-center p-2 rounded-lg ${router.pathname === "/charts" ? "bg-darkBlue" : ""}`}
            href="/charts"
          >
            <li className="flex gap-2 items-center">
              <BiSolidPieChartAlt2 className="w-6 h-6" />
              <span className="text-md">Chart</span>
            </li>
          </Link>

          <Link
            className={`flex gap-2 items-center p-2 rounded-lg ${router.pathname === "/data-table" ? "bg-darkBlue" : ""}`}
            href="/data-table"
          >
            <li className="flex gap-2 items-center">
              <FaTable className="w-6 h-6" />
              <span className="text-md">Data Table</span>
            </li>
          </Link>

          <Link
            className={`flex gap-2 items-center p-2 rounded-lg ${router.pathname === "/ag-grid" ? "bg-darkBlue" : ""}`}
            href="/ag-grid"
          >
            <li className="flex gap-2 items-center">
              <LuListTodo className="w-6 h-6" />
              <span className="text-md">AG Grid</span>
            </li>
          </Link>
        </ul>
      </div>
    </aside>
  );
};

export default SideNav;
