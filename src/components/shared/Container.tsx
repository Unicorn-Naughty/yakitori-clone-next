import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface ContainerProps {
  className?: string;
}

export const Container: FC<React.PropsWithChildren<ContainerProps>> = ({
  className,
  children,
}) => {
  return <div className={cn("mx-auto max-w-[1192px]", className)}>{children}</div>;
};

