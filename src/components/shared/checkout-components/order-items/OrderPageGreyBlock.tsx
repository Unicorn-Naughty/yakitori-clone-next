import { cn } from "@/lib/utils";
import React from "react";
import { Title } from "../..";

interface Props {
  title?: string;
  endAdornment?: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

export const GreyBlock: React.FC<React.PropsWithChildren<Props>> = ({
  title,
  className,
  contentClassName,
  children,
}) => {
  return (
    <div className={cn("dark:bg-[#2b2d2f] bg-[#e9e9e952] rounded-xl", className)}>
      {title && (
        <div className="flex items-center justify-between p-5 px-7 ">
          <Title text={title} size="sm" className="font-bold" />
        </div>
      )}

      <div className={cn("px-5 py-4", contentClassName)}>{children}</div>
    </div>
  );
};
