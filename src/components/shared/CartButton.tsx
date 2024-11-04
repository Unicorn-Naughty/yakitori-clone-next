"use client";
import React, { FC, useState } from "react";
import { Button } from "../ui";

import { cn } from "@/lib/utils";
import Link from "next/link";

import { getNoun } from "@/lib/getNoun";
import { SpinnerAddButton } from "./SpinnerAddButton";

import ProfileButton from "./profileButton";
import AuthModal from "../modals/auth-modal/AuthModal";
import { CartReturnProps } from "@/hooks/use-store";
interface CartButtonProps {
  className?: string;
  state: CartReturnProps;
}

export const CartButton: FC<CartButtonProps> = ({ className, state }) => {
  const [onOpen, setOnOpen] = useState(false);
  return (
    <div className={cn("", className)}>
      {state.items.length > 0 && (
        <>
          <div className="w-[100px] text-right mr-[10px]">
            <div className="dark:text-black text-[20px] w-[100px]">
              {state.totalAmount} ₽
            </div>
            <div className="dark:text-[#666] text-[#666]  text-[15px]">
              {state.items.length +
                " " +
                getNoun(state.items.length, "товар", "товара", "товаров")}
            </div>
          </div>
          <Link href="/cart">
            <Button
              disabled={state.loading}
              className="dark:bg-red-500 w-[100px]"
            >
              {state.loading ? <SpinnerAddButton /> : "Корзина"}
            </Button>
          </Link>
        </>
      )}
        <AuthModal open={onOpen} onClose={() => setOnOpen(false)}></AuthModal>
        <ProfileButton onClickSignIn={() => setOnOpen(true)} />
    </div>
  );
};
