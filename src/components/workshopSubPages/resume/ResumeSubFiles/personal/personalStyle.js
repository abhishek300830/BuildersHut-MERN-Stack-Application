import styled from "styled-components";

export const PersonalSection = styled.div`
  .personal {
    /* padding: 2%; */
    margin-bottom: 5%;
    position: relative;
    border-radius: 5px;
    .p-label {
      text-decoration: underline;
      font-size: 2vw;
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
      background-color: white;
      padding: 0% 1%;
    }
  }

  @media (max-width: 1280px) {
    .personal {
        .p-label {
          font-size: 4vw;
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
  }
`;
