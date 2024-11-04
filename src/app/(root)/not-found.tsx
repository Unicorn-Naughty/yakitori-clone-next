import { Button } from "@/components/ui";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Title } from "@/components/shared";
export default function NotFound() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <Title
        size="2xl"
        text="Страница не найдена"
        className="my-[30px] text-center"
      ></Title>
      <div className="w-[500px] ">
        <Image
          width={154}
          height={158}
          alt="Корзина пуста"
          src="https://yakitoriya-krasnoyarsk.ru/static/img/404.abc8f33.svg"
        />
      </div>
      <Link href={"/"}>
        <Button>
          <MoveLeft className="mr-[5px]" /> Вернуться на главную
        </Button>
      </Link>
    </div>
  );
}
