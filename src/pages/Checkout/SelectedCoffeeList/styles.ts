import { styled } from "styled-components"

export const SelectedCoffeesListContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 24px;
`

export const NoCoffeeSelected = styled.span`
  font: ${({ theme }) => theme.fonts.Roboto['textMBold']};
  color: ${({ theme }) => theme.colors['base-text']};

  text-align: center;

  margin-bottom: 24px;


`
