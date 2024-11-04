'use client';

import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import ErrorText from '../../ErrorText';
import { AddressInput } from '../form/AddressInput';
import { FormTextarea } from '../form/FormTextArea';
import { GreyBlock } from './OrderPageGreyBlock';


interface Props {
  className?: string;
}

export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
  const { control } = useFormContext();

  return (
    <GreyBlock title="Адрес доставки" className={className}>
      <div className="flex flex-col gap-5">
        <Controller
          control={control}
          name="address"
          render={({ field, fieldState }) => (
            <>
              <AddressInput onChange={field.onChange} />
              {fieldState.error?.message && <ErrorText text={fieldState.error.message} />}
            </>
          )}
        />

        <FormTextarea
          name="comment"
          className="text-base"
          placeholder="Комментарий к заказу"
          rows={5}
        />
      </div>
    </GreyBlock>
  );
};