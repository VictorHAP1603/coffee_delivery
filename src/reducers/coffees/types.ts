import { CoffeeProps, CoffeesAddedListProps } from "../../utils/coffees"
import { CoffeeActionTypes } from "./action"

export interface RequestCoffeeActionProps {
  type: CoffeeActionTypes.REQUEST_COFFEES
  payload: CoffeeProps[]
}

export interface AddCoffeeToCartActionProps {
  type: CoffeeActionTypes.ADD_COFFEE_TO_CART
  payload: CoffeesAddedListProps[]
}

export interface RemoveOneCoffeeFromTheCartActionProps {
  type: CoffeeActionTypes.REMOVE_ONE_COFFEE_FROM_THE_CART
  payload: number
}

export interface RemoveCoffeeFromTheCartActionProps {
  type: CoffeeActionTypes.REMOVE_COFFEE_FROM_THE_CART
  payload: number
}

export type CoffeeAction =
  RequestCoffeeActionProps |
  AddCoffeeToCartActionProps |
  RemoveOneCoffeeFromTheCartActionProps |
  RemoveCoffeeFromTheCartActionProps
