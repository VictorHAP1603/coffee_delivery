import styled from 'styled-components'

export const CoffeeListItemContainer = styled.div`
  display: flex;
  align-items: flex-start;

  padding-bottom: 24px;
  margin-bottom: 24px;

  border-bottom: 1px solid ${({ theme }) => theme.colors['base-button']};

  img {
    width: 64px;
    margin-right: 20px;
  }

`

export const CoffeItemPrice = styled.span`
  display: inline-block;

  margin-left: auto;
  color: ${({ theme }) => theme.colors['base-text']};
  font: ${({ theme }) => theme.fonts.Roboto['textMBold']};
`

export const CoffeItemContent = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font: ${({ theme }) => theme.fonts.Roboto['textMRegular']};
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 8px;
    margin-top: 10px;
  }
`

export const CoffeeButtonRemove = styled.button`
  background-color: ${({ theme }) => theme.colors['base-button']};
  padding: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 6px;

  transition: all .4s;

  svg {
    color: ${({ theme }) => theme.colors['purple']};
    margin-right: 4px;
  }

  span {
    color: ${({ theme }) => theme.colors['base-text']};
    font: ${({ theme }) => theme.fonts.Roboto['buttonM']};

    text-transform: uppercase;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-hover']};
  }
`
