import styled from "styled-components";

export const WorkshopDiv=styled.div`
    
    animation: work-anim 0.6s ease-out 0s 1 normal;  
    position: relative;
    /* border-top:5px solid #68746992; */
    margin-top: -2%;
    
    @keyframes work-anim {
        0%{
            opacity: 0;
            margin-top: 50%;
        }    
        100%{
            opacity: 1;
            margin-top: -2%;
        }
    }
    padding-bottom: 4%;


    /* images  */
    img.crack{
        position: fixed;
        z-index: 11;
        width: 5%;
        top: -1%;
        left: 14.5%;
        
    }
    img.builder_bg{
        position: fixed;
        z-index: 0;
        width: 40%;
        right: 0;
        bottom: 0;
    }
    img.workshop-img{
        position: fixed;
        z-index: 10;
        width: 25%;
        top: 3%;
        left: -25.5%;
        animation: hanging-anim 3s linear 0s infinite alternate;
    }
    @keyframes hanging-anim {
        0%{
            transform: rotate(10deg);
            margin-left: 29%;
        }
        60%{
            transform: rotate(0deg);
            margin-left: 30%;

        }
        100%{
            transform: rotate(-7deg);
            margin-left: 31%;
        }
    }




    div.scroll-up{
        /* border: 2px solid black; */
        position: fixed;
        height: 55%;
        padding-bottom: 5%;
        overflow: auto;
        /* background-color: #68746992; */
        padding-top: 10%;

    }

    div.work-main{
        position: relative;
        display: grid;
        grid-template-columns: 20% 20% 20%;
        justify-content: left;
        column-gap: 3%;
        z-index: 5;
    }

    
    @media (max-width:1280px ){
        
    }

    @media (max-width:820px ){
       
        img.crack{
            width: 10%;
            /* top: -1%; */
            left: 15%;
        
        }
        img.workshop-img{
            width: 40%;
            top: 3.5%;
            left: -30%;
        }
        img.builder_bg{
            width: 80%;
        }
        @keyframes hanging-anim {
            0%{
                transform: rotate(10deg);
                margin-left: 28%;
            }
            50%{
                transform: rotate(0deg);
                margin-left: 30%;

            }
            100%{
                transform: rotate(-7deg);
                margin-left: 32%;
            }
        }  
        
        div.scroll-up{
            /* border: 2px solid black; */
            height: 80%;
            padding-top: 20%;

        }

        
        div.work-main{
            grid-template-columns: 40% 40%;
        
        }
    }
    
    
    @media (max-width:520px ){
        img.crack{
            width: 15%;
            left: 15%;
            top:2% ;
        }
        img.workshop-img{
            width: 50%;
            top: 5%;
            left: -32%;
        }
        img.builder_bg{
            width: 90%;
        }
        
        div.scroll-up{
            /* border: 2px solid black; */
            height: 78%;
            padding-top: 15%;

        }

        div.work-main{
            grid-template-columns: 80% ;
        }
    }
`;