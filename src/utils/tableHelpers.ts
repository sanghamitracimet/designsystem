// src/utils/tableHelpers.ts

import { TableRows } from "@/utils/types";

/**
 * Paginates rows based on the current page and the number of rows per page.
 * @param rows - Array of table rows to be paginated.
 * @param currentPage - Current active page number.
 * @param rowsPerPage - Number of rows to display per page.
 * @returns Array of rows for the current page.
 */
export const paginateRows = (
    rows: TableRows[],
    currentPage: number,
    rowsPerPage: number
  ) => {
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    return rows.slice(indexOfFirstRow, indexOfLastRow);
  };
  
  /**
   * Calculates the total number of pages based on rows and rows per page.
   * @param rows - Array of table rows.
   * @param rowsPerPage - Number of rows to display per page.
   * @returns Total number of pages.
   */
  export const calculateTotalPages = (
    rows: TableRows[],
    rowsPerPage: number
  ): number => {
    return Math.ceil(rows.length / rowsPerPage);
  };
  
  /**
   * Filters rows based on a specific column and its value.
   * @param rows - Array of table rows.
   * @param filterOption - Column key to filter by.
   * @param filterValue - Value to filter rows by.
   * @returns Array of filtered rows.
   */
  export const filterRows = (
    rows: TableRows[],
    filterOption: string,
    filterValue: string | number
  ): TableRows[] => {
    if (!filterOption || !filterValue) {
      return rows;
    }
    return rows.filter(
      (row) => row[filterOption as keyof TableRows] === filterValue
    );
  };
  
  /**
   * Sorts rows based on a column and sort direction (ascending or descending).
   * @param rows - Array of table rows.
   * @param key - Column key to sort by.
   * @param direction - Sort direction, either "asc" or "desc".
   * @returns Array of sorted rows.
   */
  export const sortRows = (
    rows: TableRows[],
    key: keyof TableRows,
    direction: "asc" | "desc"
  ): TableRows[] => {
    return [...rows].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });
  };
  
  /**
   * Determines the next sort direction based on the current sort state.
   * @param currentKey - Currently sorted column key.
   * @param sortKey - Column key to determine the new sort direction.
   * @param currentDirection - Current sort direction, "asc" or "desc".
   * @returns New sort direction: "asc" or "desc".
   */
  export const getNextSortDirection = (
    currentKey: string,
    sortKey: string,
    currentDirection: string
  ): "asc" | "desc" => {
    return currentKey === sortKey && currentDirection === "asc" ? "desc" : "asc";
  };
  