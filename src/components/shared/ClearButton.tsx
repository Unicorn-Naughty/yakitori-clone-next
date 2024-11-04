import React, { FC } from "react";
import { X } from "lucide-react";
interface ClearButtonProps {
  onClick?: VoidFunction;
}

const ClearButton: FC<ClearButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 opacity-30 hover:opacity-100 cursor-pointer"
    >
      <X className="h-5 w-5" />
    </button>
  );
};

export default ClearButton;
