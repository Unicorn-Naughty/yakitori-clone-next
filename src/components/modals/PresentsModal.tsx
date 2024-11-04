import React, { FC } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { PopoverClose } from "@radix-ui/react-popover";

interface PresentsModalProps {
  className?: string;
}

const PresentsModal: FC<PresentsModalProps> = () => {
  const presentProducts = [
    {
      id: 10,
      name: "Калифорния севиче",
      imageUrl:
        "http://cdn.bellinigroup.ru/upload/202410/66fb7a5d00d93_296x296_fit_85_000.png.jpg",
      by: 2800,
    },
    {
      id: 11,
      name: "Темаки Сан-Паулу",
      imageUrl:
        "http://cdn.bellinigroup.ru/upload/202410/66fb7ff301ac0_296x296_fit_85_000.png.jpg",
      by: 2800,
    },
    {
      id: 12,
      name: "Сакура",
      imageUrl:
        "http://cdn.bellinigroup.ru/upload/202410/66fb80e386119_296x296_fit_85_000.png.jpg",
      by: 2200,
    },
    {
      id: 13,
      name: "Цезарь с креветками",
      imageUrl:
        "http://cdn.bellinigroup.ru/upload/202410/66fb81e38d5eb_296x296_fit_85_000.png.jpg",
      by: 2200,
    },
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="border border-white p-[8px] rounded-[40px] px-[20px]">
          Подарки
        </button>
      </PopoverTrigger>
      <PopoverContent className="m-[50px] p-[30px] w-[1000px]">
        <div className='relative'>
          <p className="mb-[40px]">
            Заказывайте и получайте подарочные блюда в зависимости от суммы
            заказа. Акция не распространяется на товары с уже включенной скидкой
            и действует только при заказе на сайте.
          </p>
          <PopoverClose className="absolute top-[-5px] right-[-15px]">
            <X />
          </PopoverClose>
        </div>

        <div className="flex">
          {presentProducts.map((item, i) => (
            <Link
              className="p-[20px] dar:border-[#555] border border-[#f5f4f477] transition-all ease-linear dark:hover:border-[#cccc28] hover:border-[#802828] hover:z-10"
              key={i}
              href={`product/${item.id}`}
            >
              <div className="w-[192px]">
                <Image
                  width={192}
                  height={192}
                  alt={item.name}
                  src={item.imageUrl}
                />
              </div>
              <p className="my-[15px] text-[#666]">{`от ${item.by} ₽`}</p>
            </Link>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PresentsModal;
