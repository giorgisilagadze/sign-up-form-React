import styled from "styled-components";

export const StyledTitle = styled.h1`
    font-weight: 700;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -0.29px;
    color: white;
    text-align: center;

    @media(min-width: 1440px) {
        font-size: 50px;
        line-height: 55px;
        letter-spacing: -0.52px; 
        text-align: start;   
    }
`

export const StyledText = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: white;
    text-align: center;
    margin-top: 16px;

    @media(min-width: 1440px) {
        text-align: start; 
        margin-top: 25px;  
    }

`

export const TextContainer = styled.div`
    @media(min-width: 1440px) {
        width: 525px;
    }
`

export const MainDiv = styled.div`
    width: 327px;
    padding: 88px 0px;

    @media(min-width: 1440px) {
        width: 1110px;
        display: flex;
        align-items: center;
        gap: 45px;
        padding: 0px;
    }

`