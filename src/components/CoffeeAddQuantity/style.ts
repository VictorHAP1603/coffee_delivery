import styled from 'styled-components'

export const CoffeeAddQuantityContainer = styled.div`
    background-color: ${props => props.theme.colors['base-button']};

    display: flex;
    border-radius: 6px;

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;

        width: 30px;
        padding: 0 8px;
        font-size: 1.8rem;

        font: ${props => props.theme.fonts.Roboto['textMRegular']};
        color: ${props => props.theme.colors['base-title']};
    }

    button {
        width: 26px;
        height: 38px;
        color: ${props => props.theme.colors['purple']};
        font-size: 2.4rem;
        font-weight: bold;
        background-color: ${props => props.theme.colors['base-button']};

        transition: all .4s;

        &:hover {
            color: ${props => props.theme.colors['purple-dark']};
        }

        &:first-child {
            border-radius: 6px 0 0 6px;
        }

        &:last-child {
            border-radius: 0 6px 6px 0;
        }

        &:focus {
            box-shadow: 0 0 0 2px ${props => props.theme.colors['purple']};
        }
    }
`
