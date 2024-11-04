import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface TextProps {
  className?: string;
  children?: React.ReactNode;
}

export const Text: FC<TextProps> = ({ className, children }) => {
  return <p className={cn(" text-[#666]  mb-8", className)}>{children}</p>;
};
