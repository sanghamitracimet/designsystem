import { ICellEditorParams } from "ag-grid-community";
import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";
import axios from "axios";
import { TableRows } from "@/utils/types";

export const CustomCustomerEditor = forwardRef((props: ICellEditorParams, ref) => {
    const [value, setValue] = useState(props.value);
    const inputRef = useRef<HTMLInputElement>(null);
    const [isValid, setIsValid] = useState(true);

    // Implement required ag-Grid editor interface
    useImperativeHandle(ref, () => {
        return {
            getValue() {
                return value;
            },
            isCancelBeforeStart() {
                return false;
            },
            isCancelAfterEnd() {
                return !isValid;
            },
            // This focuses the input element
            afterGuiAttached() {
                inputRef.current?.focus();
            }
        };
    });

    useEffect(() => {
        // Initial focus and value setup
        inputRef.current?.focus();
        setValue(props.value);
    }, [props.value]);

    const validateValue = (value: string) => {
        // Add your validation logic here
        return value.length >= 2; // Example: require at least 2 characters
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setValue(newValue);
        setIsValid(validateValue(newValue));
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            if (!isValid) return;

            const updatedData = {
                ...props.data,
                customer: value
            } as TableRows;

            // Update the server
            updateServerData(updatedData);

            // Stop editing
            if (props.api) {
                props.api.stopEditing();
            }
        } else if (event.key === 'Escape') {
            if (props.api) {
                props.api.stopEditing(true); // Stop editing and discard changes
            }
        }
    };

    const updateServerData = async (updatedData: TableRows) => {
        try {
            if (!updatedData.id) {
                throw new Error('Missing ID in updated data');
            }

            const response = await axios.put(
                `http://localhost:3333/data/${updatedData.id}`,
                updatedData
            );

            // Update the grid after successful server update
            if (props.api) {
                props.api.applyTransaction({ update: [response.data] });
            }
        } catch (error) {
            console.error('Error updating data:', error);
            // Optionally revert the edit or show an error message
        }
    };

    return (
        <div className="ag-cell-edit-wrapper" style={{ width: '100%', height: '100%' }}>
            <input
                ref={inputRef}
                type="text"
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className={`ag-cell-edit-input ${!isValid ? 'border-red-500' : ''}`}
                style={{
                    width: '100%',
                    height: '100%',
                    padding: '0 8px',
                    fontSize: 'inherit',
                    border: isValid ? '1px solid #ccc' : '1px solid red'
                }}
            />
        </div>
    );
});

CustomCustomerEditor.displayName = 'CustomCustomerEditor';

// Define the available status options
const STATUS_OPTIONS = ['Approval', 'Payment', 'Briefing', 'Sign'];

export const CustomStatusEditor = forwardRef((props: ICellEditorParams, ref) => {
    const [value, setValue] = useState(props.value);
    const refInput = useRef<HTMLSelectElement>(null);

    useEffect(() => {
        refInput.current?.focus();
        setValue(props.value);
    }, [props.value]);

    useImperativeHandle(ref, () => {
        return {
            getValue() {
                return value;
            },
            isCancelBeforeStart() {
                return false;
            },
            isCancelAfterEnd() {
                return false;
            },
            afterGuiAttached() {
                refInput.current?.focus();
            }
        };
    });

    const updateServerData = async (updatedData: TableRows) => {
        try {
            if (!updatedData.id) {
                throw new Error('Missing ID in updated data');
            }

            await axios.put(
                `http://localhost:3333/data/${updatedData.id}`,
                updatedData
            );

            // Update the row node directly
            const rowNode = props.api.getRowNode(updatedData.id.toString());
            if (rowNode) {
                rowNode.setData({ ...rowNode.data, status: value });
            }

            // Refresh the cells to trigger re-render
            if (rowNode) {
                props.api.refreshCells({
                    force: true,
                    rowNodes: [rowNode],
                    columns: ['status']
                });
            }

        } catch (error) {
            console.error('Error updating status:', error);
            // Revert the value in case of error
            setValue(props.value);
            props.api.refreshCells({
                force: true,
                columns: ['status']
            });
        }
    };

    const handleChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newValue = event.target.value;
        setValue(newValue);

        const updatedData = {
            ...props.data,
            status: newValue
        } as TableRows;

        // First update the cell immediately for instant feedback
        const rowNode = props.api.getRowNode(updatedData.id.toString());
        if (rowNode) {
            rowNode.setData({ ...rowNode.data, status: newValue });
        }

        // Then update the server
        await updateServerData(updatedData);

        // Stop editing
        props.api.stopEditing();
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.api.stopEditing();
        } else if (event.key === 'Escape') {
            props.api.stopEditing(true);
        }
    };

    return (
        <select
            ref={refInput}
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="w-full h-full border-0 outline-none bg-white p-2 text-sm"
        >
            {STATUS_OPTIONS.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
});

CustomStatusEditor.displayName = 'CustomStatusEditor';