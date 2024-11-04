import Image from "next/image";
import React, { FC } from "react";
import { Title } from "../../Title";
import { cn } from "@/lib/utils";
import { Counter } from "../../counter/Counter";
import { X } from "lucide-react";
interface CartItemProps {
  className?: string;
  loading: boolean;
  quantity: number;
  price: number;
  name: string;
  disabled: boolean;
  variantName: string;
  imageUrl: string;
  onClickRemoveItem: () => void;
  onClickCountButton?: (type: "plus" | "minus") => void;
}

export const CartItem: FC<CartItemProps> = ({
  quantity,
  imageUrl,
  variantName,
  loading,
  name,
  price,
  disabled,
  onClickCountButton,
  onClickRemoveItem,
}) => {
  return (
    <>
      <div
        className={cn(
          "py-[16px] flex items-center justify-between border-b transition-all border-t border-[#3e3e40] hover:border-[#7a7a7a]",
          { "opacity-50 pointer-events-none": disabled }
        )}
      >
        <div className="flex items-center">
          <div className="size-[120px]">
            <Image
              priority
              width={296}
              height={296}
              alt={name}
              src={imageUrl}
            />
          </div>
          <div className="flex flex-col ml-[15px]">
            <Title text={name} className="" />
            {variantName !== "Нет" ? (
              <p className="text-[#4a4a4a]"> {`${name}: ${variantName}`}</p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="flex items-center gap-[60px]">
          <Counter loading={loading} onClick={onClickCountButton} value={quantity} />
          <div className="text-[28px] w-[70px]">{price}P</div>
          <button disabled={loading}>
            <X
              onClick={onClickRemoveItem}
              className="hover:text-white text-[#666] transition-all"
            />
          </button>
        </div>
      </div>
    </>
  );
};
