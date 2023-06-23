import { CoffeeProps, CoffeesAddedListProps } from "../../utils/coffees";
import { CoffeeAction, CoffeeActionTypes } from "./action";
import { produce } from 'immer'

export interface CoffeeState {
    coffees: CoffeeProps[] | null
    coffesAdded: CoffeesAddedListProps[] | undefined
}

export const coffeeReducer = (state: CoffeeState, action: CoffeeAction) => {

    switch (action.type) {
        case CoffeeActionTypes.REQUEST_COFFEES:
            return produce(state, draft => {
                draft.coffees = action.payload
            })

        case CoffeeActionTypes.ADD_COFFEE_TO_CART: {
            const nextCoffee = action.payload[0]
            const ammountAdded = action.payload.length

            if (state.coffesAdded !== undefined) {
                const indexOfNextCoffeeIsAdded = state.coffesAdded.findIndex(coffee => coffee.id === nextCoffee.id)

                if (indexOfNextCoffeeIsAdded >= 0) {
                    return produce(state, draft => {
                        draft.coffesAdded![indexOfNextCoffeeIsAdded].quantity! += ammountAdded
                    })
                } else {
                    return produce(state, draft => {
                        draft.coffesAdded?.push({ ...nextCoffee, quantity: ammountAdded })
                    })
                }

            } else {
                return produce(state, draft => {
                    draft.coffesAdded = [{ ...nextCoffee, quantity: ammountAdded }]
                })
            }

        } default:
            return state;
    }
}
