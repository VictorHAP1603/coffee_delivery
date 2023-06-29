import { useCoffee } from "../../../../hooks/useCoffe";
import { CoffeeListItem } from "../CoffeListItem";
import { NoCoffeeSelected, SelectedCoffeesListContainer, ButtonBackToHome } from "./styles";

export function SelectedCoffeesList() {
  const { coffeState } = useCoffee()
  const { coffesAdded } = coffeState

  return (
    <SelectedCoffeesListContainer>
      {!coffesAdded && (
        <NoCoffeeSelected>
          <p>Nenhum café selecionado</p>
          <ButtonBackToHome to="/">Voltar para Home</ButtonBackToHome>
        </NoCoffeeSelected>
      )}

      {coffesAdded && coffesAdded.length > 0 && coffesAdded.map(coffee => (
        <CoffeeListItem key={coffee.id} coffee={coffee} />
      ))}
    </SelectedCoffeesListContainer>
  )
}
