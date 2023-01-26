import styled from "styled-components";

export const  FooterDiv=styled.div`
    background-color:#6d8a4eb0;
    padding: 4%;
    text-align: center;

    img{
        width: 5%;
    }
    h2{
        text-align: center;
        font-size: 2vw;
    }
    p{
        span{
            font-size: 1.5vw;
            background: #171717df;
            padding: 1%;
            border-radius: 10px;
            color: white;
        }
        i{
            transition: 0.3s;
            margin-left: 1%;
            font-size: 1.8vw;
            cursor: pointer;
        }
        i:hover{
            text-shadow: 0px 0px 2px black;
        }
    }

    @media (max-width: 1280px) {
        
    }

    @media (max-width: 820px) {
        img{
            width: 8%;
        }
        h2{
            text-align: center;
            font-size: 2.5vw;
        }
        p{
            span{
                font-size: 2.5vw;
                padding: 1.2%;
                border-radius: 8px;
            }
            i{
                margin-left: 2%;
                font-size: 3vw;
            }
         }
    }

    @media (max-width: 520px) {
        img{
            width: 12%;
        }
        h2{
            text-align: center;
            font-size: 5.5vw;
        }
        p{
            span{
                font-size: 3.8vw;
                border-radius: 5px;
            }
            i{
                font-size: 5vw;
            }
         }
    }

`;