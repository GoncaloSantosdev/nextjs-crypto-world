import styled from "styled-components";

export const HeaderStyles = styled.header`
    position: absolute;
    width: 100%;
    z-index: 99;
`;

export const NavStyles = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 2rem;
    padding-bottom: 2rem;
`

export const LogoStyles = styled.div`
    display: flex;
    align-items: center;
    color: var(--white);

    h3{
        font-weight: 400;
        margin-left: 0.875rem;
    }
`

export const MenuIconStyles = styled.div`
    color: var(--white);
    cursor: pointer;
    height: 20px;

    @media screen and (min-width: 960px){
        display: none;
    }
`;

export const MenuListMobileStyles = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    width: 90%;
    margin: auto;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;

    a{
        color: black;
        margin: 1rem 0;
        font-size: 0.875rem;
    }

    @media screen and (min-width: 960px) {
        display: none;
    }
`

export const MenuListStyles = styled.div` 
    display: none;
    
    a{
        color: var(--white);
        font-size: 0.875rem;

        &:not(:last-child){
            margin-right: 3rem;
        }
    }

    .active{
        color: var(--purple);
    }

    @media screen and (min-width: 960px) {
        display: flex;
        align-items: center;
    }
`