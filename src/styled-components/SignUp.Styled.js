import styled from "styled-components";

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
    width: 327px;
    box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);

`

export const Span = styled.span`
    font-weight: 500;
    font-size: 15px;
    line-height: 26px;
    letter-spacing: 0.27px;
    color: white;
`

export const SignUpDiv = styled.div`
    width: 327px;
    padding: 8px 24px 24px;
    background-color: white;
    border-radius: 10px;    
    margin-top: 24px;

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

    &:focus {
        outline: none;
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
`