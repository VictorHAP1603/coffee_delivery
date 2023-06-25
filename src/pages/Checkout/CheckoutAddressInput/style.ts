import { styled } from "styled-components";

export const CheckoutAddressInputContainer = styled.label`
  display: flex;
  align-items: center;

  input {
    background-color: ${({ theme }) => theme.colors['base-input']};
    border: none;

    font: ${({ theme }) => theme.fonts.Roboto['textS']};
    color: ${({ theme }) => theme.colors['base-text']};

    padding: 12px;
    border-radius: 4px;

    transition: all .4s;
    width: 100%;

    /* margin: 10px; */

    &::placeholder {
      font: ${({ theme }) => theme.fonts.Roboto['textS']};
      color: ${({ theme }) => theme.colors['base-label']};
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors['yellow-dark']};
    }
  }

  .loading {
    color: ${({ theme }) => theme.colors['purple']};
  }

`
