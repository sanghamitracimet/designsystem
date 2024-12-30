import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { tableData } from "@/pages/data-table/data";
const SearchBar = ({ tableDetails, setTableDetails }) => {
  const [searchValue, setSearchValue] = useState("");
  function handleSearch(e) {
    let val = e.target.value
    setSearchValue(val);
    setTableDetails((prev) =>
     ({
      ...prev, tableRows: tableData.tableRows.filter((el)=>(
        el.customer.toLowerCase().includes(val.toLowerCase())
      ))
     })
    );
  }
  useEffect(()=>{
    setTableDetails(tableDetails)
  }, [tableDetails.tableRows])
  return (
    <div className="flex flex-row place-items-center border border-gray gap-2 rounded-md m-5 mt-0 p-2 shadow-md sm:rounded-lg">
      <FaSearch />
      <input
        type="text"
        placeholder="Search by customer"
        className="outline-none"
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );
};

export default SearchBar;
