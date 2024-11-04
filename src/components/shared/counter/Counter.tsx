import { cn } from "@/lib/utils";
import React, { FC } from "react";
import { SpinnerAddButton } from "../SpinnerAddButton";

interface CounterProps {
  className?: string;
  value: number;
  loading?: boolean;
  recValue?: boolean;
  onClick?: (type: "plus" | "minus") => void;
}

export const Counter: FC<CounterProps> = ({
  className,
  onClick,
  loading,
  value,
  recValue,
}) => {
  return (
    <div className={cn("flex items-center", className)}>
      <button
        disabled={recValue ? value === 0 : value === 1}
        onClick={() => onClick?.("minus")}
        type="button"
        dir="ltr"
        className={cn(
          "w-[39px] h-[45px] dark:bg-[#666] dark:text-black text-white  rounded-l-lg text-[25px] hover:bg-red-700 transition-all",
          (recValue ? value === 0 : value === 1)
            ? "dark:bg-[#666] bg-[#b8b8b8bd] hover:bg-[#b8b8b8bd] dark:hover:bg-[#666]"
            : "bg-red-600"
        )}
      >
        -
      </button>
      <b className=" text-center text-[25px] w-[100px]">
        {loading ? (
          <SpinnerAddButton className="text-center text-[25px] w-[100px]" />
        ) : (
          value
        )}
      </b>
      <button
        onClick={() => onClick?.("plus")}
        type="button"
        dir="rtl"
        className="dark:text-black text-white  w-[39px] h-[45px] bg-red-600 rounded-r-lg text-[25px] hover:bg-red-700 transition-all"
      >
        +
      </button>
    </div>
  );
};
