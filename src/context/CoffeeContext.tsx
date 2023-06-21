import { createContext, useEffect, useReducer } from 'react'
import { coffeeList } from '../utils/coffees';

// Reducers
import { CoffeeState, coffeesAddedListProps, coffeeReducer } from '../reducers/coffees/reducer';
import { addCoffeeToCartAction, requestCoffeesAction } from '../reducers/coffees/action';

interface CoffeContextProps {
    coffeState: CoffeeState
    addToCart: (coffeesAddedList: coffeesAddedListProps[]) => void
}

interface CoffeeProviderProps {
    children: React.ReactNode
}

export const CoffeeContext = createContext<CoffeContextProps>({} as CoffeContextProps);


export const CoffeeProvider = ({ children }: CoffeeProviderProps) => {
    // const [state, dispatch] = useReducer(coffeeReducer, initialState);
    const [coffeState, dispatch] = useReducer(coffeeReducer, 
    { 
        coffees: null,
        coffesAdded: undefined
    });

    function addToCart(coffeesAddedList: coffeesAddedListProps[]) {
        dispatch(addCoffeeToCartAction(coffeesAddedList))
    }

    useEffect(() => {
        // aqui seria uma API
        // setTimeout(() => {
            dispatch(requestCoffeesAction(coffeeList))
        // }, 2000)
    }, [])

    useEffect(() => {
        console.log(coffeState.coffesAdded)
    }, [coffeState])

    return (
        <CoffeeContext.Provider value={{ coffeState, addToCart }}>
            {children}
        </CoffeeContext.Provider>
    )
} 
