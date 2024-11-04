
import React, { FC } from "react";
import { Container } from "./Container";
import { cn } from "@/lib/utils";
import { Title, Text } from ".";
import {
  IMAGE_PAYMENT,
  LINKS_FOOTER,
  PHONE_NUMBER,
} from "../constants/Constants";
import Link from "next/link";
import Image from "next/image";

interface FooterProps {
  className?: string;
}

export const Footer: FC<FooterProps> = ({ className }) => {
  return (
    <Container>
      <div className={cn("flex justify-between mb-[30px]", className)}>
        <div>
          <a className="" href={`tel:${PHONE_NUMBER}`}>
            <Title
              className="mb-3  transition-colors hover:text-[#666] dark:transition-none"
              text="+7 (391) 290-40-50"
              size="md"
            />
          </a>
          <Text className="mb-4">
            Работаем 12:00-23:00 <br />
            Доставка ежедневно с 12:00 до 23:40
          </Text>
          <Text className="mb-4"> Бонусная карта в вашем телефоне</Text>
          <div className="flex gap-1">
            <a href="https://redirect.appmetrica.yandex.com/serve/386364239729721211">
              <div className="w-[150px]">
                <Image
                  width={556}
                  height={180}
                  src="https://yakitoriya-krasnoyarsk.ru/static/img/icon_apple.d5f1fea.svg"
                  alt="app store"
                />
              </div>
            </a>
            <a href="https://redirect.appmetrica.yandex.com/serve/386364239729721211">
              <div className="w-[150px]">
                <Image
                  width={556}
                  height={180}
                  src="https://yakitoriya-krasnoyarsk.ru/static/img/icon_google_play.218cd86.svg"
                  alt="google store"
                />
              </div>
            </a>
          </div>
        </div>
        <nav className="grid-cols-2 grid gap-x-3 gap-y-5 dark:text-white ">
          {LINKS_FOOTER.map((link, i) => (
            <Link
              key={i}
              className="hover:text-[rgba(219,42,63,0.85)] transition-colors  dark:transition-none"
              href={'#'}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="max-w-[327px] dark:text-white">
          <div>
            <div className="flex justify-between mb-4">
              <div className="">
                <Text className="mb-0 text-[16px]">© 2024</Text>
                <a href="https://bellinigroup.ru/">
                  Bellini gastronomic <br />
                  ecosystem
                </a>
              </div>
              <a
                className="bg-[#ed1b34] inline-flex w-[46px] h-[46px] items-center justify-center rounded-[46px]"
                href="https://vk.com/yakitoriya_bellini"
              >
                <Image
                  width={24}
                  height={15}
                  src="https://yakitoriya-krasnoyarsk.ru/static/img/icon_social_vk.d2cd95b.svg"
                  alt="vk logo"
                />
              </a>
            </div>
          </div>
          <Text className="text-[14px] mb-3">ООО «Асами», ИНН 2465290698</Text>
          <Text className="text-[14px] mb-3">
            На сайте представлен предлагаемый вариант сервировки/блюда.
          </Text>
          <div className="flex gap-1">
            {IMAGE_PAYMENT.map((item, i) => (
              <div key={i}>
                <Image
                  width={100}
                  height={100}
                  src={item.link}
                  alt={item.alt}
                  className={cn("w-[43px] h-[25px]", item.color)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
