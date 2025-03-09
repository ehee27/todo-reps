import { buttonProps } from "@/types";
import clsx from "clsx";
import React from "react";

const Button = ({
  type,
  text,
  onClick,
  actionButton,
  bgColor,
  ...props
}: buttonProps) => {
  return (
    <div>
      <button
        className={clsx(
          actionButton &&
            "text-white hover:bg-blue-800 focus:ring-4 font-medium founded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none h-[100%] rounded-xl",
          `${bgColor} hover:${bgColor} font-medium founded-lg text-sm px-5 py2.5 me-2 mb-2 focus:outline-none h-[100%] rounded-lg`
        )}
        onClick={onClick}
        type={type}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
