import { RxDragHandleDots2 } from "react-icons/rx";
import Badge from "@/components/todo/badge";
import { FaEdit } from "react-icons/fa";

const list = () => {
  return (
    <div className="listitem flex justify-between place-items-center bg-zinc-50 px-2.5 py-2.5 mb-1 border-l-slate-300 border-l-2 ">
        <div className="flex flex-row gap-2 place-items-center">
        <RxDragHandleDots2/>
        <input type="checkbox" className=" accent-blue-600 w-4 h-4 text-blue-600 bg-blue-100 border-blue-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-800 focus:ring-2 dark:bg-blue-700 dark:border-blue-600"/>
        <h3 className="font-bold text-gray-700">List Name</h3>
        <Badge level="error" label="progress"/>
        </div>
        <div className="text-red-600">
            <FaEdit/>
        </div>
    </div>
  )
}

export default list