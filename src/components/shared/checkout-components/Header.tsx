"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { FC } from "react";
import Image from "next/image";
import { Container } from "../Container";
import { usePathname } from "next/navigation";

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const pathname = usePathname();


  return (
    <header className="sticky top-0 shadow-lg z-10 bg-white">
      <Container className="flex justify-between  py-[15px]">
        <Link href={"/"} className={cn()}>
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

        <div className="flex items-center">
          <div className="flex items-center mr-[15px]">
            <span
              className={cn(
                "mr-[10px] border size-5 flex items-center justify-center p-4 rounded-[50%] border-red-500",
                pathname === "/cart"
                  ? "bg-red-500 text-white border-none"
                  : "text-red-600"
              )}
            >
              1
            </span>
            <p
              className={cn(
                "text-[#5c5b5b] text-[20px]",
                pathname === "/cart" ? "text-[#000000]" : ""
              )}
            >
              Корзина
            </p>
            <span className="w-[60px] h-[2px] bg-red-600 block ml-[10px]"></span>
          </div>
          <div className="flex items-center mr-[15px]">
            <span
              className={cn(
                "mr-[10px] border size-5 flex items-center justify-center p-4 rounded-[50%] border-red-500",
                pathname === "/order"
                  ? "bg-red-500 text-white border-none"
                  : "text-red-600"
              )}
            >
              2
            </span>
            <p
              className={cn(
                "text-[#5c5b5b] text-[20px]",
                pathname === "/ored" ? "text-[#000000]" : ""
              )}
            >
              Оформление заказа
            </p>
            <span className="w-[60px] h-[2px] bg-red-600 block ml-[10px]"></span>
          </div>
          <div className="flex items-center ">
            <span
              className={cn(
                "mr-[10px] border size-5 flex items-center justify-center p-4 rounded-[50%] border-red-500",
                pathname === "/paid"
                  ? "bg-red-500 text-white border-none"
                  : "text-red-600"
              )}
            >
              3
            </span>
            <p
              className={cn(
                "text-[#5c5b5b] text-[20px]",
                pathname === "/paid" ? "text-[#000000]" : ""
              )}
            >
              Заказ принят
            </p>
          </div>
        </div>
      </Container>
    </header>
  );
};
