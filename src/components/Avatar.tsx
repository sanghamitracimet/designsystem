import React from "react";

function Avatar({ src }: { src: string }) {
  return (
    <>
      <img className="w-10 h-10 rounded-full" src={src} alt="Rounded avatar" />
    </>
  );
}

export default Avatar;
