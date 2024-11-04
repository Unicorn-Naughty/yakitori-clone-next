"use client";
import React, { FC, useState } from "react";
import { TProduct } from "../../../@types/prisma";
import { TVariant } from "../modals/chooseVariantsItem";
import { Button, Popover, PopoverContent, PopoverTrigger } from "../ui";
import { PopoverClose } from "@radix-ui/react-popover";
import { BONUSE_PERCENT } from "../constants/Constants";
import { Container, SpinnerAddButton, Title } from ".";
import Image from "next/image";
import { useCartStore } from "@/app/store/cart";
import toast from "react-hot-toast";

interface ProductPageProps {
  product: TProduct;
  className?: string;
}

export const ProductPage: FC<ProductPageProps> = ({ product }) => {
  const { imageUrlBig, name, variants } = product;
  const [variant, setVariant] = useState<TVariant>({
    name: "Нет",
    price: variants[0].price,
  });
  const currentItemId = variants.find(
    (item) => item.variantName === variant.name
  )?.id;
  const addCartItem = useCartStore((state) => state.addCartItem);
  const loading = useCartStore((state) => state.loading);
  const onAddClick = async () => {
    try {
      if (currentItemId) {
        await addCartItem({ productItemId: currentItemId });
        toast.success("Товар добавлен в корзину");
      }
    } catch (error) {
      toast.error("Не удалось добавить в корзину");
      console.log(error);
    }
  };

  return (
    <Container className=" mt-[60px]">
      <Title size="xl" className="mb-[60px]" text={name} />
      <div className="flex items-center">
        <div>
          <div className="w-[600px]">
            <Image
              priority
              src={imageUrlBig}
              width={600}
              height={600}
              alt={name}
            />
          </div>
        </div>
        <div className="ml-[80px]">
          <div className="mb-[20px]">
            {variants.length > 1 ? (
              <Popover>
                <PopoverTrigger>
                  <div className="flex items-center justify-between w-[140px] dark:bg-white rounded-sm px-2 text-black py-[5px] border border-black ">
                    <div>{variant.name}</div>
                    <div className="w-[10px]">
                      <Image
                        width={9}
                        height={5}
                        src="https://yakitoriya-krasnoyarsk.ru/static/img/icon_expand.cb81964.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverClose className="w-[100%]">
                    {variants.map((item, i) => (
                      <div
                        className="mb-[1px] hover:bg-red-500 flex justify-between w-[100%] p-3 rounded-sm transition-all  "
                        key={i}
                        onClick={() =>
                          setVariant({
                            name: item.variantName!,
                            price: item.price,
                          })
                        }
                      >
                        <div>{item.variantName}</div>
                        <div>{item.price} ₽</div>
                      </div>
                    ))}
                  </PopoverClose>
                </PopoverContent>
              </Popover>
            ) : (
              ""
            )}
          </div>
          <div className="flex justify-between items-center mb-[25px]">
            <span className="text-[40px]">{variant.price}₽</span>
            <Button
              disabled={loading}
              size="lg"
              className="w-[140px]"
              onClick={() => onAddClick()}
            >
              {loading ? <SpinnerAddButton /> : "Заказать"}
            </Button>
          </div>
          <div className="text-[#666]  mb-8">
            {product.variants[0].weight} г
          </div>
          <div className="text-[#666]  mb-8">
            Состав: <br />
            <p className="text-black dark:text-white">{product.description}</p>
          </div>
          <div className="text-[#666]  mb-8">
            Энергетическая ценность за порцию: <br />
            <p className="text-black dark:text-white">{`836 Ккал`}</p>
          </div>
          <div className="text-[#666]  mb-8">
            Основные питательные вещества: <br />
            <p className="text-black dark:text-white">{`белки 29.80, жиры 55.30, углеводы 54.90`}</p>
          </div>
          <div>
            <div className="text-[#666]  mb-8">
              Начислим бонусы на карту:
              {BONUSE_PERCENT.map((element, i) => {
                return (
                  <div key={i}>
                    <p className="text-black dark:text-white">{`Карта ${
                      element.value
                    }% — ${Math.floor(
                      (variant.price / 100) * element.value
                    ).toFixed(2)} бонусов`}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
