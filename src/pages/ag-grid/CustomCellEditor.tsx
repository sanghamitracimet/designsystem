import { ICellEditorParams } from "ag-grid-community";
import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";
import axios from "axios";
import { TableRows } from "@/utils/types";

export const CustomCustomerEditor = forwardRef((props: ICellEditorParams, ref) => {
    const [value, setValue] = useState();
    const inputRef = useRef<HTMLInputElement>(null);
    const [isValid, setIsValid] = useState(true);

    useImperativeHandle(ref, () => ({
        getValue: () => value,
        isCancelBeforeStart: () => false,
        isCancelAfterEnd: () => !isValid,
        afterGuiAttached: () => inputRef.current?.focus(),
    }));

    useEffect(() => {
        inputRef.current?.focus();
        setValue(props.value);
    }, [props.value]);

    const validateValue = (value: string) => value.length >= 2; // Example validation

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("event.target.value", event.target.value);
        const newValue = event.target.value;
        setValue(newValue);
        setIsValid(validateValue(newValue));
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            if (!isValid) return;

            const updatedData = {
                ...props.data,
                customer: value,
            } as TableRows;

            updateServerData(updatedData);
            props.api?.stopEditing();
        } else if (event.key === "Escape") {
            props.api?.stopEditing(true);
        }
    };

    const updateServerData = async (updatedData: TableRows) => {
        try {
            if (!updatedData.id) throw new Error("Missing ID in updated data");
            const response = await axios.put(`http://localhost:3333/data/${updatedData.id}`, updatedData);
            props.api?.applyTransaction({ update: [response.data] });
        } catch (error) {
            console.error("Error updating data:", error);
        }
    };

    console.log({value});

    return (
        <div className="ag-cell-edit-wrapper" style={{ width: "100%", height: "100%" }}>
            <input
                ref={inputRef}
                type="text"
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className={`ag-cell-edit-input ${!isValid ? "border-red-500" : ""}`}
                style={{
                    width: "100%",
                    height: "100%",
                    padding: "0 8px",
                    fontSize: "inherit",
                    border: isValid ? "1px solid #ccc" : "1px solid red",
                }}
            />
        </div>
    );
});

CustomCustomerEditor.displayName = "CustomCustomerEditor";
