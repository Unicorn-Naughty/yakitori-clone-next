"use client";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import React, { FC, useState } from "react";
import { GreyBlock } from "./OrderPageGreyBlock";
import { Button } from "@/components/ui";
import { OrderPageItem } from "./OrderPageItem";
import { Title } from "../../Title";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCart } from "@/hooks/use-store";
import { FormInput } from "../form/FormInput";
import {
  checkoutFromSchema,
  TCheckoutForm,
} from "../form/schemas/checkoutFormSchema";
import { createOrder } from "@/app/actions";
import toast from "react-hot-toast";
import { Api } from "@/app/services/api-client";
import { useSession } from "next-auth/react";
import { CheckoutAddressForm } from "./OrderAddressForm";
import { SpinnerAddButton } from "../../SpinnerAddButton";
import Link from "next/link";
import Image from "next/image";
import { MoveLeft } from "lucide-react";
interface OrderPageListProps {
  className?: string;
}

const OrderPageList: FC<OrderPageListProps> = ({ className }) => {
  const { items, totalAmount } = useCart();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [submitting, setSubmitiing] = useState(false);

  const { data: session } = useSession();

  const form = useForm<TCheckoutForm>({
    resolver: zodResolver(checkoutFromSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      comment: "",
    },
  });
  React.useEffect(() => {
    async function fetchUserInfo() {
      const data = await Api.auth.getMe();
      const [firstName, lastName] = data.fullName.split(" ");

      form.setValue("firstName", firstName);
      form.setValue("lastName", lastName);
      form.setValue("email", data.email);
    }

    if (session) {
      fetchUserInfo();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);
  const onSubmit: SubmitHandler<TCheckoutForm> = async (data) => {
    try {
      setSubmitiing(true);
      const url = await createOrder(data);
      toast.success("Заказ успешно оформлен! Переход на оплату...");
      if (url) {
        location.href = url;
      }
    } catch (error) {
      setSubmitiing(false);
      toast.error("Не удалось создать заказ");
      console.log(error);
    }
  };

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
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex justify-around items-start">
              <div className="flex flex-col mr-[20px] w-[100%] gap-8">
                <GreyBlock title="Персональные данные">
                  <div className="grid grid-cols-2 gap-5">
                    <FormInput
                      placeholder="Имя"
                      className="text-base"
                      name="firstName"
                    />
                    <FormInput
                      placeholder="Фамилия"
                      className="text-base"
                      name="lastName"
                    />
                    <FormInput
                      placeholder="E-Mail"
                      className="text-base"
                      name="email"
                    />
                    <FormInput
                      placeholder="Телефон"
                      className="text-base"
                      name="phone"
                    />
                  </div>
                </GreyBlock>
                <CheckoutAddressForm />
              </div>
              <div className="w-[400px]">
                <Title
                  text={"Ваш заказ:"}
                  size="sm"
                  className="font-bold mb-[5px] mt-[-30px]"
                />
                <GreyBlock>
                  {items.map((item, i) => (
                    <OrderPageItem key={i} item={item} />
                  ))}
                  <div className="flex justify-between mb-[40px]">
                    <p>Итого:</p>
                    <p>{totalAmount} ₽</p>
                  </div>
                  <Button type="submit" className="w-[100%]">
                    {form.formState.isSubmitting ? (
                      <SpinnerAddButton />
                    ) : (
                      "Перейти к оплате"
                    )}
                  </Button>
                </GreyBlock>
              </div>
            </div>
          </form>
        </FormProvider>
      )}
    </div>
  );
};

export default OrderPageList;
