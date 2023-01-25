import styled from "styled-components";

export const NotFoundDiv=styled.div`
    animation:notFound-main 1s linear 0s 1;
    @keyframes  notFound-main{
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }

    text-align: center;
    img{
        width: 30%;
        padding: 0%;
        animation: robo-anim 8s ease-in-out 0.5s infinite;
    }  
    @keyframes robo-anim {
        0%{
            padding-top: 0%;
        }
        20%{
            padding-top: 2%;
        }
        40%{
            padding-top: 0%;
        }
        60%{
            padding-top: 2%;
        }
        100%{
            padding-top: 0%;
        }
    }
    
    h1{
        color: #50642a;
        font-size: 2.5vw;
        b{
            background-color: #576b30;
            padding: 2%;
            color: #c4ea7c;
            border-radius: 20px;
        }
    }

    @media (max-width: 820px){
        margin-top: 20%;
        img{
            width: 70%;
        }
        h1{
            font-size: 4vw;
        }
    }
    
    @media (max-width: 520px){
        margin-top: 30%;
        img{
            width: 80%;
        }
        h1{
            b{
                border-radius: 10px;
            }
            font-size: 6vw;
        }
    }

`;