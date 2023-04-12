import styled from "styled-components";

export const ChartStyleDiv = styled.div`
  padding-top: 2%;
  border: 1px solid black;
  position: fixed;
  width: 100%;
  overflow: auto;
  top: 15%;
  height: 78%;
  padding-bottom: 2%;

  img.header {
    width: 20%;
    position: absolute;
    top: 2%;
    left: 2%;
  }
  .textFieldContainer {
    display: grid;
    grid-template-columns: 50%;
    justify-content: center;

    .selectFile {
      border: 2px solid black;
      border-radius: 5px;
      padding: 1% 2%;
      width: 80%;
      margin-left: 10%;
      text-align: center;
      min-height: 400px;
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
      max-height: 400px;
      overflow: auto;
      width: 80%;
      padding: 10px;
      margin-left: 8%;
      border: 1px solid black;
      border-radius: 10px;
      background-color: #fad2d2;
      // Animation Attribute Appears
      animation: AttributeAppears 1s ease-out 0s 1;
      .warning {
        color: red;
        font-size: small;
      }
      .inputAttribute {
        padding: 10px;
        margin-bottom: 10px;
        display: grid;
        justify-content: center;
        grid-template-columns: 40% 40%;

        gap: 1%;
        div {
          margin: 3px;
          background-color: white;
          border-radius: 5%;
          border: 1px solid black;
          padding: 10px;
        }
      }
    }
    @keyframes AttributeAppears {
      from {
        scale: 0;
      }
      to {
        scale: 1;
      }
    }
  }

  /* media queries ####### */
  @media (max-width: 1280px) {
  }
  @media (max-width: 820px) {
    top: 10%;
    height: 86%;
    img.header {
      width: 30%;
      position: absolute;
      top: 0.3%;
      left: 1%;
    }

    .textFieldContainer {
      display: block;
    }
  }
  @media (max-width: 520px) {
    top: 12%;
    height: 85%;
    img.header {
      width: 70%;
      position: relative;
      margin-left: 12%;
      margin-top: -5%;
    }
  }
`;
