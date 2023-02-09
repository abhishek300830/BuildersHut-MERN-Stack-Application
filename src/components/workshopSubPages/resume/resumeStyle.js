import styled from "styled-components";

export const ResumeStyleDiv=styled.div`
    margin-top: -3%;
    img.header{
        width: 20%;
        position: absolute;
        top: 2%;
        left: 2%;
    }
    section.rMain{
        display: grid;
        grid-template-columns: 60% 40%;
        border: 1px solid black;

        height: 40vw;
        div.left{

        }
        div.right{
            padding: 5%;
            position: relative;
            background-color: #a89f9f90;

            div.a4{
                width: 70%;
                margin: auto;
                height: 98.994%;
                background-color: #3434349c;
            }
        }
    }


    /* media queries ####### */
    @media (max-width:1280px){
        
    }
    @media (max-width:820px){
        img.header{
            width: 30%;
            position: absolute;
            top: 0.3%;
            left: 1%;
        }
    }
    @media (max-width:520px){
        img.header{
            width: 70%;
            position: relative;
            margin-left: 12%;
            margin-top: -5%;
        }
    }
`;