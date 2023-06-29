import { NavLink } from "react-router-dom"
import { styled } from "styled-components"

export const SelectedCoffeesListContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 24px;
`

export const NoCoffeeSelected = styled.div`
  margin-bottom: 24px;
  padding-bottom: 24px;

  border-bottom: 1px solid ${({ theme }) => theme.colors['base-button']};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font: ${({ theme }) => theme.fonts.Roboto['textMBold']};
    color: ${({ theme }) => theme.colors['base-text']};

    text-align: center;
  }

`

export const ButtonBackToHome = styled(NavLink)`
  margin-top: 30px;
  padding: 8px 16px;

  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  border-radius: 6px;

  font: ${({ theme }) => theme.fonts.Roboto['buttonG']};
  color: ${({ theme }) => theme.colors['base-button']};

  background-color: ${({ theme }) => theme.colors['purple']};

  text-decoration: none;
  text-transform: uppercase;
  text-align: center;

  transition: all 0.4s;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors['purple-dark']};
  }
`
