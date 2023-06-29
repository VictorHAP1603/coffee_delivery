import { createContext, useEffect, useReducer, useMemo, useCallback } from 'react'
import { CoffeesAddedListProps, coffeeList } from '../utils/coffees';

// Reducers
import { CoffeeState, coffeeReducer } from '../reducers/coffees/reducer';
import {
    addCoffeeToCartAction,
    removeCoffeeFromTheCartAction,
    decreaseCoffeeFromTheCartAction,
    requestCoffeesAction,
    cleanCartAction
} from '../reducers/coffees/action';

interface CoffeContextProps {
    coffeState: CoffeeState
    totalItensOnCart: number | undefined
    formattedTotalPrice: string
    formattedTotalPriceOfItemsInCart: string
    addToCart: (coffeesAddedList: CoffeesAddedListProps[]) => void
    decreaseCoffeeFromTheCart: (id: number) => void
    removeCoffeeFromTheCart: (id: number) => void
    cleanCart: () => void
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

    function decreaseCoffeeFromTheCart(id: number) {
        dispatch(decreaseCoffeeFromTheCartAction(id))
    }

    function removeCoffeeFromTheCart(id: number) {
        dispatch(removeCoffeeFromTheCartAction(id))
    }

    function cleanCart() {
        dispatch(cleanCartAction())
    }

    const calculateTotalPriceOfItemsInCart = useCallback(() => {
        const totalAmount = coffeState.coffesAdded?.reduce((acc, item) => {
            return acc + (item.quantity! * item.price!)
        }, 0)

        return totalAmount ? totalAmount : 0
    }, [coffeState.coffesAdded])

    const calculateTotalPrice = useCallback(() => {

        const totalAmount = calculateTotalPriceOfItemsInCart()
        const totalDelivery = 350

        return totalAmount + totalDelivery
    }, [calculateTotalPriceOfItemsInCart])

    const formattedTotalPriceOfItemsInCart = useMemo(() => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format((calculateTotalPriceOfItemsInCart() / 100))
    }, [calculateTotalPriceOfItemsInCart])

    const formattedTotalPrice = useMemo(() => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format((calculateTotalPrice() / 100))
    }, [calculateTotalPrice])

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


    return (
        <CoffeeContext.Provider
            value={{
                coffeState,
                totalItensOnCart,
                formattedTotalPrice,
                formattedTotalPriceOfItemsInCart,
                addToCart,
                decreaseCoffeeFromTheCart,
                removeCoffeeFromTheCart,
                cleanCart
            }}
        >
            {children}
        </CoffeeContext.Provider>
    )
}
