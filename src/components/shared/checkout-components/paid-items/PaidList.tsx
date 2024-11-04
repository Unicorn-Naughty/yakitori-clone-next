import { Button } from "@/components/ui";

import Link from "next/link";
import React, { FC } from "react";

interface PaidListProps {
  className?: string;
}

const PaidList: FC<PaidListProps> = ({ className }) => {
  return (
    <div className={className}>
      <>
        <h1 className="mb-5">Спасибо за оформление заказа!</h1>
        <Link href="/">
          <Button>Вернуться на главную</Button>
        </Link>
      </>
    </div>
  );
};

export default PaidList;
