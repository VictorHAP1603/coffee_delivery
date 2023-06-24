import { CoffeeAddQuantityContainer } from './style';

interface CoffeeAddQuantityProps {
  quantity: number;
  handleAddQuantity: () => void;
  handleRemoveQuantity: () => void;
}

export function CoffeeAddQuantity({ quantity, handleAddQuantity, handleRemoveQuantity }: CoffeeAddQuantityProps) {
  return (
    <CoffeeAddQuantityContainer>
      <button type="button" onClick={handleRemoveQuantity}>-</button>
      <span>{quantity}</span>
      <button type="button" onClick={handleAddQuantity} >+</button>
    </CoffeeAddQuantityContainer>
  )
}
