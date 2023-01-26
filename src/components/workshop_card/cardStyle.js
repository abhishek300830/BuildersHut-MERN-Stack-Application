import styled from "styled-components";

const color3="#a4ba7681"
export const CardDiv=styled.div`

    .card-main{
        user-select: none;
        width: 90%;
        padding: 5% 0% 0% 0%;
        text-align: center;
        margin-bottom: 20%;
        box-shadow: 10px 10px 3px ${color3};
        border: 5px solid ${color3};
        background-color: #d1d1d1;
        margin-left: 10%;
        overflow: hidden;
    
        position: relative;
        cursor: pointer;
        img{
            width: 40%;
            height: 40%;
        }
    
        div{
            margin-top: 10%;
            padding: 3% 0% 5% 0%;
            h2{
                font-size: 1.3vw;
                color: #153e1b;
                background-color: ${color3};
                padding: 2%;
                width: 80%;
                text-align: center;
                margin: auto;
                border-radius: 10px;
            }
            p{
                font-size: 0.8vw;
                color: #365f37;
            }
        }
        
        div.upward{
            position: absolute;
            background-color: #a4ba76fa;
            width: 100%;
            bottom: 0;
            height: 80%;
            display:none;
            transition: 0.4s;
            animation: up-anim 0.8s ease-out 0s 1;

            ul{
                list-style-type: none;
                /* border: 1px solid black; */
                text-align: left;

                li{
                    margin-top: 10%;
                    display: grid;
                    grid-template-columns: 40% 60%;
                    span{
                        font-size: 1.2vw;
                         padding-top: 10%;
                         color: #442c0f ;
                         font-weight: bold;
                    } 
                    
                    button{
                        position: relative;
                        margin-left: 5%;
                        width: 70%;
                        padding: 3%;
                        font-size: 1vw;
                        font-weight: bold;
                        border-radius: 5px;
                        background:linear-gradient(#7b6a48,#4c3304);
                        border: 0;
                        box-shadow: 1px 1px 3px #3d3d3d;
                        cursor: pointer;
                        text-align: right;
                        transition: 0.4s;
                        color: #c1bdbd;
                        img{
                            height: 180%;
                            width: 25%;
                            opacity: 0.8;
                            left: 10%;
                            top: -10%;
                            position: absolute;
                            transform: rotate(-70deg);
                            filter: drop-shadow(-2px 2px 5px black);
                            transition: 0.4s;
                        }
                    }

                    button:hover{
                        box-shadow: -2px 2px 5px transparent;

                        img{                            
                            transform: rotate(-50deg);
                        }
                    }
                
                }
            }

        }

        @keyframes up-anim {
            0%{
                opacity: 1;
                bottom: 0%;
                height: 5%;
                color: transparent;
            }
            100%{
                height: 80%;
                opacity: 1;
                color: #153e1b;
            }
        }
    }

    .card-main:hover {
        div.upward{
            display: block;
        }
    }

    @media (max-width:1280px) {
        
    }

    @media (max-width:820px) {
        .card-main{
            img{
                width: 60%;
                height: 46%;
    
            }
            div{
                h2{
                    font-size: 3vw;
                }
                p{
                    font-size: 1.8vw;
                }
            }

            div.upward{
                ul{
                    li{
                        justify-content: space-between;
                        margin-top: 10%;
                        span{
                            font-size: 2.6vw;
                        }
                        button{
                            width: 80%;
                            padding: 5%;
                            font-size: 2.3vw;
                        }
                    }
                }
            }
        }
    }

    @media (max-width:520px) {

        .card-main{
            img{
                width: 60%;
                height: 48%;
            }
            div{
                h2{
                    font-size: 6vw;
                }
                p{
                    font-size: 3.5vw;
                }
            }

            div.upward{
                ul{
                    li{
                        justify-content: space-between;
                        margin-top: 10%;
                        span{
                            font-size: 4.6vw;
                        }
                        button{
                            width: 80%;
                            padding: 5%;
                            font-size: 3.5vw;
                        }
                    }
                }
            }
        }

    }
`