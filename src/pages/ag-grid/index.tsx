import React, { useEffect, useState } from "react";
import "ag-grid-community/styles/ag-theme-alpine.css"; // Import the ag-Grid theme
import { AgGridReact, CustomCellRendererProps } from "ag-grid-react";
import { TableRows } from "@/utils/types";
import {
  ModuleRegistry,
  ClientSideRowModelModule,
  PaginationModule, // Import the PaginationModule
  ColDef,
  TextFilterModule,
  NumberFilterModule,
  TextEditorModule,
  ValidationModule,
  CustomEditorModule,
  NumberEditorModule,
  CellStyleModule,
} from "ag-grid-community";
import axios from "axios";
import Button from "@/components/buttons/Button";
import { BtnStatusSelector } from "@/utils/utility";
import Avatar from "@/components/Avatar";
import { CustomCustomerEditor, CustomStatusEditor } from "./CustomCellEditor";


// Register required modules
ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  CustomEditorModule,
  PaginationModule,
  TextFilterModule,
  NumberFilterModule,
  NumberEditorModule,
  CellStyleModule,
  TextEditorModule,
  ValidationModule
]);

const CustomButtonComponent = (props: CustomCellRendererProps) => {
  return (
    <Button
      title={props.value} // Display the value from the cell
      textColor="white"
      bgColor={BtnStatusSelector(props.value)} // Apply background color based on status
      classNames={["w-20", "p-2", "h-9", "m-2", "text-sm", "rounded-md"]}
    />
  );
};

const CustomAvatarComponent = (props: CustomCellRendererProps) => {
  return (
    <div className="flex justify-start items-center gap-3">
      <Avatar src={"https://placehold.co/400x400"} />
      <div>{props.value}</div>
    </div>
  );
};


const DataGrid = () => {
  const [rowData, setRowData] = useState<TableRows[]>([]);
  const [fontSize, setFontSize] = useState<number>(16); // Default font size
  const [rowHeight, setRowHeight] = useState<number>(40); // Default row height, can be adjusted dynamically

  const [colDefs] = useState<ColDef<TableRows>[]>([
    {
      field: "id",
      headerName: "ID",
      editable: false,
      maxWidth: 100,
      sortable: true,
      lockVisible: true,
      cellStyle: { textAlign: "center" }, // Center align the cell content
    },
    {
      field: "status",
      headerName: "Status",
      cellRenderer: CustomButtonComponent,
      cellEditor: 'customStatusEditor',  // Add this line
      sortable: true,
      editable: true,  // Change this to true
      filter: "agTextColumnFilter",
      cellStyle: { textAlign: "center" },
    },
    {
      field: "customer",
      headerName: "Customer",
      cellRenderer: CustomAvatarComponent,
      cellEditor: 'customCustomerEditor',
      sortable: true,
      editable: true,
      filter: true,
      minWidth: 200,
      cellStyle: { textAlign: "center" },
    },
    {
      field: "estate",
      headerName: "Estate",
      editable: true,
      sortable: true,
      filter: "agTextColumnFilter",
      cellStyle: { textAlign: "center" }, // Center align the cell content
    },
    {
      field: "total",
      headerName: "Total ($)",
      sortable: true,
      editable: true,
      cellEditor: 'agNumberCellEditor',
      filter: "agNumberColumnFilter",
      cellStyle: { textAlign: "center" }, // Center align the cell content
    },
    {
      field: "advance",
      headerName: "Advance ($)",
      sortable: true,
      cellEditor: 'agNumberCellEditor',
      editable: true,
      filter: "agNumberColumnFilter",
      cellStyle: { textAlign: "center" }, // Center align the cell content
    },
    {
      field: "balance",
      headerName: "Balance ($)",
      sortable: true,
      editable: true,
      cellEditor: 'agNumberCellEditor',
      resizable: false,
      filter: "agNumberColumnFilter",
      cellStyle: { textAlign: "center" }, // Center align the cell content
    },
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/data")
      .then((res) => {
        setRowData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const components = {
    customCustomerEditor: CustomCustomerEditor,
    customStatusEditor: CustomStatusEditor,
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onCellValueChanged = (event: any) => {
    const updatedData = event.data; // The updated row data
    updateServerData(updatedData); // Send update to the server
  };

  const updateServerData = (updatedData: TableRows) => {
    axios
      .put(`http://localhost:3333/data/${updatedData.id}`, updatedData) // Update specific record
      .then((res) => console.log("Data updated:", res.data))
      .catch((error) => console.error("Error updating data:", error));
  };

  // Function to calculate the dynamic font size and row height
  const calculateFontSizeAndRowHeight = () => {
    const gridHeight = 650; // Fixed height of the grid (adjust if needed)
    const rowsPerPage = 10; // Default rows per page
    const rowHeightCalculated = gridHeight / rowsPerPage; // Calculate height per row

    const fontSizeCalculated = rowHeightCalculated * 0.3; // Adjust 0.4 based on how much text should fit in the row
    setFontSize(fontSizeCalculated);
    setRowHeight(rowHeightCalculated); // Set row height dynamically
  };



  // Call the font size and row height calculation whenever the component is mounted or updated
  useEffect(() => {
    calculateFontSizeAndRowHeight();
  }, [rowData]);

  return (
    <div
      className="ag-theme-alpine"
      style={{
        height: "650px",
        width: "100%",
        margin: "auto",
        marginTop: '4rem',
        fontSize: `${fontSize}px`, // Dynamically set the font size
        overflow: "auto", // Ensure scrollable area is applied
      }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        key='ag-grid'
        pagination={true} // Enable pagination
        paginationPageSize={10} // Set the number of rows per page
        paginationPageSizeSelector={[8, 10]} // Enable page size selector
        animateRows={true} // Enable row animation
        rowSelection="single" // Single row selection
        defaultColDef={{
          resizable: true,
          flex: 1,
          editable: true,
          sortable: true,
          cellStyle: { textAlign: "center" }, // Center align the cell content
        }}
        getRowHeight={() => rowHeight}
        headerHeight={fontSize * 1.5} // Adjust header height based on font size
        onCellValueChanged={onCellValueChanged}
        components={components}
      />
    </div>
  );
};

export default DataGrid;
