import { useState } from "react";
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";

// components
import { PriceTotalContainer } from "./PriceTotalContainer";
import { SelectedCoffeesList } from "./SelectedCoffeeList";

import {
  CheckoutContainer,
  CompleteYourOrder,
  SelectedCoffees,
  CheckoutForm,
  CheckoutSubtitle,
  CheckoutAddress,
  CheckoutAddressHeader,
  CheckoutAddressContent,
  CheckoutAddressLabel,
  CheckoutPayment,
  CheckoutPaymentHeader,
  CheckoutPaymentMethods,
  TypeOfPaymentItem,
  CheckoutSelectedCoffees,
  CheckoutButton,
} from "./style";

// import { useCoffee } from "../../hooks/useCoffe";

const paymentMethods = [
  {
    id: 1,
    title: "Cartão de Crédito",
    icon: <CreditCard size={22} />
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

export function Checkout() {
  const [paymentMethodActive, setPaymentMethodActive] = useState<number | null>(null)

  function handlePaymentMethodActive(id: number) {
    if (paymentMethodActive === id) {
      console.log('desativou')
      setPaymentMethodActive(null)
    } else {
      setPaymentMethodActive(id)
    }
  }

  return (
    <CheckoutContainer>
      <CheckoutForm className="container">
        <CompleteYourOrder>
          <CheckoutSubtitle>Complete seu pedido</CheckoutSubtitle>

          <CheckoutAddress>
            <CheckoutAddressHeader>
              <MapPinLine size={22} />

              <div>
                <p>Endereço de Entrega</p>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </CheckoutAddressHeader>

            <CheckoutAddressContent>
              <CheckoutAddressLabel>
                <input type="text" placeholder="CEP" />
              </CheckoutAddressLabel>

              <CheckoutAddressLabel>
                <input type="text" placeholder="Rua" />
              </CheckoutAddressLabel>

              <CheckoutAddressLabel>
                <input type="text" placeholder="Número" />
              </CheckoutAddressLabel>

              <CheckoutAddressLabel>
                <input type="text" placeholder="Complemento" />
              </CheckoutAddressLabel>

              <CheckoutAddressLabel>
                <input type="text" placeholder="Bairro" />
              </CheckoutAddressLabel>

              <CheckoutAddressLabel>
                <input type="text" placeholder="Cidade" />
              </CheckoutAddressLabel>

              <CheckoutAddressLabel>
                <input type="text" placeholder="UF" />
              </CheckoutAddressLabel>
            </CheckoutAddressContent>

          </CheckoutAddress>

          <CheckoutPayment>
            <CheckoutPaymentHeader>
              <CurrencyDollar size={22} />
              <div>
                <p>Pagamento</p>
                <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
              </div>
            </CheckoutPaymentHeader>

            <CheckoutPaymentMethods>
              {paymentMethods.map(type => (
                <TypeOfPaymentItem
                  className={paymentMethodActive === type.id ? 'active' : ''}
                  key={type.id}
                  onClick={() => handlePaymentMethodActive(type.id)}
                  type="button"
                >
                  {type.icon}
                  <span>{type.title}</span>
                </TypeOfPaymentItem>
              ))}
            </CheckoutPaymentMethods>

          </CheckoutPayment>

        </CompleteYourOrder>

        <SelectedCoffees>
          <CheckoutSubtitle>Cafés selecionados</CheckoutSubtitle>

          <CheckoutSelectedCoffees>
            <SelectedCoffeesList />
            <PriceTotalContainer />
            <CheckoutButton type="submit">Confirmar Pedido</CheckoutButton>
          </CheckoutSelectedCoffees>
        </SelectedCoffees>

      </CheckoutForm>
    </CheckoutContainer>
  )
}
