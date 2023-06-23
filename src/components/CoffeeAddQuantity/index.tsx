import { CoffeeAddQuantityContainer } from './style';

interface CoffeeAddQuantityProps {
  quantity: number;
  handleAddQuantity: () => void;
  handleRemoveQuantity: () => void;
}

export function CoffeeAddQuantity({ quantity, handleAddQuantity, handleRemoveQuantity }: CoffeeAddQuantityProps) {
  return (
    <CoffeeAddQuantityContainer>
      <button onClick={handleRemoveQuantity}>-</button>
      <span>{quantity}</span>
      <button onClick={handleAddQuantity} >+</button>
    </CoffeeAddQuantityContainer>
  )
}
