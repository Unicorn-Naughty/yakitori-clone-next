"use client";
import React, { FC } from "react";
import { Dialog, DialogContent, DialogTitle } from "../ui";
import { ChooseVariantsItem } from "../shared";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { TProduct } from "../../../@types/prisma";


interface chooseProductModalProps {
  product: TProduct;
  className?: string;
}

export const ChooseProductModal: FC<chooseProductModalProps> = ({
  className,
  product,
}) => {
 



  const router = useRouter();
  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogTitle></DialogTitle>
      <DialogContent
        aria-describedby={undefined}
        className={cn(
          "pt-[70px] px-[50px] pb-[40px]  max-w-[1100px] max-h-[95vh] flex bg-white overflow-auto dark:bg-black",
          className
        )}
      >
        <ChooseVariantsItem
          description={product.description}
          weight={product.variants[0].weight}
          imageUrl={product.imageUrl}
          imageUrlBig={product.imageUrlBig}
          name={product.name}
          variants={product.variants}
        />
      </DialogContent>
    </Dialog>
  );
};
