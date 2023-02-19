import styled from "styled-components";

export const HorizontalPrevStyleDiv=styled.div`
    

    .page-y {
        width: 210mm;
        min-height: 297mm;
        max-height: 297mm;
        padding: 5mm;
        margin: 10mm auto;
        border: 1px #D3D3D3 solid;
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
                    p{
                        margin-top: -4%;
                    }
                }
                .rest{
                    margin-top: 4%;

                    .skills{
                        background-color: #eae7e7;
                        padding: 2%;
                        min-height: 75mm;
                        max-height: 75mm;

                    }
                    .hobbies{
                        background-color: #eae7e7;
                        padding: 2%; 
                        min-height: 50mm;
                        max-height: 50mm;
                        margin-top: 2%;

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


                    p{
                        margin-top: -3%;
                        color: #4b4b4b;
                    }   
                   
                }
                .qualifications{
                    border: 1px solid transparent;
                    padding: 0% 1%;
                    min-height: 65mm;
                    max-height: 65mm;
                }
                .projects{
                    border: 1px solid transparent;
                    padding: 0% 1%;
                    min-height: 60mm;
                    max-height: 60mm;
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
                    margin-top: 1%;

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