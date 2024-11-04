import React, { FC, useState } from "react";
import Image from "next/image";
import { FoodAppliances } from "@prisma/client";
import { Counter } from "../../counter/Counter";
import { cn } from "@/lib/utils";
interface FoodApplianceItemProps {
  className?: string;
  foodApplItem: FoodAppliances;
}

export const FoodApplianceItem: FC<FoodApplianceItemProps> = ({
  className,
  foodApplItem,
}) => {
  const [foodApplValue, setfoodApplValue] = useState(0);
  const recValuePlus = (type: "plus" | "minus") =>
    type == "plus"
      ? setfoodApplValue(foodApplValue + 1)
      : setfoodApplValue(foodApplValue - 1);

  return (
    <div
      className={cn(
        "flex flex-col gap-3 items-center justify-start ",
        className
      )}
    >
      <div className="">
        <Image
          width={90}
          height={90}
          priority
          alt={foodApplItem.name}
          src={foodApplItem.imageUrl}
        />
      </div>
      <p className="w-[90px] text-[13px] h-[40px] text-center">
        {foodApplItem.name}
      </p>
      <Counter
        className="w-[150px]"
        onClick={recValuePlus}
        value={foodApplValue}
        recValue={true}
      />
      <div className="text-[14px]">
        {foodApplValue <= 5 ? (
          "Бесплатно"
        ) : (
          <div>{foodApplItem.price * (foodApplValue - 5)}₽</div>
        )}
      </div>
    </div>
  );
};
