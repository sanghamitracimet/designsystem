import { useState } from "react";
import { usePagination } from "@/components/hooks/usePagination";
const Pagination = ({data, dataPerPage}) => {
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

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }
  

  const dataToDisplay = () => {
    const startIndex = (currentPage - 1) * dataPerPage;
    const endIndex = startIndex + dataPerPage;
    return data.slice(startIndex, endIndex);
  };

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex items-center justify-center">
      {/* Previous Button */}
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`hover:bg-gray-100 border-[1px] p-2 text-[12px] rounded-l-md text-blue-700 ${currentPage === 1 ? " cursor-not-allowed": ""}`}
      >
        {'<<'}
      </button>

      {/* Page Buttons */}
      {paginationRange.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`hover:bg-gray-100 border-[1px] py-2 px-2.5 text-[12px] text-blue-700  ${
            page === currentPage
              ? "bg-gray-100"
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
        className={`hover:bg-gray-100 border-[1px] p-2 text-[12px] rounded-r-md text-blue-700 ${currentPage === totalPageCount ? " cursor-not-allowed": ""}`}>
         {'>>'}
      </button>
    </div>
  );
};

export default Pagination;
