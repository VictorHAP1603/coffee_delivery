import { CoffeeProps } from "../../utils/coffees";
import { coffeesAddedListProps } from "./reducer";

export interface RequestCoffeeActionProps {
    type: CoffeeActionTypes.REQUEST_COFFEES
    payload: CoffeeProps[]
}

export interface AddCoffeeToCartActionProps {
    type: CoffeeActionTypes.ADD_COFFEE_TO_CART
    payload: coffeesAddedListProps[]
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

export function addCoffeeToCartAction(coffeesAdded: coffeesAddedListProps[]): AddCoffeeToCartActionProps {
    return {
        type: CoffeeActionTypes.ADD_COFFEE_TO_CART,
        payload: coffeesAdded
    }
}