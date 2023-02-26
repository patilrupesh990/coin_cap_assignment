import styled from "styled-components";

export const SummaryContainerLGScreen = styled.div`
    height: 31vh;
    background: linear-gradient(to right, rgb(63, 81, 181), rgb(100, 181, 246)) rgb(255, 255, 255) !important;;
    display: flex;
    padding:0em 10em 0em 10em ;
    @media (max-width: 992px){
        height: 40vh;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 768px) {
        display: none;
        padding:0em 0em 0em 1em;
    }
`

export const SummaryContainerSmScreen = styled(SummaryContainerLGScreen)`
    display: none;
     @media (max-width: 768px) {
        height: 7vh;
        display: flex;
    }
`

export const SummaryText = styled.div`
    color: #fff;
    width: 17%;
    font-weight: 600;
    margin-top: 1em;
    @media (max-width: 992px){
        width: 100%;
        margin-top: 0em;
        margin-bottom: 0em;
    }
    @media (max-width: 768px) {
        width: 100%;
        margin-top: 0em;
        padding: 0px;
    }
`
export const SummaryHeading = styled.p`
    font-size: 1.1em;
    text-align: center;
    margin-bottom: -10px;
    @media (max-width: 768px) {
        text-align: start;
    }
`

export const SummaryValue = styled.p`
    font-size: 1.7em;
    line-height: 0px;
    text-align: center;
`