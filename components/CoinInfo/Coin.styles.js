import styled from "styled-components";

export const CoinInfoBG = styled.div`
    background-image: url('https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80');
    background-position: 20% 60%;
    background-repeat: no-repeat no-repeat;
    background-size: cover;
    height: 40vh;
`

export const CoinName = styled.div`
    background: linear-gradient(90deg, #FF00E5 0%, #BF00AC 0.01%, #0B58B1 100%);
    width: 50%;
    margin: auto;
    text-align: center;
    padding: 1rem;
    border-radius: 5px;
    margin-top: -3%;

    @media screen and (min-width: 960px){
        width: 30%;
    }
`

export const CoinContent = styled.div`
    margin-top: 3rem;
`

export const CoinContentTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    div{
        display: flex;
        align-items: center;

        img{
            width: 30px;
        }

        p{
            margin-left: 1rem;
        }
    }
`

export const CoinContentInfo = styled.div`
    margin-top: 5rem;   

    @media screen and (min-width: 960px){
        display: flex;
        justify-content: space-between;
    }
`

export const CoingContentGraphic = styled.div`

    @media screen and (min-width: 960px){
        flex: 1;
    }

    svg{
        width: 100%;
    }
`

export const CoinContentStats = styled.div`
    margin-top: 2rem;

    h3{
        text-align: center;
    }

    @media screen and (min-width: 960px){
        margin-top: 0rem;
        margin-left: 2rem;

        h3{
            text-align: left;
        }
    }
`

export const CoinContentStatsInfo = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 2rem;

    @media screen and (min-width: 960px){
        margin-top: 1rem;
        grid-template-columns: repeat(2, 1fr);
    }

    div{
        display: flex;
        align-items: center;
        
        p{
            margin-right: 1rem;
        }
    }
`

export const CoinContentTable = styled.table`
    width: 100%;
    margin-top: 5rem;
    border-collapse: collapse;

    thead{
        th{
            padding-bottom: 1rem;
            text-align: left;  
            padding-right: 2rem;
        }
    }

    th{  
        border-bottom: 1px solid #fff;
    }

    
    tbody{
        text-align: left;

        td{
            padding: 2rem 2rem 2rem 0;
            font-size: 0.875rem;
            a{
                color: white;
            }
        }
    }
`

export const CoinContentDescription = styled.div`
    margin-top: 1rem;

    div{
        display: flex;
        align-items: center;
        
        h2{
            &:not(:first-child){
                margin-left: 5px;
            }
        }
    }

    p{
        margin-top: 1rem;
    }

    a{
        color: var(--purple);
    }
`