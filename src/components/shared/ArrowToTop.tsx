"use client";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import React, { FC, useState } from "react";
import { cn } from "../../lib/utils";

{
  /**
    При обновлении страницы пропадает стрелка и лого - доделать
    */
}

interface ArrowToTopProps {
  className?: string;
}

export const ArrowToTop: FC<ArrowToTopProps> = ({}) => {
  const [hideOnScroll, setHideOnScroll] = useState(true);

  useScrollPosition(
    ({ currPos }) => {
      const isShow = -76 < currPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll]
  );
  return (
    <div
      onClick={() => window.scrollTo(0, 0)}
      className={cn(
        " hover:bg-red-500 group  transition-colors fixed flex justify-center items-center cursor-pointer right-[30px] bottom-[330px] w-[50px] h-[50px] rounded-[50%] border-dashed border-red-500 border-2",
        hideOnScroll ? "hidden" : ""
      )}
    >
      <svg
        className="rotate-180 fill-[#ed1b34] group-hover:fill-white"
        width="9"
        height="5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4.5 4.4c-.4 0-.81-.12-1.14-.37L.4 1.8A1 1 0 0 1 1.6.2l2.9 2.18L7.4.2a1 1 0 1 1 1.2 1.6L5.64 4.03a1.9 1.9 0 0 1-1.14.37" />
      </svg>
    </div>
  );
};
