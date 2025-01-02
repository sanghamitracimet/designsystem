"use client";

import { useState, useEffect } from "react";
import { BtnStatusSelector } from "@/utils/utility";
import Avatar from "./Avatar";
import Dropdown from "./DropDown";
import Button from "./buttons/Button";
<<<<<<< HEAD
function ReUsableTable({ tableDetails }: Readonly<ReUsableTableProps>) {
  const [currentPage, setCurrentPage] = useState(1);
=======
import {
  paginateRows,
  calculateTotalPages,
  filterRows,
  sortRows,
  getNextSortDirection,
} from "@/utils/tableHelpers";
import { ReUsableTableProps, TableRows } from "@/utils/types";

/**
 * ReUsableTable component to display a dynamic, paginated, filterable, and sortable table.
 * @param tableDetails - Contains table headings and rows.
 */
function ReUsableTable({ tableDetails }: ReUsableTableProps) {
  const [currentPage, setCurrentPage] = useState(1); // Current page state
>>>>>>> 40aeb4b715abce6d997640aba3b8a62ccd755c24
  const [filteredRows, setFilteredRows] = useState<TableRows[]>(
    tableDetails.tableRows
  ); // Rows after filtering and sorting
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" }); // Sorting configuration

  const rowsPerPage = 8; // Number of rows per page
  const currentRows = paginateRows(filteredRows, currentPage, rowsPerPage); // Rows to display for the current page
  const totalPages = calculateTotalPages(filteredRows, rowsPerPage); // Total pages based on filtered rows

  /**
   * Handles moving to the previous page.
   * Prevents navigation if already on the first page.
   */
  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  /**
   * Handles moving to the next page.
   * Prevents navigation if already on the last page.
   */
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  /**
   * Filters rows based on a selected filter option and value.
   * Resets pagination to the first page after filtering.
   * @param filterOption - Column key to filter by.
   * @param filterValue - Value to filter rows by.
   */
  const handleFilter = (filterOption: string, filterValue: string | number) => {
    setFilteredRows(
      filterRows(tableDetails.tableRows, filterOption, filterValue)
    );
    setCurrentPage(1);
  };

  /**
   * Sorts rows by a specific column.
   * Toggles sort direction (ascending/descending) on repeated clicks.
   * @param key - Column key to sort by.
   */
  const handleSort = (key: keyof TableRows) => {
    const direction = getNextSortDirection(
      sortConfig.key,
      key,
      sortConfig.direction
    );
    setFilteredRows(sortRows(filteredRows, key, direction));
    setSortConfig({ key, direction });
  };

  const dropdownItems = [
    {
      options: ["Approval", "Payment", "Sign", "Briefing"], // Options for filtering by status
      buttonLabel: "Status",
      filterKey: "status",
    },
    {
      options: ["Leipzig, 13199", "Berlin, 14199", "Munich, 12199"], // Options for filtering by estate
      buttonLabel: "Estate",
      filterKey: "estate",
    },
  ];

  /**
   * Updates filtered rows when table data changes.
   */
  useEffect(() => {
    setFilteredRows(tableDetails.tableRows);
  }, [tableDetails.tableRows]);

  return (
    <div className="relative overflow-x-auto border border-gray rounded-md m-5 p-5 shadow-md sm:rounded-lg">
      {/* Filter Dropdowns */}
      <div className="flex justify-between gap-5 mb-4">
        <div className="flex gap-4">
          {dropdownItems.map((dropdown, index) => (
            <Dropdown
              key={index}
              buttonLabel={dropdown.buttonLabel}
              options={dropdown.options}
              onSort={(value) => handleFilter(dropdown.filterKey, value)}
            />
          ))}
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

      {/* Table */}
      <table className="w-full text-sm text-left overflow-y-scroll rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {tableDetails.tableHeadings.map((ele) => (
              <th
                scope="col"
                key={ele.id}
                className="px-6 py-3 cursor-pointer"
                onClick={() =>
                  ["total", "advance", "balance"].includes(
                    ele.label.toLowerCase()
                  ) && handleSort(ele.label.toLowerCase() as keyof TableRows)
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
              className="bg-white border-y border-slate-200 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
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
                  <Avatar src={"https://placehold.co/400x400"} />
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

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-black rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed bg-listGray hover:bg-gray duration-200"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-black rounded-md disabled:bg-listGray disabled:cursor-not-allowed bg-listGray hover:bg-gray duration-200"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ReUsableTable;
