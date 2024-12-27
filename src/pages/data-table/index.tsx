import ReUsableTable from "@/components/ReUsableTable";
import React from "react";
import { tableData } from "./data";

function Datatable() {
  return (
    <>
      <ReUsableTable tableDetails={tableData} />
    </>
  );
}

export default Datatable;
