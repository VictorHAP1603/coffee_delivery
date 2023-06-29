import { styled } from "styled-components"

export const CompleteYourOrder = styled.div`
  flex: 0.6;

  display: flex;
  flex-direction: column;
`

export const SelectedCoffees = styled.div`
  flex: 0.4;
`
export const CheckoutFormContainer = styled.form`
  display: flex;
  gap: 32px;
`

export const CheckoutSubtitle = styled.h3`
  font: ${({ theme }) => theme.fonts.Baloo['titleXS']};
  color: ${({ theme }) => theme.colors['base-subtitle']};

  margin-bottom: 15px;
`

// ======================  DEFAULTS  ======================

const CheckoutBlock = styled.div`
  padding: 40px;

  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors['base-card']};

  display: flex;
  flex-direction: column;
`

const CheckoutHeaderBlock = styled.header`
  display: flex;
  align-items: flex-start;
  margin-bottom: 32px;

  div {
    margin-left: 8px;

    p {
      font: ${({ theme }) => theme.fonts.Roboto['textMRegular']};
      color: ${({ theme }) => theme.colors['base-subtitle']};

      line-height: 130%;
    }

    span {
      font: ${({ theme }) => theme.fonts.Roboto['textS']};
      color: ${({ theme }) => theme.colors['base-text']};
    }
  }
`

// =========================================================



export const CheckoutAddress = styled(CheckoutBlock)`
  margin-bottom: 12px;
`

export const CheckoutAddressHeader = styled(CheckoutHeaderBlock)`
  svg {
    color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`

export const CheckoutAddressContent = styled.div`
  flex: 1;

  display: grid;
  grid-template-columns: 4fr 4.5fr 1.5fr;

  column-gap: 12px;
  row-gap: 16px;

  label:nth-child(1) {
    grid-column: 1;
  }

  label:nth-child(2) {
    grid-column: 1/4;
  }

  label:nth-child(3) {
    grid-column: 1/2;
  }

  label:nth-child(4) {
    grid-column: 2/4;
  }

  label:nth-child(5) {
    grid-column: 1/2;
  }

  label:nth-child(6) {
    grid-column: 2/3;
  }

  label:nth-child(7) {
    grid-column: 3/4;
  }
`

// =========================================================


// ======================  PAYMENT  ======================


export const CheckoutPayment = styled(CheckoutBlock)``

export const CheckoutPaymentHeader = styled(CheckoutHeaderBlock)`
  svg {
    color: ${({ theme }) => theme.colors['purple']};
  }
`

export const CheckoutPaymentMethods = styled.div`
  display: flex;
  justify-content: space-between;

  gap: 12px;
`

export const TypeOfPaymentItem = styled.button`
  flex: 1;
  background-color: ${({ theme }) => theme.colors['base-button']};
  border-radius: 6px;

  padding: 16px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  transition: all .4s;

  svg {
    color: ${({ theme }) => theme.colors['purple']};
  }

  span {
    color: ${({ theme }) => theme.colors['base-text']};
    font: ${({ theme }) => theme.fonts.Roboto['buttonM']};

    text-transform: uppercase;
    margin-left: 16px;

    transition: all .2s;
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors['base-hover']};
  }

  &.active {
    outline: none;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors['purple']};
    background-color: ${({ theme }) => theme.colors['purple-light']};

    span {
      filter: brightness(.8);
    }
  }
`

// =========================================================

export const CheckoutSelectedCoffees = styled(CheckoutBlock)`
  border-radius: 0 44px 0 44px;

  .error {
    color: ${({ theme }) => theme.colors['red']};
    font: ${({ theme }) => theme.fonts.Roboto['textLBold']};
    margin-top: 24px;

    display: block;
    text-align: left;

  }

  .loading__box {
    margin-top: 20px;
    color: ${({ theme }) => theme.colors['purple']};

    svg {
      height: 40px;
      width: 40px;
    }

  }
`

export const CheckoutButton = styled.button`
  background-color: ${({ theme }) => theme.colors['yellow']};
  border-radius: 6px;

  color: ${({ theme }) => theme.colors['white']};

  font: ${({ theme }) => theme.fonts.Roboto['buttonG']};
  text-transform: uppercase;

  padding: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all .4s;

  &:hover {
    background-color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`
