import styled from "styled-components";

export const SwiperCard = styled.div`
    padding: 2rem;
    background-color: #202020;
    border-radius: 5px;

    div{
        color: var(--white);
    }

    hr{
        margin: 1rem 0;
    }
`

export const SwiperCardTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    span{
        margin-left: 10px;
    }

    img{
        width: 20px;
    }
`

export const SwiperCardBottom = styled.div`
    p{
        &:not(:first-child){
            margin-top: 1rem;
        }
    }
  
`