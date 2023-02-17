import styled from "styled-components";

export const MainPrintStyleDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  .vanish-click {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: 25;
    animation: print-1 0.5s linear 0s 1;
  }

  .resume-print {
    position: relative;
    z-index: 30;
    width: 80%;
    height: 153%;
    left: 10%;
    color: black;
    background-color: whitesmoke;
    margin-top: 2%;
    margin-bottom: 2%;
    animation: print-1 0.5s linear 0s 1;
  }
  button {
    position: relative;
    z-index: 26;
    margin-bottom: 2%;
    width: 10%;
    margin-left: 45%;
  }
  @keyframes print-1 {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
