import styled from "styled-components";
// color: #454343ff;
// background-color: #e0dfdf;
export const AcheivStyleDiv=styled.div`
    background-color: #e0dfdf;
    section.acheiv{
        padding:5% 2%;
        margin-top: 5%;
        position: relative;
        border-radius: 5px;
        
        h4{
            background-color: #d74846;
            padding:1% 2%;
            position: absolute;
            border-radius: 8px;
            color: #e7e7e7;
            margin-left: 33%;
            margin-top: -2%;
        }
        h3{
            text-align: center;
            color: #454343ff;
            margin-top: -5%;
        }
        .fields{
            margin-top: 3%;
            text-align: center;
        }
        .fields2{
            margin-top:8%;

        }

        .dyn-data{
            text-align: center;
        }

        
    }

    @media (max-width: 1280px) {

        section.acheiv{
            /* h1{
                top:-25px;
            } */
        }
    }

    @media (max-width: 820px) {
        
        section.acheiv{
            margin-top: 8%;
            padding: 3%;
            h4{
                margin-left: 30%;
                margin-top: -2%;
            }
            /* h1{
                font-size: 2.5vw;
                top:-30px;
            } */
        }
    }

    @media (max-width: 520px) {

        section.acheiv{
            margin-top: 10%;
            padding: 4%;
            h4{
                margin-left: 11%;
                margin-top: -2%;
            }
            .fields{
                margin-top: 10%;
            }
            .fields2{
                margin-top:14%;
            }

            /* h1{
                font-size: 4.5vw;
                top:-30px;
            } */
        }
    }
`