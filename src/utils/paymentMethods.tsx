import { Bank, CreditCard, Money } from "phosphor-react";

export interface PaymentMethodProps {
    id: number;
    title: string;
    icon: JSX.Element;
}

export const paymentMethods: PaymentMethodProps[] = [
  {
    id: 1,
    title: "Cartão de Crédito",
    icon:  <CreditCard size={22} />
  },
  {
    id: 2,
    title: "Cartão de Débito",
    icon: <Bank size={22} />
  },
  {
    id: 3,
    title: "Dinheiro",
    icon: <Money size={22} />
  },
]