import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    body {
        background-image: url("./images/bg-intro-mobile.png");
        background-color: #FF7979;
        width: 100vw;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;

        @media(min-width: 1440px) {
            background-image: url("./images/bg-intro-desktop.png");
        }
    }
`