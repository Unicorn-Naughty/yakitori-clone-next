'use client'
import React, { FC } from "react";
import { cn } from "@/lib/utils";

import Image from "next/image";
import Link from "next/link";

import { PHONE_NUMBER } from "../constants/Constants";
import { BottomBar, Container} from ".";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  React.useEffect(() => {
    let toastMessage = "";

    if (searchParams.has("verified")) {
      toastMessage = "Почта успешно подтверждена!";
    }

    if (toastMessage) {
      setTimeout(() => {
        router.replace("/");
        toast.success(toastMessage, {
          duration: 3000,
        });
      }, 1000);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <header className={cn("bg-white dark:bg-white ", className)}>
        <Container className="px-[20px] flex items-center pt-[15px]">
          <Link href="/" className="mr-auto">
            <Image
              src="https://yakitoriya-krasnoyarsk.ru/static/img/logo_img_large.259087c.svg"
              width={300}
              height={53}
              priority={true}
              alt="Логотип Яктория"
            />
          </Link>

          <div className="mr-auto">
            <a
              className="inline-flex mr-[14px] font-bold"
              href={`tel:${PHONE_NUMBER}`}
            >
              <h3 className="text-[26px] dark:text-black">
                +7-(391)-290-40-50
              </h3>
            </a>
            <span className="dark:text-black">
              Доставка ежедневно с 12:00 до 23:40 в Красноярске
            </span>
          </div>
        </Container>
      </header>

      {/**
       * Поправить косяк разделения header на две части -> Проблема в sticky
       */}

      <BottomBar className="sticky top-0 shadow-lg z-10 bg-white" />
    </>
  );
};
