import styled from "styled-components";

export const StepsDiv = styled.div`
  .print-btn {
    padding: 2% 4%;
    border-radius: 5px;
    position: absolute;
    margin-left: 40%;
    width: 20%;
    margin-top: 2%;
    background-color: #81ee1d;
    cursor: pointer;
    box-shadow: 1px 1px 4px black;
    transition: 0.1s;
    span {
      position: relative;
      font-weight: bold;
      z-index: 5;
    }
    div {
      z-index: 4;
      position: absolute;
      opacity: 0.7;
      background-color: #dcf87e;
      width: 96%;
      border-radius: 5px;
      height: 50%;
      top: 3%;
      left: 2%;
    }
  }
  .print-btn:hover {
    box-shadow: 0px 0px 2px black;
  }
  .MuiLinearProgress-bar {
    background-color: #f0b125 !important;
  }
  .MuiLinearProgress-root {
    background-color: #989797ac !important;
  }
  // build btn style
`;
