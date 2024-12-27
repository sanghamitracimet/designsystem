import { useMemo } from "react";

export const usePagination = ({
  totalDataCount,
  dataPerPage,
  siblingCount,
  currentPage,
}) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalDataCount / dataPerPage);
    // function getPageRange(currentPage, totalPageCount, siblingCount = 1) {
    const rangeSize = siblingCount * 2 + 1; // Total range size, including current page
    let startPage = Math.max(1, currentPage - siblingCount); // Ensure it doesn’t go below 1
    let endPage = Math.min(totalPageCount, startPage + rangeSize - 1); // Ensure it doesn’t exceed totalPageCount

    // Adjust startPage if the endPage hits the totalPageCount but we still don't have enough range
    startPage = Math.max(1, endPage - rangeSize + 1);

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
    //   }
  }, [totalDataCount, dataPerPage, siblingCount, currentPage]);
  return paginationRange;
};
