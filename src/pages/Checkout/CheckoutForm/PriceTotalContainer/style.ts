import { styled } from "styled-components";

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;

  margin-bottom: 24px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span:nth-child(1) {
      font: ${({ theme }) => theme.fonts.Roboto['textS']};
      color: ${({ theme }) => theme.colors['base-text']};
    }

    span:nth-child(2) {
      font: ${({ theme }) => theme.fonts.Roboto['textMRegular']};
      color: ${({ theme }) => theme.colors['base-text']};
    }
  }

  div:last-child {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span:nth-child(1) {
      font: ${({ theme }) => theme.fonts.Roboto['textLBold']};
      color: ${({ theme }) => theme.colors['base-subtitle']};
    }

    span:nth-child(2) {
      font: ${({ theme }) => theme.fonts.Roboto['textLBold']};
      color: ${({ theme }) => theme.colors['base-subtitle']};
    }
  }
`
