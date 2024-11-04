import { Title } from "@/components/shared";
import { Button } from "@/components/ui";
import Link from "next/link";
import Image from "next/image";
export default function UnauthorizedPage() {
  return (
    <div className="flex  items-center justify-center mt-10">
      <div>
        <Title size="2xl" className="my-4" text="Доступ запрещен" />
        <p className="mb-4">
          Эту страницу могут просматривать только авторизованные пользователи
        </p>
        <div>
          <Image
            width={500}
            height={315}
            alt="Корзина пуста"
            src="https://yakitoriya-krasnoyarsk.ru/static/img/404.abc8f33.svg"
          />
        </div>
      </div>
      <div className="gap-5 flex flex-col">
        <Link className="mb-5" href="/">
          <Button>На главную</Button>
        </Link>
        <a href="">
          <Button variant="outline">Обновить</Button>
        </a>
      </div>
    </div>
  );
}
