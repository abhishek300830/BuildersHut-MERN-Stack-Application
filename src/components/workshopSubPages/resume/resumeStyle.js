import styled from "styled-components";

export const ResumeStyleDiv = styled.div`
  margin-top: -2.5%;
  .pop-up-girl {
    width: 30%;
    position: fixed;
    bottom: 2%;
    left: 2%;
    z-index: 22;
    animation: pop-up-anim 1s ease-out 0s 1 normal forwards;
  }
  .blur-bg {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 21;
    opacity: 0.7;
  }
  .header{
    width: 20%;
    position: fixed;
    top: 1%;
    left: 1%;
    animation: pop-up-bg-2 1s ease-out 0s 1 normal forwards;

  }

  @keyframes pop-up-anim {
    0% {
      width: 0;
      left: 0;
    }
    100% {
      width: 30%;
      left: 2%;
    }
  }
  @keyframes pop-up-bg-2 {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }

  section.rMain {
    /* border-top: 5px solid #8e5a2c; */
    /* border-left: 5px solid #8e5a2c; */
    /* border-right: 5px solid #8e5a2c; */

    border: 5px solid black;
    border-color: #4e8e2c87;
    border-radius: 5px;
    display: grid;
    grid-template-columns: 60% 40%;
    /* border: 1px solid black; */
    position: absolute;
    width: 98%;
    height: 83%;
    margin-left: 1%;
    button.flip {
      display: none;
    }
    div.left {
      padding: 2%;
      overflow: auto;
      height: 85%;  
      background: #c9c7c72c;
      /* box-shadow: 4px 7px 4px gray; */
      border-radius: 5px;


      ::-webkit-scrollbar {
        width: 5px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        border-radius: 3px;
      }
      /* Handle */
      ::-webkit-scrollbar-thumb {
        border-radius: 3px;
      }

      /* border: 1px solid black; */
     
      /* box-shadow: 4px 4px 4px 4px #e7934fa1; */
      /* box-shadow: 2px 2px 4px rgba(0,0,0,.3); */
      div.user-input {
        width: 100%;
        /* height: 100%; */
        position: relative;

        .select-temp {
          /* border: 1px solid black; */
          .st1 {
            border: 1px solid black;
            width: 60%;
            border-radius: 5px;
            .alignment {
              /* border: 1px solid black; */
              padding: 1% 4%;
              border-radius: 5px;
            }
            .templates {
              margin-top: 2%;
              width: 80%;
              padding: 1% 4%;
            }
          }
        }
      }
    }

    .scroll-x-y {
      position: fixed;
      z-index: 12;
      width: 58%;
      bottom: 1%;
      left: 1%;
    }
  }

  div.right {
    padding: 2%;
    position: relative;

    background:#4e8e2c87;

    div.a4 {
      /* width: 70px; */
      width: 385px;
      margin: auto;
      margin-top: 3%;
      /* height: 98.994px; */
      height: 544.467px;
      background-color: #e4e1e1d3;
    }
  }

  /* media queries ####### */
  @media (max-width: 1280px) {
    section.rMain div.right div.a4 {
      margin-top: 25px;
    }
    section.rMain {
      .scroll-x-y {
        bottom: 5%;
      }
    }
  }
  @media (max-width: 820px) {
    margin-top: -1%;
    .pop-up-girl {
      width: 70%;
    }
    .header{
      width: 30%;
      left: 3%;
    }
    @keyframes pop-up-anim {
      0% {
        width: 0;
        left: 0;
      }
      100% {
        width: 70%;
        left: 2%;
      }
    }
    section.rMain {
      display: block;
      position: fixed;
      height: 90%;
      margin-left: 0.5%;

      button.flip {
        display: block;
        position: fixed;
        right: 3%;
        margin-top: 1%;
        font-size: 2.5vw;
        z-index: 10;
      }
      div.left {
        padding: 2%;
        overflow: auto;
        height: 90%;

        div.user-input {
          width: 100%;
          height: 100%;
          .scroll-x-y {
            width: 98%;
            bottom: 1%;
            left: 1%;
          }
        }
        animation: left-anim-1 0.6s normal 0s 1;
      }
      div.right {
        /* background-color: #f965654e; */
        padding: 2%;
        position: relative;
        height: 97%;
        display: none;
        div.a4 {
          width: 70%;
          margin: auto;
          height: 98.994%;
          background-color: #7d79799c;
        }
        animation: right-anim-1 0.6s normal 0s 1;
      }
      @keyframes left-anim-1 {
        0% {
          width: 0;
        }
        100% {
          width: 96%;
        }
      }
      @keyframes right-anim-1 {
        0% {
          width: 0;
          margin-left: 98%;
        }
        100% {
          width: 96%;
          margin-left: 1%;
        }
      }
    }
  }
  @media (max-width: 520px) {
    margin-top: 10%;
    .pop-up-girl {
      width: 98%;
      left: 1;
    }
    .header{
      width: 50%;
      left: 25%;
      top: 11%;
    }
    @keyframes pop-up-anim {
      0% {
        width: 0;
        left: 0;
      }
      100% {
        width: 98%;
        left: 1%;
      }
    }

    section.rMain {
      height: 82%;
      button.flip {
        font-size: 3.5vw;
      }
      div.left {
        padding: 2%;
        overflow: auto;
        height: 85%;
        margin-left: 0;
        div.user-input {
          width: 100%;
          height: 100%;
          p {
            width: 20%;
          }
        }
      }
      div.right {
        padding: 0%;
        position: relative;
        height: 94%;
        padding-top: 8%;

        div.a4 {
          width: 65%;
          height: 91.923%;
          margin: auto;
        }
      }
      @keyframes right-anim-1 {
        0% {
          width: 0;
          margin-left: 100%;
        }
        100% {
          width: 98.5%;
          margin-left: 1%;
        }
      }
    }
  }
`;
