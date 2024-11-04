"use client";
import React, { FC, useState } from "react";
import { cn } from "@/lib/utils";
import { LINKS_NAMES } from "../constants/Constants";
import Link from "next/link";
import Image from "next/image";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { usePathname } from "next/navigation";
import { CartButton, Container} from ".";
import { useCart } from "@/hooks/use-store";
import { ModeToggle } from "./Toggle";

interface BottomBarProps {
  className?: string;
}

export const BottomBar: FC<BottomBarProps> = ({ className }) => {
  const [hideOnScroll, setHideOnScroll] = useState(true);
  const cartState = useCart();

  const pathname = usePathname();
  useScrollPosition(
    ({ currPos }) => {
      const isShow = -76 < currPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll]
  );

  const linkStyle =
    "text-[#ed1b34] px-[14px] py-[6px] inline-flex items-center justify-center whitespace-nowrap rounded-md  transition-colors   hover:bg-red-500 hover:text-neutral-50";

  return (
    <div className={cn("", className)}>
      <Container className="px-[20px] py-[15px] flex justify-between items-center relative">
        <Link
          href={"/"}
          className={cn(
            "  transition-all ease-in duration-200",
            hideOnScroll
              ? "opacity-0 w-0 h-[50px] inline-block overflow-hidden"
              : "opacity-1 "
          )}
        >
          <Image
            className="max-w-[50px]"
            src={
              "https://yakitoriya-krasnoyarsk.ru/static/img/logo_img_small.30d3aa8.svg"
            }
            width={50}
            height={50}
            alt=""
          />
        </Link>

        <nav
          className={cn(
            "flex flex-wrap transition-all ease-out gap-1",
            hideOnScroll ? "ml-[-15px]" : ""
          )}
        >
          {LINKS_NAMES.map((link, i) => (
            <Link
              className={cn(
                linkStyle,
                pathname == link.routeName ? "bg-red-500 text-white" : ""
              )}
              key={i}
              href={link.routeName}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <CartButton className="flex items-center" state={cartState} />

        <ModeToggle />
      </Container>
    </div>
  );
};
