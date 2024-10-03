import React from "react";
import Lock from "./lock.svg";
import UnLock from "./unLock.svg";
import Copy from "./copy.svg";
export const ColorRectangle = ({ color, lockToggling }) => {
  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Text copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <div
      style={{ backgroundColor: color.hexa }}
      className="h-screen w-1/5 flex flex-col justify-center items-center"
    >
     
      <div onClick={lockToggling}>
        <img
          src={color.isLocked ? Lock : UnLock}
          className="w-14 h-14   m-auto mb-20"
        />
      </div>
      <div onClick={() => copyText(color.hexa)}>
        <img src={Copy} className="w-24 h-24 m-auto mb-20" />
      </div>
      <p className=" mb-20 text-3xl font-bold text-gray-500 text-center">
        {color.hexa}
      </p>
    </div>
  );
};
// onClick={lockToggling}
