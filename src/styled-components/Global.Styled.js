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
        background-repeat: no-repeat;
        background-color: #FF7979;
        width: 100vw;
        height: 100%;
        display: flex;
        justify-content: center;
        /* align-items: center; */
        padding: 88px 24px;
    }
`