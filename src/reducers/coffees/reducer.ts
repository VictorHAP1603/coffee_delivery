import { CoffeeProps } from "../../utils/coffees";
import { CoffeeAction, CoffeeActionTypes } from "./action";

export interface coffeesAddedListProps {
    id: number
    title: string
    price: number
    quantity?: number
}

export interface CoffeeState {
    coffees: CoffeeProps[] | null
    coffesAdded: coffeesAddedListProps[] | undefined
}

export const coffeeReducer = (state: CoffeeState, action: CoffeeAction) => {

    switch (action.type) {
        case CoffeeActionTypes.REQUEST_COFFEES:
            return { ...state, coffees: action.payload }

        case CoffeeActionTypes.ADD_COFFEE_TO_CART: {
            const nextCoffee = action.payload[0]
            const ammountAdded = action.payload.length

            if (state.coffesAdded !== undefined) {
                const nextCoffeeIsAdded = state.coffesAdded.find(coffee => coffee.id === nextCoffee.id)

                if (nextCoffeeIsAdded) {
                    const coffees = state.coffesAdded.map(coffee => {
                        return coffee.id === nextCoffee.id
                            ? { ...coffee, quantity: coffee.quantity! + ammountAdded }
                            : coffee
                    })

                    return { ...state, coffesAdded: coffees }
                } else {
                    return { 
                        ...state, 
                        coffesAdded: [...state.coffesAdded, {...nextCoffee, quantity: ammountAdded}]
                    }
                }

            } else {
                return { 
                    ...state, 
                    coffesAdded: [{...nextCoffee, quantity: ammountAdded}]
                }
            }
            
        } default:
            return state;
    }
}   