import React, { useState } from 'react';

const CalendarComponent: React.FC = () => {
  // Get the current date and initialize state for the current month and year
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  // Function to go to the previous month
  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11); // December
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  // Function to go to the next month
  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0); // January
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Get the first day of the month and how many days are in the month
  const getMonthDetails = () => {
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const numberOfDays = lastDay.getDate();
    const startDay = firstDay.getDay(); // Day of the week the month starts on (0 = Sunday, 6 = Saturday)
    return { numberOfDays, startDay };
  };

  // Generate the array of days for the calendar
  const generateCalendarDays = () => {
    const { numberOfDays, startDay } = getMonthDetails();
    const days = [];
    let day = 1;

    // Fill the empty cells for days before the first day of the month
    for (let i = 0; i < startDay; i++) {
      days.push(null);
    }

    // Fill the days of the month
    for (let i = startDay; i < 7 && day <= numberOfDays; i++) {
      days.push(day++);
    }

    // Continue filling the calendar with remaining weeks
    while (day <= numberOfDays) {
      for (let i = 0; i < 7 && day <= numberOfDays; i++) {
        days.push(day++);
      }
    }

    return days;
  };

  // Get the month and year names for the header
  const getMonthName = () => {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return monthNames[currentMonth];
  };

  return (
    <div className="max-w-lg mx-auto p-2 bg-white rounded-lg shadow-md border-1 border-teal">
      {/* Header with Month and Year */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={goToPreviousMonth}
          className="px-4 py-2 bg-primary-sidebar text-black rounded-lg hover:bg-primary-sidebar"
        >
          Previous
        </button>
        <h2 className="text-xl font-semibold">
          {getMonthName()} {currentYear}
        </h2>
        <button
          onClick={goToNextMonth}
          className="px-4 py-2 bg-primary-sidebar text-black rounded-lg hover:bg-primary-sidebar"
        >
          Next
        </button>
      </div>

      {/* Calendar Days Header */}
      <div className="grid grid-cols-7 gap-2 text-center font-semibold mb-2">
        <div className="text-darkGray">Sun</div>
        <div className="text-darkGray">Mon</div>
        <div className="text-darkGray">Tue</div>
        <div className="text-darkGray">Wed</div>
        <div className="text-darkGray">Thu</div>
        <div className="text-darkGray">Fri</div>
        <div className="text-darkGray">Sat</div>
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-2 text-center">
        {generateCalendarDays().map((day, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg cursor-pointer ${day ? 'bg-gray-100 hover:bg-lightGray' : 'bg-transparent'}`}
          >
            {day && <span>{day}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarComponent;