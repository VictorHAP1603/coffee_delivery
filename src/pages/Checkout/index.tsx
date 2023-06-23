import {
  CheckoutContainer,
  CompleteYourOrder,
  SelectedCoffees,
  CheckoutForm,
  CheckoutSubtitle,
  CheckoutAddress,
  CheckoutPayment,
  CheckoutSelectedCoffees,
} from "./style";

export function Checkout() {
  return (
    <CheckoutContainer>
      <CheckoutForm className="container">
        <CompleteYourOrder>
          <CheckoutSubtitle>Complete seu pedido</CheckoutSubtitle>

          <CheckoutAddress></CheckoutAddress>

          <CheckoutPayment></CheckoutPayment>

        </CompleteYourOrder>

        <SelectedCoffees>
          <CheckoutSubtitle>Cafés selecionados</CheckoutSubtitle>
          <CheckoutSelectedCoffees></CheckoutSelectedCoffees>
        </SelectedCoffees>

      </CheckoutForm>
    </CheckoutContainer>
  )
}
