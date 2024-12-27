import React from 'react';

interface DropdownProps {
  options: string[]; // Array of options to display in the dropdown
  onSort: (sortBy: string) => void; // Function that handles sorting when an option is selected
  buttonLabel: string; // Label for the dropdown button
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSort, buttonLabel }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    onSort(value); // Call the sorting function passed in as a prop
  };

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Label */}

      {/* Dropdown Menu */}
      <select
        id="dropdown"
        onChange={handleChange}
        className="block w-full px-4 py-2 mt-1 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select {buttonLabel}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
