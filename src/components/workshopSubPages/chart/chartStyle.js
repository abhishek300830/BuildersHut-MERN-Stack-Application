import styled from "styled-components";

export const ChartStyleDiv = styled.div`
  border: 1px solid black;
  position: fixed;
  width: 100%;
  overflow: auto;
  top: 15%;
  height: 85%;

  img.header {
    width: 20%;
    position: absolute;
    top: 2%;
    left: 2%;
  }
  .textFieldContainer {
    .selectFile {
      border: 2px solid black;
      border-radius: 5px;
      padding: 1% 2%;
      width: 30%;
      margin: auto;
      text-align: center;

      p {
        color: #3f3f3f;
      }
      .selection {
        width: fit-content;
        margin: auto;
        background: orange;
        padding: 1%;
        margin-top: 10%;
        border-radius: 5px;
      }
    }
    .selectAttribute {
      width: 40%;
      text-align: center;
      height: auto;
      margin: auto;
      margin-top: 10px;
      border: 1px solid black;
      border-radius: 10px;
      background-color: #fad2d2;
      .warning {
        color: red;
        font-size: small;
      }
      .inputAttribute {
        padding: 10px;
        display: grid;
        justify-content: center;
        grid-template-columns: 40% 40%;

        gap: 1%;
        div {
          margin: 5px;
          background-color: white;
          border-radius: 5%;

          border: 1px solid black;
          padding: 10px;
        }
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
