import styled from 'styled-components';

export const HeaderContainer = styled.header`
    height: 10rem;
    position: sticky;
    top: 0;

    background-color: ${p => p.theme.colors['white']};
    z-index: 100;

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
    }

`

export const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

`

export const Location = styled.div`
    display: flex;
    align-items: center;
    padding: 8px;
    gap: 4px;

    background-color: ${p => p.theme.colors['purple-light']};
    border-radius: 8px;

    svg {
        color: ${p => p.theme.colors['purple']}
    }

    span {
        font: ${p => p.theme.fonts.Roboto['textS']};
        color: ${p => p.theme.colors['purple-dark']}

    }
`

export const Cart = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;

    border-radius: 8px;
    background-color: ${p => p.theme.colors['yellow-light']};

    transition: all .4s;
    cursor: pointer;

    position: relative;

    svg {
        color: ${p => p.theme.colors['yellow-dark']}
    }

    &:hover {
        filter: brightness(.9);
    }
`

export const TotalItensCart = styled.span`
    position: absolute;
    top: -8px;
    right: -8px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 20px;
    height: 20px;

    border-radius: 50%;
    background-color: ${p => p.theme.colors['yellow-dark']};
    font: ${p => p.theme.fonts.Roboto['textXS']};
    font-weight: bold;
    color: ${p => p.theme.colors['white']};

    transition: all .4s;
    transform: scale(0);

    &.active {
        transform: scale(1);
    }

`
