import styled from "styled-components";

export const Container = styled.div`
    width: 327px;

    @media(min-width: 1440px) {
        width: 540px;
    }
`

export const OfferDiv  = styled.div`
    background-color: #5E54A4;
    padding: 18px 66.5px;
    border-radius: 10px;
    font-weight: 400;
    font-size: 15px;
    line-height: 26px;
    letter-spacing: 0.27px;
    color: white;
    text-align: center;
    margin-top: 64px;
    width: 100%;
    box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);

`

export const Span = styled.span`
    font-weight: 700;
    font-size: 15px;
    line-height: 26px;
    letter-spacing: 0.27px;
    color: white;
`

export const SignUpDiv = styled.div`
    width: 100%;
    padding: 8px 24px 24px;
    background-color: white;
    border-radius: 10px;    
    margin-top: 24px;
    box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);

    @media(min-width: 1440px) {
        padding: 20px 40px 40px;
    }

`

export const StyledInput = styled.input`
    width: 100%;
    height: 56px;
    padding: 15px 19.40px;
    border-radius: 5px;
    border: 1px solid ${({border}) => border};
    margin-top: 16px;
    font-weight: 600;
    font-size: 14px;
    line-height: 26px;
    letter-spacing: 0.25px;
    color: #3D3B48;
    background-image: url(${({bg}) => bg});
    background-repeat: no-repeat;
    background-position: top 16px right 10px;


    &:focus {
        outline: none;
    }

    @media(min-width: 1440px) {
        margin-top: 20px;
        padding: 15px 40px 15px 32px;
        background-position: top 16px right 16px;
    }
`

export const StyledSubmit  = styled.button`
    width: 100%;
    height: 56px;
    border-radius: 5px;
    border: none;
    margin-top: 16px;
    font-weight: 600;
    font-size: 15px;
    line-height: 26px;
    letter-spacing: 1px;
    color: white;
    background-color: #38CC8B;
    box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.0908818);

    @media(min-width: 1440px) {
        margin-top: 20px;
        cursor: pointer;
    }

    &:hover {
        background-color: #77E2B3;
    }
`

export const Terms = styled.p`
    margin-top: 8px;
    font-weight: 500;
    font-size: 11px;
    line-height: 21px;
    color: #BAB7D4;
    text-align: center;
    padding: 0px 15px;

    @media(min-width: 1440px) {
        line-height: 26px;
    }
`

export const TermsSpan = styled.span`
    font-weight: 700;
    font-size: 11px;
    line-height: 21px;
    color: #FF7979;
`

export const ErrorTxt = styled.p`
    font-family: 500;
    font-style: italic;
    font-size: 11px;
    line-height: 16.5px;
    margin-top: 6px;
    text-align: right;
    color: #FF7979;
`
