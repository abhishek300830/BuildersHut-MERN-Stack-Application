import styled from "styled-components";

export const PersonalSection = styled.div`
  .personal {
    padding: 2%;
    margin-top: 2%;
    margin-bottom: 5%;
    position: relative;
    border: 1px solid black;
    border-radius: 5px;
    .p-label {
      /* opacity: 0.8; */
      color: #454343ff;
      left: 5%;
      z-index: 10;
      position: absolute;
      top: -30%;
      background-color: white;
      padding: 0% 1%;
    }
  }
  .address {
    /* background-color: #d1d1d1; */
    padding: 2%;
    margin-top: 2%;
    margin-bottom: 5%;
    position: relative;
    border: 1px solid black;
    border-radius: 5px;
    .label {
      /* opacity: 0.8; */
      color: #454343ff;
      left: 5%;
      z-index: 10;
      position: absolute;
      top: -20%;
      background-color: white;
      padding: 0% 1%;
    }
  }
`;
