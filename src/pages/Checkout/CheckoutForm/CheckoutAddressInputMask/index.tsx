import { CheckoutAddressInputContainer } from "../CheckoutAddressInput/style";
import InputMask, { Props } from 'react-input-mask';
import { useFormContext } from "react-hook-form";
import { CheckoutFormType } from "..";


interface CheckoutAddressInputProps extends Props {
  keyForm: keyof CheckoutFormType
  children?: React.ReactNode
}

export function CheckoutAddressInputMask({ keyForm, children, ...rest }: CheckoutAddressInputProps) {
  const { register } = useFormContext()


  return (
    <CheckoutAddressInputContainer>
      <InputMask {...rest} {...register(keyForm)} />
      {children}
    </CheckoutAddressInputContainer>
  )
}
