import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";

// Components
import { CoffeeListItem } from "./CoffeListItem";

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
  CheckoutTypesOfPayment,
  TypeOfPaymentItem,
  CheckoutSelectedCoffees,
  SelectedCoffeesList,
  PriceContainer,
  CheckoutButton,
  NoCoffeeSelected
} from "./style";

import { useCoffee } from "../../hooks/useCoffe";

export function Checkout() {
  const { coffeState, formattedTotalPrice, formattedTotalPriceOfItemsInCart } = useCoffee()

  const { coffesAdded } = coffeState

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

            <CheckoutTypesOfPayment>
              <TypeOfPaymentItem type="button">
                <CreditCard size={22} />
                <span>Cartão de Crédito</span>
              </TypeOfPaymentItem>

              <TypeOfPaymentItem type="button">
                <Bank size={22} />
                <span>Cartão de Débito</span>
              </TypeOfPaymentItem>

              <TypeOfPaymentItem type="button">
                <Money size={22} />
                <span>Dinheiro</span>
              </TypeOfPaymentItem>
            </CheckoutTypesOfPayment>

          </CheckoutPayment>

        </CompleteYourOrder>

        <SelectedCoffees>
          <CheckoutSubtitle>Cafés selecionados</CheckoutSubtitle>

          <CheckoutSelectedCoffees>
            <SelectedCoffeesList>
              {!coffesAdded && (
                <NoCoffeeSelected>Nenhum café selecionado</NoCoffeeSelected>
              )}

              {coffesAdded && coffesAdded.length > 0 && coffesAdded.map(coffee => (
                <CoffeeListItem coffee={coffee} />
              ))}
            </SelectedCoffeesList>

            <PriceContainer>
              <div>
                <span>Total de itens</span>
                <span>{formattedTotalPriceOfItemsInCart}</span>
              </div>

              <div>
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </div>

              <div>
                <span>Total</span>
                <span>{formattedTotalPrice}</span>
              </div>
            </PriceContainer>

            <CheckoutButton type="submit">Confirmar Pedido</CheckoutButton>
          </CheckoutSelectedCoffees>
        </SelectedCoffees>

      </CheckoutForm>
    </CheckoutContainer>
  )
}
