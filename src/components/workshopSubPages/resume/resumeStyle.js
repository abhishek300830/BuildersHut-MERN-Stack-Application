import styled from "styled-components";

export const ResumeStyleDiv = styled.div`
  margin-top: -2.5%;
  img.header {
    width: 20%;
    position: absolute;
    top: 2%;
    left: 2%;
  }
  section.rMain {
    display: grid;
    grid-template-columns: 60% 40%;
    /* border: 1px solid black; */
    position: absolute;
    width: 98%;
    height: 83%;
    margin-left: 1%;
    div.left {
      padding: 2%;
      /* background-color: #eeee6f74; */
      background-color: #b0b0b09c;
      overflow: auto;

      ::-webkit-scrollbar {
        width: 10px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        border-radius: 3px;
      }
      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #eaa5a5;
        border-radius: 3px;
      }

      div.user-input {
        width: 100%;
        height: 100%;
        p {
          width: 20%;
        }
      }
    }
    div.right {
      background-color: #f965654e;
      padding: 2%;
      position: relative;

      div.a4 {
        /* width: 70px; */
        width: 385px;
        margin: auto;
        margin-top: 3%;
        /* height: 98.994px; */
        height: 544.467px;
        background-color: #7d79799c;
      }
    }
  }

  /* media queries ####### */
  @media (max-width: 1280px) {
    section.rMain div.right div.a4 {
      /* background-color: red; */
      margin-top: 25px;
    }
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
