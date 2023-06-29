import { InputHTMLAttributes } from "react";
import { CheckoutAddressInputContainer } from "./style";
import { useFormContext } from "react-hook-form";
import { CheckoutFormType } from "..";

interface CheckoutAddressInputProps extends InputHTMLAttributes<HTMLInputElement> {
  keyForm: keyof CheckoutFormType
}

export function CheckoutAddressInput({ keyForm, ...rest }: CheckoutAddressInputProps) {
  const { register } = useFormContext()


  return (
    <CheckoutAddressInputContainer>
      <input
        {...rest}
        {...register(keyForm)}
      />
    </CheckoutAddressInputContainer>
  )
}
