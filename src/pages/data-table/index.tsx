import ReUsableTable from "@/components/ReUsableTable";
import React, { useEffect, useState } from "react";
import { tableData } from "./data";
import SearchBar from "@/components/SearchBar";

function Datatable() {

  const [tableDetails, setTableDetails] = useState(tableData)

  return (
    <>
      <SearchBar tableDetails = {tableDetails} setTableDetails={setTableDetails}/> 
     <ReUsableTable tableDetails={tableDetails} setTableDetails={setTableDetails}/>
      {/* <ReUsableTable tableDetails = {tableData}/> */}
    </>
  );
}

export default Datatable;
