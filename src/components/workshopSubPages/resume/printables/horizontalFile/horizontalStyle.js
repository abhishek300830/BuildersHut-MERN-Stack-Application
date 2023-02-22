import styled from "styled-components";

export const HorizontalPrevStyleDiv=styled.div`
    

    .page-y {
        width: 210mm;
        min-height: 297mm;
        max-height: 297mm;
        /* padding: 5mm; */
        margin: 10mm auto;
        border-radius: 5px;
        background: rgb(252, 252, 252);
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        
        .horizontalPage {
            /* border: 1px black solid; */
            background-color: white;
            position: relative;
            display: grid;
            grid-template-columns: 35% 64%;
            gap: 1%;

            .left-section{
                .addrs{
                    padding: 1%;
                    background-color: #272727;
                    color: white;
                    min-height: 150mm;
                    max-height: 150mm;
                    img{
                        width: 80%;
                        margin-left: 10%;
                    }

                    div{
                        display: grid;
                        grid-template-columns: 15% 85%;
                        align-items: center;
                        margin-top: -3%;

                        p{
                            margin-top: -4%;
                        }

                    }
                }
                .rest{
                    margin-top: 4%;

                    .skills{
                        min-height: 75mm;
                        max-height: 75mm;
                    }
                    .hobbies{
                        min-height: 50mm;
                        max-height: 50mm;
                        margin-top: 2%;
                    }
                    .hobbies,.skills{
                        background-color: #eae7e7;
                        padding: 2%; 
                        div{
                            display: grid;
                            grid-template-columns: auto auto;
                            span{
                                color: white;
                                background-color: #272727;
                                margin-bottom: 2%;
                                padding: 2%;
                                margin-right: 2%;
                                border-radius: 5px;
                            }
                        }
                    }

                }

            }

            .right-section{
                .bio{
                    border:1px solid transparent;
                    background-color: #eae7e7;
                    padding: 1%;
                    min-height: 75mm;
                    max-height: 75mm;
                    color: #363535;
                    p{
                        margin-top: -3%;
                    }   
                    div{
                        display: inline;
                    }
                    h3,h1,b{
                        color: black;
                    }
                   
                }
                .qualifications{
                    border: 1px solid transparent;
                    padding: 0% 1%;
                    min-height: 65mm;
                    max-height: 65mm;
                    color: #4b4b4b;
                    h3{
                        color: black;
                    }
                    table{

                        tr{
                            border: 1px solid black;
    
                        }
                        td{
                        /* border: 1px solid black; */
                            
                        }
                    }
                }
                .projects{
                    border: 1px solid transparent;
                    padding: 0% 1%;
                    min-height: 60mm;
                    max-height: 60mm;
                    color: #4b4b4b;

                    li{
                        margin-left: 5%;
                    }
                    h3{
                        color: black;
                    }
                }
                .acheivements{
                    border: 1px solid transparent;
                    padding: 0% 1%;
                    min-height: 40mm;
                    max-height: 40mm;
                    color: #4b4b4b;
                    h3{
                        color: black;
                    }
                    li{
                        margin-left: 5%;
                    }

                }
                .extra{
                    border: 1px solid transparent;
                    padding:0% 1%;
                    min-height: 40mm;
                    max-height: 40mm;
                    color: #4b4b4b;
                    margin-top: 1%;
                    li{
                        margin-left: 5%;
                    }
                    h3{
                        color: black;
                    }

                }
            }

        }                                                                                                           
    }

    @page {
        size: A4;
        margin: 0;
    }
    @media print {
        html, body {
            width: 210mm;
            height: 297mm;        
        }
        .page-y {
            margin: 0;
            border: initial;
            border-radius: initial;
            width: initial;
            min-height: initial;
            box-shadow: initial;
            background: initial;
            page-break-after: always;
        }
    } 
`