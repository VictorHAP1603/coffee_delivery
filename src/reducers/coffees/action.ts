import { CoffeeProps } from "../../utils/coffees";
import { CoffeesAddedListProps } from "./reducer";

export interface RequestCoffeeActionProps {
    type: CoffeeActionTypes.REQUEST_COFFEES
    payload: CoffeeProps[]
}

export interface AddCoffeeToCartActionProps {
    type: CoffeeActionTypes.ADD_COFFEE_TO_CART
    payload: CoffeesAddedListProps[]
}

export type CoffeeAction = RequestCoffeeActionProps | AddCoffeeToCartActionProps

export enum CoffeeActionTypes {
    REQUEST_COFFEES = 'REQUEST_COFFEES',
    ADD_COFFEE_TO_CART = 'ADD_COFFEE_TO_CART'
}

export function requestCoffeesAction(coffees: CoffeeProps[]): RequestCoffeeActionProps {
    return {
        type: CoffeeActionTypes.REQUEST_COFFEES,
        payload: coffees
    }
}

export function addCoffeeToCartAction(coffeesAdded: CoffeesAddedListProps[]): AddCoffeeToCartActionProps {
    return {
        type: CoffeeActionTypes.ADD_COFFEE_TO_CART,
        payload: coffeesAdded
    }
}
