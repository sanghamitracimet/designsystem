import React from "react";

interface BtnProps {
  title: string;
  textColor: string;
  bgColor: string;
}

function Button({ title, textColor, bgColor }: BtnProps) {
    console.log({bgColor});
  return (
    <button className={`text-${textColor} ${bgColor} p-2 w-20 rounded-md`} >
      {title}
    </button>
  );
}

export default Button;
