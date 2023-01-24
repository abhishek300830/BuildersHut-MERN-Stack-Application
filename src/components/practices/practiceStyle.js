import styled from "styled-components";

export const PractDiv= styled.div`
    
    div.theme{
        display: grid;
        grid-template-columns: 50% 50%;
        border: 2px solid gray;
        margin: auto;
        margin-top: 5%;
        height: 100px;
        width: 20%;
        border-radius: 20px;

        div#sun_id{
            padding: 5%;
            cursor: pointer;
            text-align: center;
            border-bottom-left-radius: 20px;
            border-top-left-radius: 20px;
            transition: 0.5s;
            background-color: #f8fa816d;
            img{
                width: 60%;
                filter: drop-shadow(-5px -2px  white);
            }
        }
        div#moon_id{
            border-bottom-right-radius: 20px;
            border-top-right-radius: 20px;
            border-left: 2px solid gray;
            padding: 5%;
            transition: 0.5s;
            cursor: pointer;
            text-align: center;
            img{
                width: 60%;
                filter: drop-shadow(8px 1px  white);
            }
        }
    }
    
`