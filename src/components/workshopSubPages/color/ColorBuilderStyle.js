import styled from "styled-components";

export const ColorContainer = styled.div`
  margin-top: -155px;
  height: 100vh;
  /* background-color: ${({ color }) => {
    return color;
  }}; */
  background-image: linear-gradient(to right, #00ff40, #069cf9);
  color: white;
  .colorPreview {
    margin-top: 20px;
    padding: 20px;
    font-size: 50px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.6);
    color: white;
    font-weight: bolder;
    /* -webkit-text-stroke: 3px #ff6a00; */
    /* -webkit-text-stroke: 3px #00efd9; */
  }

  h1 {
    margin-top: 100px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    text-align: center;
    /* letter-spacing: 3px; */
    font-size: 50px;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.6);
  }
  h3 {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-size: 20px;
    text-align: center;
    margin-top: 20px;
    font-weight: 400;
  }
  .colorGenerator {
    .iconButtons {
      display: flex;
      justify-content: center;
      gap: 5px;
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: 40px;
        padding: 5px;
        border-radius: 50%;
        transition: all 0.5s;
        svg {
          font-size: 30px;
        }
        &:hover {
          scale: 1.1;
          color: black;
          background-color: #d1d1d1;
        }
      }
    }
    .chooseColors {
      margin-top: 10px;
      display: flex;
      justify-content: center;
      gap: 40px;
      input[type="color"] {
        padding: 0;
        appearance: none;
        border: 1px solid transparent;
        overflow: hidden;
        height: 40px;
        width: 120px;
        border-radius: 20px;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.3);

        //input Hover
        transition: all 0.3s;
        &:hover {
          scale: 1.1;
        }
      }
      input[type="color"]::-webkit-color-swatch-wrapper {
        padding: 0;
      }
      input[type="color"]::-webkit-color-swatch {
        border: none;
      }
    }
    .generateButton {
      display: flex;
      justify-content: center;
      margin-top: 30px;

      button {
        color: white;
        /* padding: 10px; */
        font-weight: bolder;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        width: 150px;
        border-radius: 30px;
        background-color: #00c9b7;
        border: none;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.3);
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
          scale: 1.1;
        }
      }
    }
  }
  .cssCode {
    text-align: center;
    .cssHeading {
      margin-top: 20px;
      color: white;
      margin-bottom: 50px;
      font-size: 20px;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;
      font-weight: 400;
    }
    .cssCodeBackground {
      padding: 40px;
      letter-spacing: 2px;
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      font-family: monospace;
      font-size: 15px;
    }
  }
`;
