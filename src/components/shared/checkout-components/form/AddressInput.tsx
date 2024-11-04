"use client";

import { useId } from "react";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";

interface Props {
  onChange?: (value?: string) => void;
}

export const AddressInput: React.FC<Props> = ({ onChange }) => {
  const id = useId();
  return (
    <AddressSuggestions
      uid={id}
      suggestionsClassName="dark:bg-black"
      token="61b5c38ffcfea994ccf90b6f83c7d057b1987a62"
      onChange={(data) => onChange?.(data?.value)}
    />
  );
};
