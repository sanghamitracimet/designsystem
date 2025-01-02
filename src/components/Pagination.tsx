import { useState, useEffect } from "react";
import { usePagination } from "@/components/hooks/usePagination";
import { PaginationProps } from "@/utils/types";

const Pagination = <T,>({ data, dataPerPage, onPaginate }: PaginationProps<T>)=>{

  const [currentPage, setCurrentPage] = useState(1);
  const siblingCount = 1;
  const totalDataCount = data.length;
  const totalPageCount = Math.ceil(totalDataCount / dataPerPage);
  const paginationRange = usePagination({
    currentPage,
    totalDataCount,
    siblingCount,
    dataPerPage,
  });

  useEffect(() => {
    const startIndex = (currentPage - 1) * dataPerPage;
    const endIndex = startIndex + dataPerPage;
    const paginatedData = data.slice(startIndex, endIndex);
    onPaginate(paginatedData);  
  }, [currentPage, data, dataPerPage]);

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex items-center justify-center">
      {/* Previous Button */}
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`hover:bg-lightGray border-[1px] border-offBlue p-2 text-[12px] rounded-l-md text-darkBlue ${currentPage === 1 ? " cursor-not-allowed": ""}`}
      >
        {'<<'}
      </button>

      {/* Page Buttons */}
      {paginationRange.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`hover:bg-listGray border-[1px] border-offBlue  py-2 px-2.5 text-[12px] text-darkBlue  ${
            page === currentPage
              ? "bg-listGray"
              : ""
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() =>
          currentPage < totalPageCount && onPageChange(currentPage + 1)
        }
        disabled={currentPage === totalPageCount}
        className={`hover:bg-listGray border-[1px] border-offBlue  p-2 text-[12px] rounded-r-md text-darkBlue ${currentPage === totalPageCount ? " cursor-not-allowed": ""}`}>
         {'>>'}
      </button>
    </div>
  );
};

export default Pagination;
