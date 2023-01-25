import styled from "styled-components";

export const WorkshopDiv=styled.div`

    animation: work-anim 0.6s ease-out 0s 1;    
    @keyframes work-anim {
        0%{
            opacity: 0;
            margin-top: 50%;
        }    
        100%{
            opacity: 1;
            margin-top: 0%;

        }
    }
    margin-top: -5%;
    h1{
        font-size: 4vw;
        /* text-align: center; */
    }

`;