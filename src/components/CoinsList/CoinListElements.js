import styled from "styled-components";

export const CoinListContainer = styled.div`
    background-color: #fff;
    margin: -7% 10em 0em 10em;
    z-index: 200;
    box-shadow: rgb(0 0 0 / 40%) 0px 2px 15px -3px !important;
    border-radius: 0.28571429rem;
    @media(max-width: 768px) {
        margin: 0em;
    }
    @media(max-width: 992px) {
        margin: 0em 0em 0em 0em;
    }
`
export const LargeScreenTable = styled.div`
    @media(max-width: 768px) {
        display: none;
    }
`
export const SmallScreenTable = styled.div`
    display: none;
    @media(max-width: 768px) {
        display: block;
    }
`

export const DimmerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`