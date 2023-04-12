import styled from "styled-components";

export const ChartStyleDiv = styled.div`
  img.header {
    width: 20%;
    position: absolute;
    top: 2%;
    left: 2%;
  }

  .selectCsv{
    border: 2px solid black;
    border-radius: 5px;
    padding:1% 2%;
    width: 30%;
    margin: auto;
    text-align: center;
    
    p{
        color: #3f3f3f;
    }
    input{
      #file-upload-button{
        background: black !important;

      }
       }
    .selection{
      width: fit-content;
      margin: auto;
      background: orange;
      padding: 1%;
      margin-top: 10%;
       border-radius: 5px;

       

       .example{
        border: 2px solid black;
        background-color: black;
       }
    }
  }

  /* media queries ####### */
  @media (max-width: 1280px) {
  }
  @media (max-width: 820px) {
    img.header {
      width: 30%;
      position: absolute;
      top: 0.3%;
      left: 1%;
    }
  }
  @media (max-width: 520px) {
    img.header {
      width: 70%;
      position: relative;
      margin-left: 12%;
      margin-top: -5%;
    }
  }
`;
