import { useCoffee } from "../../../hooks/useCoffe";
import { PriceContainer } from "./style";

export function PriceTotalContainer() {
  const { formattedTotalPrice, formattedTotalPriceOfItemsInCart } = useCoffee()

  return (
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
  )
}
