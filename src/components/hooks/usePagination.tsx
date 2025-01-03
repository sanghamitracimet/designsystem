import { useMemo } from "react";

export const usePagination: ({
  totalDataCount,
  dataPerPage,
  siblingCount,
  currentPage,
}: {
  totalDataCount: number;
  dataPerPage: number;
  siblingCount: number;
  currentPage: number;
}) => number[] = ({
  totalDataCount,
  dataPerPage,
  siblingCount,
  currentPage,
}) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalDataCount / dataPerPage);
    // function getPageRange(currentPage, totalPageCount, siblingCount = 1) {

    const rangeSize = siblingCount * 2 + 1; // Total range size, including current page
    let startPage = Math.max(1, currentPage - siblingCount); // shouldn't go below 1
    let endPage = Math.min(totalPageCount, startPage + rangeSize - 1); // shouldn't go above page count

    startPage = Math.max(1, endPage - rangeSize + 1);

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
    //   }
  }, [totalDataCount, dataPerPage, siblingCount, currentPage]);
  return paginationRange;
};
