import styled from "styled-components";

export const HeroStyles = styled.section`
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat, repeat;
    background-position: center center;
    background-size: cover;
    background-image: url('/bg-image.jpg');
`;

export const HeroContent = styled.div`
    height: 100vh;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: white;

    h1{
        text-align: center;
    }
`

export const HeroContentCta = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 960px){
        flex-direction: row;
    }

    *{
        margin: 0 .5rem;
    }

    button{
        margin-top: 1rem;

        @media screen and (min-width: 960px){
            margin-top: 0rem;
        }
    }

`