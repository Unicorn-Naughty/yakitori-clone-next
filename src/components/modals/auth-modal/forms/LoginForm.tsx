import React, { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { formLoginSchema, TFormLoginValues } from "./schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { SpinnerAddButton, Title } from "@/components/shared";
import { Phone } from "lucide-react";
import { FormInput } from "@/components/shared/checkout-components/form/FormInput";
import { Button } from "@/components/ui";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
interface LoginFormProps {
  className?: string;
  onClose?: VoidFunction;
}

const LoginForm: FC<LoginFormProps> = ({ onClose }) => {
  const form = useForm<TFormLoginValues>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: TFormLoginValues) => {
    try {
      const resp = await signIn("credentials", {
        ...data,
        redirect: false,
      });
      if (!resp?.ok) {
        throw Error();
      }
      toast.success("Вы успешно вошли в аккаунт");
      onClose?.();
    } catch (error) {
      console.log("Error [Login]", error);
      toast.error("Не удалось войти в аккаунт");
    }
  };
  return (
    <FormProvider {...form}>
      <form className="" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex justify-between items-center">
          <div className="mr-2 mb-5">
            <Title text="Вход в аккаунт" />
            <p className="">Введите свою почту, чтобы войти в аккаунт</p>
          </div>
          <Phone />
        </div>
        <FormInput className="mb-2" name="email" label="E-Mail" required />
        <FormInput
          className="mb-5"
          name="password"
          label="Пароль"
          type="password"
          required
        />
        <Button
          disabled={form.formState.isSubmitting}
          className="h-12 text-base w-[100%]"
          type="submit"
        >
          {form.formState.isSubmitting ? <SpinnerAddButton /> : "Войти"}
        </Button>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
