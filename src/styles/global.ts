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
`