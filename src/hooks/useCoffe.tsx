import { useContext } from "react";
import { CoffeeContext } from "../context/CoffeeContext";

export const useCoffee = () => useContext(CoffeeContext);
