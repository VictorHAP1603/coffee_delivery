import { styled } from "styled-components";

interface ICheckoutContainerProps {
    widthrefstepone: number;
    widthrefsteptwo: number;
}

export const CheckoutStepContainer = styled.div<ICheckoutContainerProps>`
     display: flex;
    justify-content: center;
    align-items: center;

    margin: 4rem auto;
    gap: 100px;

    > div {
        &:first-child {
        > div {
            &::after {
                width: ${({ widthrefstepone }) => `calc(${widthrefstepone}px + 30px)`};
            }
        }
    }

    &:last-child {
        > div {
            &::after {
                width: ${({ widthrefsteptwo }) => `calc(${widthrefsteptwo}px + 79px)`};
            }
        }
    }
    }
`

export const StepItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > div {
    border: 3px solid ${({ theme }) => theme.colors['yellow-light']};
    border-radius: 50%;

    width: 8rem;
    height: 8rem;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    transition: all .4s;

    span {
        font: ${({ theme }) => theme.fonts.Baloo['titleL']};
        color: ${({ theme }) => theme.colors['base-text']};
    }
    }

    p {
    margin-top: 2rem;

    font: ${({ theme }) => theme.fonts.Baloo['titleS']};
    color: ${({ theme }) => theme.colors['base-text']};

    }


    &:first-child {
        > div {
            &::after {
                content: '';
                position: absolute;
                left: 100%;
                height: 3px;
                background-color: ${({ theme }) => theme.colors['yellow-light']};

                transition: all .4s;
            }
        }
    }

    &:last-child {
        > div {
            &::after {
                content: '';
                position: absolute;
                right: 100%;
                /* width: 100%; */
                height: 3px;
                background-color: ${({ theme }) => theme.colors['yellow-light']};

                transition: all .4s;

            }
        }
    }

    &.active {
    &:first-child {
        > div {
        border: 3px solid ${({ theme }) => theme.colors['yellow']};

        &::after {
            background-color: ${({ theme }) => theme.colors['yellow']};
        }
        }
    }

    &:last-child {
        > div {
        border: 3px solid ${({ theme }) => theme.colors['yellow']};
        
        &::after {
            background-color: ${({ theme }) => theme.colors['yellow']};
        }
        }
    }
    }
`