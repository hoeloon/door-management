import React from "react";

type Props = { text: string | void; bgColor: string };

const CustomChip = ({ text, bgColor }: Props) => {
  return (
    <div
      className={`flex justify-center items-center bg-gray-300 border-red-100 rounded-3xl px-3 w-fit h-6 my-3 font-mono ${bgColor}`}
    >
      {text || ""}
    </div>
  );
};

export default CustomChip;
