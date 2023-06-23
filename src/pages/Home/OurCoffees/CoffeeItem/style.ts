import styled from 'styled-components';

export const CoffeeItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;

    background-color: ${props => props.theme.colors['base-card']};
    border-radius: 6px 36px 6px 36px;

    padding: 110px 20px 20px 20px;

    position: relative;

    text-align: center;
`

export const CoffeeImage = styled.img`
    position: absolute;
    top: -20px;
`

export const CoffeeInfo = styled.div``

export const CoffeTags = styled.div`

    margin-top: 4px;
    margin-bottom: 16px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    span {
        font: ${props => props.theme.fonts.Roboto['tag']};
        text-transform: uppercase;

        color: ${props => props.theme.colors['yellow-dark']};
        background-color: ${props => props.theme.colors['yellow-light']};

        padding: 4px 8px;

        border-radius: 100px;
    }
`

export const CoffeeName = styled.p`
    font: ${props => props.theme.fonts.Baloo['titleS']};
    color: ${props => props.theme.colors['base-subtitle']};

    margin-bottom: 8px;
`

export const CoffeeDescription = styled.span`
    display: inline-block;

    font: ${props => props.theme.fonts.Roboto['textS']};
    color: ${props => props.theme.colors['base-label']};

    line-height: 1.8rem;

    margin-bottom: 33px;
`

export const CoffeeBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
`

export const CoffeActions = styled.div`
    display: flex;
    gap: 8px;
`

export const CoffeePrice = styled.p`
    font: ${props => props.theme.fonts.Baloo['titleM']};
    color: ${props => props.theme.colors['base-text']};

    span {
        font: ${props => props.theme.fonts.Roboto['textS']};
        color: ${props => props.theme.colors['base-text']};

        margin-right: 4px;
    }
`

export const CoffeAddToCart = styled.button`
    background-color: ${props => props.theme.colors['purple-dark']};
    color: ${props => props.theme.colors['white']};

    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 38px;
    width: 38px;
`
