import React, { FC } from "react";

interface RequiredSymbolProps {
  className?: string;
}

const RequiredSymbol: FC<RequiredSymbolProps> = () => {
  return <span className="text-red-500">*</span>;
};

export default RequiredSymbol;
