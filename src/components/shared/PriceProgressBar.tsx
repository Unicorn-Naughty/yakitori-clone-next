"use client";
import React, { FC} from "react";
import { Container } from "./Container";
import { Progress } from "../ui";
import { useCartStore } from "@/app/store/cart";
import PresentsModal from "../modals/PresentsModal";

interface PriceProgressBarProps {
  className?: string;
}

export const PriceProgressBar: FC<PriceProgressBarProps> = ({}) => {
  const store = useCartStore();

  return (
    <>
      <div className="w-full fixed bottom-0 z-50">
        <Container className="h-[50px] mx-[140px] flex justify-between items-center text-white">
          <PresentsModal />
          <p>2200 ₽</p>
          <p>3700 ₽</p>
        </Container>
      </div>
      <Progress
        max={85}
        value={100 / (4200 / store.totalAmount)}
        className="fixed bottom-0 h-[50px]"
      />
    </>
  );
};
