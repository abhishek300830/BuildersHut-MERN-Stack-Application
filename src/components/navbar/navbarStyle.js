import styled from "styled-components";

const navbar_color="#d1d1d1";
export const NavbarDiv=styled.div`

    div.main{
        margin-top: -1%;
        width: 100%;
        position: fixed;
        background-color: transparent;
        display: grid;
        grid-template-columns: 43% 15% 43%;

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
                margin-left: -28%;
                position: absolute;
                margin-top: 9%;
                transition: 1s;
            }
            img.hathoda{
                width: 7%;
                margin-left: -25%;

                position: absolute;
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

        div.right{
            div.theme{
                display: grid;
                grid-template-columns: 50% 50%;
                border: 2px solid gray;
                margin-left: 70%;
                margin-top: 3%;
                width: 20%;
                border-radius: 10px;
    
                div#sun_id{
                    padding: 5%;
                    cursor: pointer;
                    text-align: center;
                    border-bottom-left-radius: 8px;
                    border-top-left-radius: 8px;
                    transition: 0.5s;
                    background-color: #f8fa816d;
                    img{
                        width: 60%;
                        filter: drop-shadow(-3px 3px  #0000005b);
                    }
                }
                div#moon_id{
                    border-bottom-right-radius: 8px;
                    border-top-right-radius: 8px;
                    border-left: 2px solid gray;
                    padding: 5%;
                    transition: 0.5s;
                    cursor: pointer;
                    text-align: center;
                    img{
                        width: 60%;
                        filter: drop-shadow(5px 1px  white);
                    }
                }   
            }
        }
    }

    div.outlet{
        padding-top: 10%;
    }

    @media (max-width:1280px) {
        div.main{ }   
    }

     @media (max-width:820px) {
        div.main{
            grid-template-columns: 40% 20% 40%;
            
            div.right{
                div.theme{
                    margin-left: 60%;
                    margin-top: 5%;
                    width: 30%;
                    border-radius: 8px;
                    div#sun_id{
                        border-bottom-left-radius: 8px;
                        border-top-left-radius: 8px;
                    }
                    div#moon_id{
                        border-bottom-right-radius: 8px;
                        border-top-right-radius: 8px;
                    }
                }
            }
 
        }
        div.outlet{
            padding-top: 12%;
        }
    }

    @media (max-width:520px) {
        div.main{
            grid-template-columns: 32% 36% 32%;
            
            div.right{
                div.theme{
                    margin-left: 30%;
                    margin-top: 8%;
                    width: 60%;
                    border-radius: 5px;
                    div#sun_id{
                        border-bottom-left-radius: 5px;
                        border-top-left-radius: 5px;
                    }
                    div#moon_id{
                        border-bottom-right-radius: 5px;
                        border-top-right-radius: 5px;
                    }
                }
            }
        }

    } 
`;