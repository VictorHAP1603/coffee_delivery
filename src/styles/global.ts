import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased; // Font smoothing for Chrome
    }

    html {
        font-size: 62.5%; // 1rem = 10px
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
    }

    :focus {
        box-shadow: 0 0 0 1px ${({ theme }) => theme.colors['yellow-dark']};
    }

    .container {
        /* width: 144.4rem; */
        width: 80%;
        padding: 0 16rem;

        margin: 0 auto;

        @media (max-width: 1070px) {
            padding: 0 8rem;
        }

        @media (max-width: 730px) {
            padding: 0 0rem;
        }
    }

    button {
        cursor: pointer;
        outline: none;
        border: none;
    }

    img {
        max-width: 100%;
    }
`
