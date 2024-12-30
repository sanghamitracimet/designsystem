"use client";
import { BtnStatusSelector } from "@/utils/utility";
import Button from "./Button";
import Avatar from "./Avatar";
import { useState } from "react";
import Dropdown from "./DropDown";
import { ReUsableTableProps, TableRows } from "@/utils/Types";

function ReUsableTable({ tableDetails }: ReUsableTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredRows, setFilteredRows] = useState<TableRows[]>(
    tableDetails.tableRows
  );
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });

  const rowsPerPage = 8;

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;

  const currentRows = filteredRows.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(filteredRows.length / rowsPerPage);

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

  const handleFilter = (filterOption: string, filterValue: string | number) => {
    if (!filterOption || !filterValue) {
      setFilteredRows(tableDetails.tableRows);
    } else {
      setFilteredRows(
        tableDetails.tableRows.filter(
          (row) => row[filterOption as keyof TableRows] === filterValue
        )
      );
    }
    setCurrentPage(1);
  };

  const handleSort = (key: keyof TableRows) => {
    const direction =
      sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";

    const sortedRows = [...filteredRows].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === "asc" ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === "asc" ? 1 : -1;
      }
      return 0;
    });

    setFilteredRows(sortedRows);
    setSortConfig({ key, direction });
  };

  const dropdownItems = {
    options: ["Approval", "Payment", "Sign", "Briefing"],
    buttonLabel: "Status",
    onSort: (selectedOption: string) => {
      if (selectedOption === "") {
        handleFilter("", "");
      } else {
        handleFilter("status", selectedOption);
      }
    },
  };

  const dropdownItems2 = {
    options: ["Leipzig, 13199", "Berlin, 14199", "Munich, 12199"],
    buttonLabel: "Estate",
    onSort: (selectedOption: string) => {
      if (selectedOption === "") {
        handleFilter("", "");
      } else {
        handleFilter("estate", selectedOption);
      }
    },
  };

  return (
    <div className="relative overflow-x-auto border border-gray rounded-md m-5 p-5 shadow-md sm:rounded-lg">
      <div className="flex justify-between gap-5 mb-4">
        <div className="flex gap-4">
          <Dropdown
            buttonLabel={dropdownItems.buttonLabel}
            options={dropdownItems.options}
            onSort={dropdownItems.onSort}
          />
          <Dropdown
            buttonLabel={dropdownItems2.buttonLabel}
            options={dropdownItems2.options}
            onSort={dropdownItems2.onSort}
          />
        </div>
        <div>
          <Button
            title="Save View"
            bgColor="bg-offBlue"
            textColor="white"
            classNames={["w-30"]}
          />
        </div>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-x-scroll">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {tableDetails.tableHeadings.map((ele) => (
              <th
                scope="col"
                key={ele.id}
                className="px-6 py-3 cursor-pointer"
                onClick={() =>
                  ["total", "advance", "balance"].includes(ele.label.toLowerCase()) &&
                  handleSort(ele.label.toLowerCase() as keyof TableRows)
                }
              >
                {ele.label}
                {sortConfig.key === ele.label.toLowerCase() &&
                  (sortConfig.direction === "asc" ? " \u2191" : " \u2193")}
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
                <Button
                  title={ele.status}
                  textColor="white"
                  bgColor={BtnStatusSelector(ele.status)}
                  classNames={["w-20"]}
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
          className="px-4 py-2 bg-blue-500 text-black rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-black rounded-md disabled:bg-listGray disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ReUsableTable;
