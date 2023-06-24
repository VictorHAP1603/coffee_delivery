import { Trash } from "phosphor-react";
import { CoffeeAddQuantity } from "../../../components/CoffeeAddQuantity";
import { CoffeesAddedListProps } from "../../../utils/coffees";
import { formatPrice } from "../../../utils/formatPrice";

import {
  CoffeeListItemContainer,
  CoffeItemPrice,
  CoffeItemContent,
  CoffeeButtonRemove
} from "./style";
import { useCoffee } from "../../../hooks/useCoffe";

interface CoffeeListItemProps {
  coffee: CoffeesAddedListProps
}

export function CoffeeListItem({ coffee }: CoffeeListItemProps) {

  const {
    addToCart,
    removeOneCoffeeFromTheCart,
    removeCoffeeFromTheCart
  } = useCoffee()

  function handleAddQuantity() {
    const coffeesAddedList = []
    coffeesAddedList.push(coffee)

    addToCart(coffeesAddedList)
  }

  function handleRemoveQuantity() {
    removeOneCoffeeFromTheCart(coffee.id)
  }

  function handleRemoveCoffeeFromTheCart() {
    removeCoffeeFromTheCart(coffee.id)
  }

  return (
    <CoffeeListItemContainer>
      <img src={coffee.src} alt={coffee.title} />

      <CoffeItemContent>
        <span>{coffee.title}</span>
        <div>
          <CoffeeAddQuantity
            quantity={coffee.quantity ? coffee.quantity : 0}
            handleAddQuantity={handleAddQuantity}
            handleRemoveQuantity={handleRemoveQuantity}
          />
          <CoffeeButtonRemove type="button" onClick={handleRemoveCoffeeFromTheCart}>
            <Trash size={22} />
            <span>remover</span>
          </CoffeeButtonRemove>
        </div>
      </CoffeItemContent>

      <CoffeItemPrice>{formatPrice(coffee.price)}</CoffeItemPrice>

    </CoffeeListItemContainer>
  )
}
