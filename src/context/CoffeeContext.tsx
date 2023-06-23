import { createContext, useEffect, useReducer, useMemo } from 'react'
import { coffeeList } from '../utils/coffees';

// Reducers
import { CoffeeState, CoffeesAddedListProps, coffeeReducer } from '../reducers/coffees/reducer';
import { addCoffeeToCartAction, requestCoffeesAction } from '../reducers/coffees/action';

interface CoffeContextProps {
    coffeState: CoffeeState
    totalItensOnCart: number | undefined
    addToCart: (coffeesAddedList: CoffeesAddedListProps[]) => void
    calculateTotalPrice: () => string
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

    function calculateTotalPrice() {
        const totalAmount = coffeState.coffesAdded?.reduce((acc, item) => {
            return acc + (item.quantity! * item.price!)
        }, 0)

        if (!totalAmount) return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(0);

        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(totalAmount / 100)
    }

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

    console.log(totalItensOnCart)

    return (
        <CoffeeContext.Provider
            value={{
                coffeState,
                totalItensOnCart,
                addToCart,
                calculateTotalPrice
            }}
        >
            {children}
        </CoffeeContext.Provider>
    )
}
