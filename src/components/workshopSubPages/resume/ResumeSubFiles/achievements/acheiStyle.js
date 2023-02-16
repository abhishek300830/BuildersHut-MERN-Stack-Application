import styled from "styled-components";

export const AcheivStyleDiv=styled.div`
    section.acheiv{
        border: 1px solid black;
        padding: 2%;
        margin-top: 5%;
        position: relative;
        border-radius: 5px;
        h1{
            font-size: 1.3vw;
            color:black;
            position: absolute;
            top: -35px;
            padding: 0% 1%;
            border-radius: 5px;
            color: #454343ff;
        }
    }

    @media (max-width: 1280px) {

        section.acheiv{
            h1{
                top:-25px;
            }
        }
    }

    @media (max-width: 820px) {
        
        section.acheiv{
            margin-top: 8%;
            padding: 3%;
            h1{
                font-size: 2.5vw;
                top:-30px;
            }
        }
    }

    @media (max-width: 520px) {

        section.acheiv{
            margin-top: 10%;
            padding: 4%;

            h1{
                font-size: 4.5vw;
                top:-30px;
            }
        }
    }
`