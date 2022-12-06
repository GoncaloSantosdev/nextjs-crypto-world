import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --black: #0F0F0F;
        --white: #FFFFFF;
        --purple: #FF00E5;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-size: 1rem;
        font-weight: 400;
        background-color: var(--black);
        color: var(--white);
    }

    h1{
        font-size: 1.875rem;
        font-weight: 600;

        @media screen and (min-width: 960px){
            font-size: 5rem;
        }
    }

    h2{
        font-size: 1.25rem;
        font-weight: 500;

        @media screen and (min-width: 960px){
            font-size: 1.5rem;
        }
    }

    h3{
        font-size: 1.25rem;
        font-weight: 400;
    }

    a{
        text-decoration: none;
    }

    input{
        background: none;
        border-radius: 50px;
        padding: .875rem 2rem;
        border: 1px solid white;
        color: var(--white);

        ::placeholder{
            color: var(--white);
        }
    }

    .container{
        padding: 0 1rem;

        @media screen and (min-width: 960px) {
            max-width: 1200px;
            margin: 0 auto;
        }
    }

    button{
        cursor: pointer;
    }

    .btn--primary{
        color: var(--purple) !important;
        background-color: var(--black);
        border-radius: 50px;
        padding: 12px 25px;
        border: 1px solid white;
    }

    .btn--secondary{
        color: var(--white);
        background-color: var(--purple);
        border-radius: 50px;
        padding: 0.875rem 2rem;
        border: none;
    }

    .bold{
        font-weight: 600;
    }

    .purple{
        color: var(--purple);
    }
`;

export default GlobalStyle;