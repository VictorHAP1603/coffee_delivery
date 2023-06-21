import { useState } from "react";
import { ShoppingCart } from "phosphor-react";
import { CoffeeProps } from "../../../../utils/coffees";

import { coffeesAddedListProps } from "../../../../reducers/coffees/reducer";
import { useCoffee } from "../../../../hooks/useCoffe";

import {
    CoffeeItemContainer,
    CoffeeImage,
    CoffeeInfo,
    CoffeTags,
    CoffeeName,
    CoffeeDescription,
    CoffeeBottom,
    CoffeePrice,
    CoffeActions,
    CoffeeAddQuantity,
    CoffeAddToCart,
} from './style'

interface CoffeeItemProps {
    coffee: CoffeeProps;
}

export function CoffeeItem({ coffee }: CoffeeItemProps) {
    const [quantity, setQuantity] = useState(0)
    const [coffeesAddedList, setCoffeesAddedList] = useState<coffeesAddedListProps[]>([])

    const { addToCart } = useCoffee()

    function formatPrice(price: number) {
        return new Intl.NumberFormat('pt-BR', {
            minimumFractionDigits: 2,
        }).format(price / 100)
    }

    function formatCoffeeToCoffeesAddedList(coffee: CoffeeProps) {
        return {
            id: coffee.id,
            title: coffee.title,
            price: coffee.price
        }
    }

    function handleAddQuantity() {
        setQuantity(quantity + 1)

        // console.log(coffee)
        const coffeeAdded = formatCoffeeToCoffeesAddedList(coffee)
        setCoffeesAddedList([...coffeesAddedList, coffeeAdded])
    }

    function handleRemoveQuantity() {
        if (quantity > 0) {
            setQuantity(quantity - 1)
            setCoffeesAddedList(coffeesAddedList.slice(0, -1))
        }
    }

    function handleAddToCart() {
        
        if (coffeesAddedList.length > 0) {
            // console.log(coffeesAddedList)
            addToCart(coffeesAddedList)
            setQuantity(0)
            setCoffeesAddedList([])
        }
    }

    // useEffect(() => {
    //     console.log(coffeesAddedList)
    // }, [coffeesAddedList])

    return (
        <CoffeeItemContainer>
            <CoffeeImage src={coffee.src} />

            <CoffeeInfo>
                <CoffeTags>
                    {coffee.tags.map((tag) => <span key={tag.id}>{tag.tag}</span> )}
                </CoffeTags>

                <CoffeeName>{coffee.title}</CoffeeName>

                <CoffeeDescription>{coffee.description}</CoffeeDescription>
            </CoffeeInfo>   

            <CoffeeBottom>
                <CoffeePrice>
                    <span>R$</span>
                    {formatPrice(coffee.price)}
                </CoffeePrice>

                <CoffeActions>
                    <CoffeeAddQuantity>
                        <button onClick={handleRemoveQuantity}>-</button>
                        <span>{quantity}</span>
                        <button onClick={handleAddQuantity} >+</button>
                    </CoffeeAddQuantity>

                    <CoffeAddToCart onClick={handleAddToCart}>
                        <ShoppingCart size={24} weight='fill' />                  
                    </CoffeAddToCart>
                </CoffeActions>
                {/* <CoffeeFavorite></CoffeeFavorite> */}
            </CoffeeBottom>
        </CoffeeItemContainer>
    )
}