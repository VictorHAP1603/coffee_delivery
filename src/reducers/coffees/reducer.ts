import { CoffeeProps, CoffeesAddedListProps } from "../../utils/coffees";
import { CoffeeActionTypes } from "./action";
import { produce } from 'immer'
import { CoffeeAction } from "./types";

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

        }

        case CoffeeActionTypes.DECREASE_COFFEE_FROM_THE_CART: {
            const id = action.payload
            const coffeeSelectedIndex = state.coffesAdded?.findIndex(coffee => coffee.id === id)

            if (!coffeeSelectedIndex && coffeeSelectedIndex !== 0) return state

            if (coffeeSelectedIndex >= 0) {
                return produce(state, draft => {
                    const coffeeSelected = draft.coffesAdded![coffeeSelectedIndex]
                    if (coffeeSelected.quantity! > 1) {
                        coffeeSelected.quantity! -= 1
                    }
                })
            }

            return state
        }

        case CoffeeActionTypes.REMOVE_COFFEE_FROM_THE_CART: {
            const id = action.payload
            const coffeeSelectedIndex = state.coffesAdded?.findIndex(coffee => coffee.id === id)

            if (!coffeeSelectedIndex && coffeeSelectedIndex !== 0) return state

            if (coffeeSelectedIndex >= 0) {
                return produce(state, draft => {
                    draft.coffesAdded?.splice(coffeeSelectedIndex, 1)
                })
            }

            return state
        }

        case CoffeeActionTypes.CLEAN_CART:
            return produce(state, draft => {
                draft.coffesAdded = undefined
            })
        default:
            return state;
    }
}
