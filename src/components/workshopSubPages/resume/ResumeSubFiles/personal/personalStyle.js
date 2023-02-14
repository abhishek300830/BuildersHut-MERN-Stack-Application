import styled from "styled-components";

export const PersonalSection = styled.div`
  .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root {
    background-color: #d1d1d1 !important;
  }
  .personal {
    margin-bottom: 5%;
    position: relative;
    .p-label {
      font-size: 2vw;
      color: #3f3e3e;
    }
    .MuiFormLabel-root {
      padding: 0% 2% !important;
      border-radius: 5px !important;
      /* background-color: #bebebe !important; */
    }
  }
  .address {
    /* background-color: #d1d1d16c; */
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
      border-radius: 5px;
      /* background-color: white; */
      padding: 0% 1%;
    }
  }

  @media (max-width: 1280px) {
    .personal {
      .p-label {
        font-size: 4vw;
      }
    }
    .address {
      .label {
        left: 5%;
        top: -13%;
      }
    }
  }

  @media (max-width: 820px) {
    .personal {
      .p-label {
        font-size: 4vw;
      }
    }
  }

  @media (max-width: 520px) {
    .personal {
      .p-label {
        font-size: 5vw;
      }
    }
    .address {
      .label {
        left: 5%;
        top: -8%;
      }
    }
  }
`;
