import { FaSearch } from "react-icons/fa";
import { tableData } from "@/pages/data-table/data";
import { SearchBarProps } from "@/utils/types";
const SearchBar : React.FC<SearchBarProps> = ({ tableDetails, setTableDetails }) => {
  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    let val = e.target.value
    setTableDetails((prev) =>
     ({
      ...prev, tableRows: tableData.tableRows.filter((el)=>(
        el.customer.toLowerCase().includes(val.toLowerCase())
      ))
     })
    );
  }

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
