import ReUsableTable from "@/components/ReUsableTable";
import React, { useState } from "react";
import SearchBar from "@/components/SearchBar";
import { TableDetails } from "@/utils/types";
import { tableData } from "./data";

function Datatable() {
  const [tableDetails, setTableDetails] = useState<TableDetails>(tableData);

  return (
    <>
      <SearchBar
        tableDetails={tableDetails}
        setTableDetails={setTableDetails}
      />
      <ReUsableTable tableDetails={tableDetails} />
    </>
  );
}

export default Datatable;
