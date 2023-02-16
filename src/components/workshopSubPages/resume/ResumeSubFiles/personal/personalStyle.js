import styled from "styled-components";

export const PersonalSection = styled.div`
margin-top: 5%;
.merge-2{
  background-color: #e0dfdf;
  border-radius: 5px;
}
  css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
    input:hover {
      border: #fcae05 2px solid !important;
    }
  }
  .MuiInputBase-input{
      padding: 3.5%;
      font-family:'Ubuntu', sans-serif;
      font-weight:bold;

  }

  .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root {
    background-color: transparent !important;
  }
  .personal {
    margin-bottom: 5%;
    position: relative;
    display: grid;
    grid-template-columns: 10% 40%;
    align-items: baseline;
    /* .p-label {
      font-size: 2vw;
      color: #3f3e3e;
    } */
    .MuiFormLabel-root {
      padding: 0% 2% !important;
      border-radius: 5px !important;
      /* background-color: #bebebe !important; */
    }
  }
  .address {
    text-align: center;
    padding: 2%;
    margin-top: 2%;
    position: relative;
    border-radius: 5px;
    .label {
      color: #424242;
      text-align: center;
      
      border-radius: 5px;
      padding: 0% 1%;
      /* background-color: #d2d2d2 ; */
    }
  }

  @media (max-width: 1280px) {
    .personal {
      /* .p-label {
        font-size: 4vw;
      } */
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
      /* .p-label {
        font-size: 4vw;
      } */
    }
  }

  @media (max-width: 520px) {
    .personal {
      grid-template-columns: 20% 50%;
    }
    .address {
      .label {
        left: 5%;
        top: -8%;
      }
    }
  }
`;
