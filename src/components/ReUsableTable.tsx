"use client";
import { BtnStatusSelector } from "@/utils/utility";
import Button from "./Button";
import Avatar from "./Avatar";
import { useState } from "react";
import Dropdown from "./DropDown";

interface TableHeadings {
  id: number;
  label: string;
}

interface TableRows {
  id: string;
  checked: boolean;
  status: string;
  customer: string;
  estate: string;
  total: number;
  advance: number;
  balance: number;
}

interface TableDetails {
  tableHeadings: TableHeadings[];
  tableRows: TableRows[];
}

interface ReUsableTableProps {
  tableDetails: TableDetails;
}
function ReUsableTable({ tableDetails }: ReUsableTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 8;

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;

  const currentRows = tableDetails.tableRows.slice(
    indexOfFirstRow,
    indexOfLastRow
  );

  const totalPages = Math.ceil(tableDetails.tableRows.length / rowsPerPage);
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const dropdownItems = {
    options: ["Approval", "Payment", "Sign", "Briefing"],
    buttonLabel: "Status",
    onSort:()=>{
      console.log("Sorting")
    }
  };

  return (
    <>
      <div className="relative overflow-x-auto border border-gray rounded-md m-5 p-5 shadow-md sm:rounded-lg">
        <Dropdown buttonLabel={dropdownItems.buttonLabel} options={dropdownItems.options} onSort={dropdownItems.onSort} />
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-x-scroll">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {tableDetails.tableHeadings.map((ele) => (
                <th scope="col" key={ele.id} className="px-6 py-3">
                  {ele.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentRows.map((ele) => (
              <tr
                key={ele.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4">{ele.id}</td>
                <td className="px-6 py-4">
                  <input type="checkbox" checked={ele.checked} className="w-12" />
                </td>
                <td className="px-6 py-4">
                  <Button
                    title={ele.status}
                    textColor="white"
                    bgColor={BtnStatusSelector(ele.status)}
                  />
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="flex justify-start items-center gap-3">
                    <div>
                      <Avatar src={"https://placehold.co/400x400"} />
                    </div>
                    <div>{ele.customer}</div>
                  </div>
                </th>
                <td className="px-6 py-4">{ele.estate}</td>
                <td className="px-6 py-4">${ele.total}</td>
                <td className="px-6 py-4">${ele.advance}</td>
                <td className="px-6 py-4">${ele.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-500 text-black rounded-md disabled:bg-gray-300"
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-500 text-black rounded-md disabled:bg-gray-300"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default ReUsableTable;
