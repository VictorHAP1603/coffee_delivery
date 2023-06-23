import { useCoffee } from '../../../hooks/useCoffe';
import { CoffeeItem } from './CoffeeItem';

import { OurCoffeesContainer, CoffeeList } from "./style";

export function OurCoffees() {
    const { coffeState } = useCoffee()
    const { coffees } = coffeState

    return (
        <OurCoffeesContainer className="container">
            <h2>Nossos Cafés</h2>

            <CoffeeList>
                {coffees && coffees.map((coffee) => (
                    <CoffeeItem coffee={coffee} key={coffee.id} />
                ))}
            </CoffeeList>
        </OurCoffeesContainer>
    )
}
