import { useState } from "react";
import { ShoppingCart } from "phosphor-react";
import { CoffeeProps, CoffeesAddedListProps } from "../../../../utils/coffees";

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
    CoffeAddToCart,
} from './style'
import { CoffeeAddQuantity } from "../../../../components/CoffeeAddQuantity";

interface CoffeeItemProps {
    coffee: CoffeeProps;
}

export function CoffeeItem({ coffee }: CoffeeItemProps) {
    const [quantity, setQuantity] = useState(0)
    const [coffeesAddedList, setCoffeesAddedList] = useState<CoffeesAddedListProps[]>([])

    const { addToCart } = useCoffee()

    function formatPrice(price: number) {
        return new Intl.NumberFormat('pt-BR', {
            minimumFractionDigits: 2,
        }).format(price / 100)
    }

    function formatCoffeeToCoffeesAddedList(coffee: CoffeeProps): CoffeesAddedListProps {
        return {
            id: coffee.id,
            title: coffee.title,
            price: coffee.price,
            src: coffee.src,
        }
    }

    function handleAddQuantity() {
        setQuantity(quantity + 1)

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
            addToCart(coffeesAddedList)
            setQuantity(0)
            setCoffeesAddedList([])
        }
    }

    return (
        <CoffeeItemContainer>
            <CoffeeImage src={coffee.src} />

            <CoffeeInfo>
                <CoffeTags>
                    {coffee.tags.map((tag) => <span key={tag.id}>{tag.tag}</span>)}
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
                    <CoffeeAddQuantity
                        quantity={quantity}
                        handleAddQuantity={handleAddQuantity}
                        handleRemoveQuantity={handleRemoveQuantity}
                    />

                    <CoffeAddToCart onClick={handleAddToCart}>
                        <ShoppingCart size={24} weight='fill' />
                    </CoffeAddToCart>
                </CoffeActions>
                {/* <CoffeeFavorite></CoffeeFavorite> */}
            </CoffeeBottom>
        </CoffeeItemContainer>
    )
}
