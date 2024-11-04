import React, { FC } from "react";
import RequiredSymbol from "../../RequiredSymbol";
import { Input } from "@/components/ui";
import ErrorText from "../../ErrorText";
import ClearButton from "../../ClearButton";
import { useFormContext } from "react-hook-form";

interface formInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  name: string;
  label?: string;
  required?: boolean;
}

export const FormInput: FC<formInputProps> = ({
  className,
  name,
  label,
  required,
  ...props
}) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const value = watch(name);
  const errorText = errors[name]?.message as string;
  const onClickClear = () => {
    setValue(name, "", { shouldValidate: true });
  };
  return (
    <div className={className}>
      {label && (
        <p className="font-medium mb-2">
          {label}
          {required && <RequiredSymbol />}
        </p>
      )}
      <div className="relative text-black dark:text-white">
        <Input className="h-12 text-md" {...register(name)} {...props} />
        {value && <ClearButton onClick={onClickClear} />}
      </div>

      {errorText && <ErrorText text={errorText} className="mt-2" />}
    </div>
  );
};
