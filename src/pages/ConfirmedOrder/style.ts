import styled from "styled-components";

export const ConfirmedOrderContainer = styled.main`
    padding-top: 80px;
    padding-bottom: 80px;
`

export const ConfirmedOrderHeader = styled.header`
    margin-bottom: 40px;

    h2 {
        color: ${props => props.theme.colors["yellow-dark"]};
        font: ${props => props.theme.fonts.Baloo['titleL']};
    }

    p {
        color: ${props => props.theme.colors["base-subtitle"]};
        font: ${props => props.theme.fonts.Roboto['textLRegular']};
    }
`

export const ConfirmedOrderContent = styled.div`
    display: flex;

    gap: 100px;
`

export const ConfirmedOrderInfos = styled.div`
    flex: 1;

    border-radius: 6px 36px 6px 36px;
    background: ${props => `linear-gradient(145deg, ${props.theme.colors["yellow"]} 40%, ${props.theme.colors["purple"]} 100%)`};

    position: relative;

    padding: 40px;

    display: flex;
    flex-direction: column;

    /* justify-content: space-between; */
    gap: 32px;

    height: auto;

    &::before {
        content: "";
        position: absolute;
        top: 1px;
        left: 1px;
        right: 1px;
        bottom: 1px;

        border-radius: 6px 36px 6px 36px;
        background-color: ${props => props.theme.colors["background"]};
        z-index: 10;

    }
`

export const ConfirmedOrderInfoItem = styled.div`
    z-index: 11;
    position: relative;

    display: flex;
    align-items: center;

    div:first-child {
        margin: 12px;

        width: 32px;
        height: 32px;

        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: red;

        color: ${props => props.theme.colors["white"]};
    }

    div:last-child {
        font: ${props => props.theme.fonts.Roboto['textMRegular']};
        color: ${props => props.theme.colors["base-text"]};
        line-height: 130%;

        .bold {
            font: ${props => props.theme.fonts.Roboto['textMBold']};
        }
    }

    &:nth-child(1) {
        div:first-child {
            background-color: ${props => props.theme.colors["purple"]};
        }
    }

    &:nth-child(2) {
        div:first-child {
            background-color: ${props => props.theme.colors["yellow"]};
        }

    }

    &:nth-child(3) {
        div:first-child {
            background-color: ${props => props.theme.colors["yellow-dark"]};
        }

    }
`

export const ConfirmedOrderImage = styled.img`
    flex: 1;
`

