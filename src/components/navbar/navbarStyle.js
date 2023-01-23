import styled from "styled-components";

const navbar_color="#d1d1d1";
export const NavbarDiv=styled.div`

    div.main{
        margin-top: -1%;
        width: 100%;
        height: 5%;
        position: fixed;
        background-color: transparent;
        display: grid;
        grid-template-columns: 43% 15% 43%;
        /* border-bottom-right-radius:50px; */
        /* border-bottom-left-radius:50px; */

        div.mid{
            background-color: ${navbar_color};
            padding: 2%;
            margin-top: 5%;
            position: relative;
            text-align: center;
            border-bottom-left-radius: 200px;
            border-bottom-right-radius: 200px;
            img.hut2{
                width: 45%;
                transition: 1s;
            }
            img.aari{
                width: 15%;
                position: absolute;
                margin-left: -27%;
                margin-top: 9%;
                transition: 1s;
            }
            img.hathoda{
                width: 7%;
                position: absolute;
                margin-left: -24%;  
                margin-top: 5%;
                transition: 1s;
            }
        }
        div.mid:hover{
            cursor: pointer;

            img.aari{
                width: 17%;
                margin-left: -15%;
                transform: rotate(60deg);
            }
            img.hathoda{
                width: 9%;
                margin-left: -40%;
                transform: rotate(30deg);
            }
        }

    }

    @media (max-width:1280px) {
        div.main{
            height: 2%;
            div.mid{
                img.logo{
                    width: 46%;
                    margin-left: 24%;
                }               
                img.logo:hover{
                    width: 50%;
                    margin-left: 25%;
                } 
            }
    }
    }

     @media (max-width:820px) {
        div.main{
            grid-template-columns: 45% 10% 45%;
           
            div.mid{
                img.logo{
                    width: 60%;
                    margin-left: 20%;
                    margin-top: 1%;
                }
                img.logo:hover{
                    width: 68%;
                    margin-left: 14%;
                }
            }

        }

    }

    @media (max-width:520px) {
       

        div.main{
            height: 3%;
            grid-template-columns: 42% 16% 42%;
            div.mid{
                img.logo{
                    width: 65%;
                    margin-left: 17%;
                    margin-top: 1%;
                }
                img.logo:hover{
                    width: 74%;
                    margin-left: 13%;
                }
            }
        }

    } 
`;