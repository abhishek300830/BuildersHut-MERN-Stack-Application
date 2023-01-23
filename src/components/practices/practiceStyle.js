import styled from "styled-components";

export const PractDiv= styled.div`
    
    div{
        border: 1px solid black;
        width: 30%;
        padding: 5%;
        margin: auto;
        margin-top: 5%;
        position: relative;
        img.hut2{

        }
        img.aari{
            position: absolute;
            margin-left: -26.5%;
            margin-top: 7.6%;
            transition: 1s;
        }
        img.hathoda{
            position: absolute;
            margin-left: -21.5%;  
            margin-top: 2.5%;
            transition: 1s;
        }
    }

    div:hover{
        border: 2px solid red;
        img.aari{
            margin-left: -15%;
            transform: rotate(60deg);
        }
        img.hathoda{
            margin-left: -37%;
            transform: rotate(30deg);
        }
    }
    
`