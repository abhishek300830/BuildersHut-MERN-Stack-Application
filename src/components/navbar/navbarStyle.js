import styled from "styled-components";

const navbar_color="#d72f43";
export const NavbarDiv=styled.div`

    div.main{
        width: 100%;
        height: 5%;
        position: fixed;
        background-color: ${navbar_color};
        display: grid;
        grid-template-columns: 45% 10% 45%;
        border-bottom-right-radius:50px;
        border-bottom-left-radius:50px;

        div.mid{
            height: 100%;
            background-color: ${navbar_color};
            border-bottom-left-radius: 80px;
            border-bottom-right-radius: 80px;
            padding: 2%;

            img.logo{
                position: relative;
                width: 50%;
                margin-left: 25%;
                margin-top:0.5%;
                transition: 0.5s;
            }
            img.logo:hover{
                width: 45%;
                margin-left: 28%;
                cursor:pointer;
                margin-top: 0.5%;
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