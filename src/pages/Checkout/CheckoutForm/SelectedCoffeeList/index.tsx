import { useCoffee } from "../../../../hooks/useCoffe";
import { CoffeeListItem } from "../CoffeListItem";
import { NoCoffeeSelected, SelectedCoffeesListContainer } from "./styles";

export function SelectedCoffeesList() {
  const { coffeState } = useCoffee()
  const { coffesAdded } = coffeState

  return (
    <SelectedCoffeesListContainer>
      {!coffesAdded && (
        <NoCoffeeSelected>Nenhum café selecionado</NoCoffeeSelected>
      )}

      {coffesAdded && coffesAdded.length > 0 && coffesAdded.map(coffee => (
        <CoffeeListItem coffee={coffee} />
      ))}
    </SelectedCoffeesListContainer>
  )
}
