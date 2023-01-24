import styled from "styled-components";


export const HomeStyle=styled.div`
    div.home-main{
        display: grid;
        grid-template-columns: 50% 50%;
        height:30vw ;/*  ######*/
        /* border: 1px solid red; */
        
        
        /* builders div  */
        div.builder-div{
            padding: 4%;
            text-align: center;
            position: relative;
            height: 100%;
            /* border: 1px solid red; */
            img.b1{
                position: absolute;
                z-index: 10;
                width: 55%;
                left: 20%;
                top: 0%;
                /* border: 1px solid black; */
                animation: build1 20s linear 0s infinite;
                transition: 0.5s;
            }
            img.b2{
                /* border: 1px solid black; */
                position: absolute;
                width: 25%;
                left: 10%;
                top: 20%;
                opacity: 0.5;
                animation: build2 20s linear 0s infinite;
                transition: 0.5s;
            }
            img.b3{
                /* border: 1px solid black; */
                position: absolute;
                width: 25%;
                top: 20%;
                right: 10%;
                opacity: 0.5;
                animation: build3 20s linear 0s infinite;
                transition: 0.5s;
            }

            img.b1:hover,img.b2:hover,img.b3:hover{
                filter: drop-shadow(2px 2px 10px #6e883c);
            }

            /* animations  */

            @keyframes build1 {
                0%{
                    top: 0%;
                    width: 55%;
                    left: 20%;
                    opacity: 1;
                }   
                28%{
                    top: 0%;
                    width: 55%;
                    left: 20%;
                    opacity: 1;
                }
                /* halt  */
                33%{
                     left: 60%; 
                     width: 25%;
                     opacity: 0.5;
                     top : 20%;
                     z-index: 2;
                }   
                60%{
                     left: 60%; 
                     width: 25%;
                     opacity: 0.5;
                     top : 20%;
                     z-index: 2;

                }   
                /* halt */

                66%{
                    width: 25%;
                    left: 10%;
                    top: 20%;
                    opacity: 0.5;
                    z-index: 2;

                }
                95%{
                    width: 25%;
                    left: 10%;
                    top: 20%;
                    opacity: 0.5;
                    z-index: 2;
                }   

                100%{
                    width: 55%;
                    left: 20%;
                    opacity: 1;
                    top: 0%;
                }       
            }

            @keyframes build2 {
                0%{
                    width: 25%;
                    left: 10%;
                    top: 20%;
                    z-index: 2;

                }   
                28%{
                    width: 25%;
                    left: 10%;
                    top: 20%;
                    z-index: 2;
                    opacity: 0.4;
                }
                /* halt  */
                33%{
                    width: 55%;
                    left: 20%;
                    top: 0%;
                    opacity: 1;
                    z-index: 10;

                }   
                60%{
                    width: 55%;
                    left: 20%;
                    top: 0%;
                    opacity: 1;
                    z-index: 10;
                }   
                /* halt */

                66%{
                    width: 25%;
                    top: 20%;
                    left: 60%;
                    opacity: 0.5;
                    z-index: 2;
                }
                95%{
                    width: 25%;
                    top: 20%;
                    left: 60%;
                    opacity: 0.5;
                }   

                /* halt  */
                100%{
                    width: 25%;
                    left: 10%;
                    top: 20%;
                    opacity: 0.4;
                }       
            }
            
            @keyframes build3 {
                0%{
                    width: 25%;
                    top: 20%;
                    right: 10%;
                    opacity: 0.5;
                }   
                28%{
                    width: 25%;
                    top: 20%;
                    right: 10%;
                    opacity: 0.5;

                }
                /* halt  */
                33%{
                    width: 25%;
                    right:60%;
                    top: 20%;
                    opacity: 0.5;
                    z-index: 2;

                }   
                60%{
                    width: 25%;
                    right: 60%;
                    top: 20%;
                    opacity: 0.5;
                    z-index: 2;
                }   
                /* halt */

                66%{
                    top: 0%;
                    width: 55%;
                    right: 17%;
                    opacity: 1;
                    z-index: 10;
                }
                95%{
                    top: 0%;
                    width: 55%;
                    right: 17%;
                    opacity: 1;
                    z-index: 10;
                }   

                /* halt  */
                100%{
                    width: 25%;
                    top: 20%;
                    right: 10%;
                    opacity: 0.5;
                    z-index: 2;
                }       
            }
        }

        /* text written div  */
        div.text-div{
            height: 100%;
            /* border: 1px solid red; */
            h2{
                font-size: 2vw;
                color: #6e883c;
                b{
                    font-size: 4vw;
                }
            }

            .t1{
                color: #91ac5ad4;
                display: grid;
                grid-template-columns: 10% 90%;
                font-size: 2vw;
                margin-top: 10%;
                .tt1{
                    padding-top: 15%;
                }
                .tt2{
                    b{
                        font-size: 5vw;
                    }
                }
            }

            div.workshop{
                display: grid;
                grid-template-columns: 40% 60%;
                h1{
                    font-size: 1.6vw;
                    background-color: #d1d1d1;
                    text-align: center;
                    padding: 4%;
                    border-radius: 20px;
                    color: #91ac5ad4;
                }
                img{
                    width: 80%;
                }
            }

        }
    }

    div.explore{
        /* border: 1px solid black; */
        width: 8%;
        margin: auto;
        text-align: center;
        color: #6e883c;
        /* border: 5px solid #84f16634; */
        border-radius: 10px;
        /* background-color: #4d7f3f5c; */
        h4{
            font-size: 1.2vw;
            margin-top: 0%;
        }
        img{
            margin-top: -12%;
            width: 40%;
            filter: drop-shadow(2px 2px #315b26cd);
            transition: 0.3s;
            animation: explore-1 5s linear 0s infinite;
        }
        img:hover{
            width: 43%;
            cursor: pointer;
        }
        @keyframes explore-1 {
            0%{
                margin-top: -12%;
            }
            24%{
                margin-top: -12%;
            }

            25%{
                margin-top: -5%;
            }
            30%{
                margin-top: -12%;
            }
            35%{
                margin-top: -5%;
            }
            40%{
                margin-top: -12%;
            }
            100%{
                margin-top: -12%;
            }
        }
    }

    @media (max-width: 1280px) {
        div.home-main{
            height: 40vw;
            padding-top: 5%;

            div.builder-div{
                height: 100%;
            }
        }
    }

    @media (max-width: 820px) {
        div.home-main{
            height: 120vw;
            padding-top: 5%;
            display: block;
            padding-top: 0;

            div.builder-div{
                height: 45%;
            }

            div.text-div{
                height: 45%;

                h2{
                    font-size: 3vw;
                    /* border: 1px solid black; */
                    /* width: 80%; */
                    /* margin-left: 20%; */
                    text-align: center;
                    b{
                        font-size:6vw;
                    }
                }

                .t1{
                    grid-template-columns: 20% 80%;
                    font-size: 4vw;
                    margin-top:5%;
                    /* border: 1px solid black; */
                    
                    .tt1{
                        padding-top: 0%;
                        text-align: right;
                    }
                    .tt2{
                        /* border: 1px solid black; */
                        b{
                            font-size: 9vw;
                        }
                    }
                }

                div.workshop{
                    display: grid;
                    margin-top: 2%;
                    grid-template-columns: 40% 50%;
                    align-items: center;
                    justify-content: center;
                    h1{
                        font-size: 3vw;
                        width: 80%;
                        margin-left: 20%;
                    }
                    img{
                        margin-left: 10%;
                        width: 80%;
                        
                    }   
                }

            }

        }

        div.explore{
            /* border: 1px solid black; */
            width: 10%;
            margin-top: -10%;
            h4{
                font-size: 1.8vw;
            }
            img{
                width: 45%;
            }
            img:hover{
                width: 48%;
            }
        }
    }

    @media (max-width: 520px) {
        div.home-main{
            height: 140vw;
            padding-top: 10%;

            div.builder-div{
                height: 45%;
            }

            div.text-div{
                height: 50%;

                h2{
                    font-size: 3vw;
                    /* border: 1px solid black; */
                    /* width: 80%; */
                    /* margin-left: 20%; */
                    text-align: center;
                    b{
                        font-size:7vw;
                    }
                }

                .t1{
                    grid-template-columns: 12% 87%;
                    font-size: 5vw;
                    margin-top:5%;
                 
                    .tt2{
                        b{
                            font-size: 11vw;
                        }
                    }
                }

                div.workshop{
                    display: block;
                    margin-top: 2%;
                    grid-template-columns: 40% 50%;
                    h1{
                        font-size: 4vw;
                        width: 80%;
                        padding: 2%;
                        margin-left:5%;
                    }
                    img{
                        margin-left: 5%;
                        width: 70%;
                    }   
                    
                }
            }

        }

        div.explore{
            /* border: 1px solid black; */
            width: 15%;
            margin-top: -4%;
            h4{
                font-size: 3vw;
            }
        }

    }
`;