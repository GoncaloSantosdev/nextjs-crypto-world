import styled from "styled-components";

export const CoinsListContentStyles = styled.div`
    margin: 5rem 0;
`

export const CoinsListCtaStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media screen and (min-width: 960px){
        flex-direction: row;
        justify-content: space-between;
    }

    input{
        margin-top: 2rem;

        @media screen and (min-width: 960px){
            margin-top: 0rem;
        }
    }
`

export const ScrollTable = styled.div`
    overflow-x:auto;
`
export const CoinsListTableStyles = styled.table`
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

    th, td{
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

        div{
            display: flex;
            align-items: center;

            img{
                width: 20px;
                margin-right: 10px;
            }
        }
    }
`