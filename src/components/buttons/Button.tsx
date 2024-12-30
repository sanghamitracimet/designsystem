<<<<<<< HEAD:src/components/Button.tsx
import { BtnProps } from "@/types";
import React from "react";

=======
import { BtnProps } from "@/utils/types";
import React from "react";


>>>>>>> 0f49d6f56b133b40e03778bb4b12e8d06dcffdf0:src/components/buttons/Button.tsx

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
