import styled from "styled-components";

export const NavBarContainer = styled.div`
    position: sticky;
    top:0;
    background-color: #fff;
    height: 9vh;
    padding: 0vw 7vw 0vw 7vw;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`
export const NavItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
`
export const NavLeftMenu=styled.div`
    display: flex;
    height: 100%;
    position: relative;
    @media (max-width: 768px) {
        display: none;
    }
`

export const NavRightMenu = styled(NavLeftMenu)``

export const NavMenu = styled.button`
    font-size: 1.1em;
    color: rgba(0,0,0,.87);
    font-weight: 400;
    padding:  0em 1em 0em 1em;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border: none;
    &:hover{
        background-color: rgba(0,0,0,.03);
    }
`
export const NavLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding:  0em 1em 0em 1em;
    &:hover{
        background-color: rgba(0,0,0,.03);
    }
`

export const NavMenuSM = styled.div`
    display: none;
    @media(max-width: 768px) {
        display: block;
    }
`