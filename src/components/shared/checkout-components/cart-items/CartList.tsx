"use client";
import React, { FC } from "react";
import { CartItem } from "./CartItem";
import Image from "next/image";
import { useCart } from "@/hooks/use-store";
import { Button } from "@/components/ui";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { FoodAppliances, RecProduct } from "@prisma/client";
import { RecItem } from "./RecItem";
import { SpinnerAddButton, SpinnerCartLoad, Title } from "../..";
import { cn } from "@/lib/utils";
import { FoodApplianceItem } from "./FoodApplianceItem";
interface cartListProps {
  className?: string;
  recProducts: RecProduct[];
  foodAppliances: FoodAppliances[];
}

export const CartList: FC<cartListProps> = ({
  className,
  recProducts,
  foodAppliances,
}) => {
  const {
    items,
    totalAmount,
    updateItemQuantity,
    loading,
    fetchingLoad,
    removeCartItem,
  } = useCart();

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };
  if (fetchingLoad) {
    return (
      <div className="flex justify-center ">
        <SpinnerCartLoad />
      </div>
    );
  }
  return (
    <div className={className}>
      {!totalAmount && (
        <div className="flex justify-between">
          <div>
            <p className="mb-[30px]">...Увы, Корзина пуста</p>
            <Link href={"/"}>
              <Button>
                {" "}
                <MoveLeft className="mr-[5px]" /> Вернуться на главную
              </Button>
            </Link>
          </div>
          <div>
            <Image
              width={500}
              height={315}
              alt="Корзина пуста"
              src="https://yakitoriya-krasnoyarsk.ru/static/img/404.abc8f33.svg"
            />
          </div>
        </div>
      )}

      {totalAmount > 0 && (
        <>
          {items.map((item, i) => (
            <CartItem
              disabled={item.disabled}
              loading={loading}
              quantity={item.quantity}
              imageUrl={item.imageUrl}
              price={item.price}
              variantName={item.variantName}
              name={item.name}
              key={i}
              onClickRemoveItem={() => removeCartItem(item.id)}
              onClickCountButton={(type: "plus" | "minus") =>
                onClickCountButton(item.id, item.quantity, type)
              }
            />
          ))}

          <div className=" dark:bg-[#2f2f2f] bg-[#e9e9e952] mt-[90px]">
            <Title
              text="Рекомендуем к заказу"
              className={cn("mb-[30px] pt-[30px] ml-[25px]")}
              size="xl"
            />
            <div className="flex flex-wrap gap-[43px] justify-start m-[15px] p-[15px]">
              {recProducts.map((item, i) => (
                <RecItem recProduct={item} key={i} />
              ))}
            </div>
          </div>

          <div className="mt-[90px]">
            <div className="flex flex-wrap gap-[43px] justify-start m-[15px] p-[15px]">
              {foodAppliances.map((item, i) => (
                <FoodApplianceItem foodApplItem={item} key={i} />
              ))}
            </div>
          </div>
          <div className="text-right mt-[60px]">
            <div className="text-[30px]">
              Сумма вашего закза: {totalAmount} ₽
            </div>
            <div className="text-[15px] text-[#666]">
              Минимальная сумма заказа зависит от адреса доставки
            </div>
          </div>
          <div className="flex justify-between items-center mt-[30px]">
            <Button variant="default" className="bg-slate-600">
              <MoveLeft className="mr-[5px]" /> Вернуться в меню
            </Button>
            <Link href="/order">
              <Button className="w-[200px] rounded-[40px] p-[30px]">
                {fetchingLoad ? <SpinnerAddButton /> : "Оформить заказ"}
              </Button>
            </Link>
          </div>
        </>
      )}

      {/**подарки от отпределенной суммы */}
    </div>
  );
};
