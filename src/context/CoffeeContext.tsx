import { createContext, useEffect, useReducer, useMemo } from 'react'
import { CoffeesAddedListProps, coffeeList } from '../utils/coffees';

// Reducers
import { CoffeeState, coffeeReducer } from '../reducers/coffees/reducer';
import {
    addCoffeeToCartAction,
    removeCoffeeFromTheCartAction,
    removeOneCoffeeFromTheCartAction,
    requestCoffeesAction
} from '../reducers/coffees/action';

interface CoffeContextProps {
    coffeState: CoffeeState
    totalItensOnCart: number | undefined
    formattedTotalPrice: string
    formattedTotalPriceOfItemsInCart: string
    addToCart: (coffeesAddedList: CoffeesAddedListProps[]) => void
    removeOneCoffeeFromTheCart: (id: number) => void
    removeCoffeeFromTheCart: (id: number) => void
}

interface CoffeeProviderProps {
    children: React.ReactNode
}

export const CoffeeContext = createContext<CoffeContextProps>({} as CoffeContextProps);

export const CoffeeProvider = ({ children }: CoffeeProviderProps) => {
    const [coffeState, dispatch] = useReducer(coffeeReducer,
        {
            coffees: null,
            coffesAdded: undefined
        });

    function addToCart(coffeesAddedList: CoffeesAddedListProps[]) {
        dispatch(addCoffeeToCartAction(coffeesAddedList))
    }

    function removeOneCoffeeFromTheCart(id: number) {
        dispatch(removeOneCoffeeFromTheCartAction(id))
    }

    function removeCoffeeFromTheCart(id: number) {
        dispatch(removeCoffeeFromTheCartAction(id))
    }

    function calculateTotalPriceOfItemsInCart() {
        const totalAmount = coffeState.coffesAdded?.reduce((acc, item) => {
            return acc + (item.quantity! * item.price!)
        }, 0)

        return totalAmount ? totalAmount : 0
    }

    function calculateTotalPrice() {

        const totalAmount = calculateTotalPriceOfItemsInCart()
        const totalDelivery = 350

        return totalAmount + totalDelivery
    }

    const formattedTotalPriceOfItemsInCart = useMemo(() => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format((calculateTotalPriceOfItemsInCart() / 100))
    }, [coffeState.coffesAdded])

    const formattedTotalPrice = useMemo(() => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format((calculateTotalPrice() / 100))
    }, [coffeState.coffesAdded])

    const totalItensOnCart = useMemo(() => {
        return coffeState.coffesAdded?.reduce((acc, item) => {
            return acc + item.quantity!
        }, 0)
    }, [coffeState.coffesAdded])

    useEffect(() => {
        // aqui seria uma API
        // setTimeout(() => {
        dispatch(requestCoffeesAction(coffeeList))
        // }, 2000)
    }, [])

    useEffect(() => {
        console.log(coffeState)
    }, [coffeState])

    return (
        <CoffeeContext.Provider
            value={{
                coffeState,
                totalItensOnCart,
                formattedTotalPrice,
                formattedTotalPriceOfItemsInCart,
                addToCart,
                removeOneCoffeeFromTheCart,
                removeCoffeeFromTheCart
            }}
        >
            {children}
        </CoffeeContext.Provider>
    )
}
