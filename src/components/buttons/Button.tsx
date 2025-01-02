
import { BtnProps } from "@/utils/types";
import React from "react";

<<<<<<< HEAD
=======


>>>>>>> 40aeb4b715abce6d997640aba3b8a62ccd755c24
function Button({ title, textColor, bgColor, classNames = [] }: Readonly<BtnProps>) {
  // Combine base classes with dynamic classes
  const combinedClasses = [
    `text-${textColor}`, // Dynamic text color
    bgColor, // Dynamic background color
    "p-2 rounded-md", // Default classes
    ...classNames, // Additional classes from the array
  ].join(" "); // Join them into a single string

  return (
    <button className={combinedClasses}>
      {title}
    </button>
  );
}

export default Button;
