import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface ErrorTextProps {
  className?: string;
  text: string;
}

const ErrorText: FC<ErrorTextProps> = ({ className, text }) => {
  return <p className={cn("text-red-500 text-sm ",className)}>{text}</p>;
};

export default ErrorText;
