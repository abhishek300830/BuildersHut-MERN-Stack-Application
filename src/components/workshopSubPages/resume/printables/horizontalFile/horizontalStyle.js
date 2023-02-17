import styled from "styled-components";

export const HorizontalPrevStyleDiv=styled.div`
    

    .page-y {
        width: 210mm;
        min-height: 297mm;
        padding: 5mm;
        margin: 10mm auto;
        border: 1px #D3D3D3 solid;
        border-radius: 5px;
        background: rgb(252, 252, 252);
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        
        .horizontalPage {
            border: 1px black solid;
            background-color: white;
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