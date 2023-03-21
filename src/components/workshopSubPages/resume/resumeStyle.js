import styled from "styled-components";

export const ResumeStyleDiv = styled.div`
  margin-top: -2.5%;
  font-family: "Ubuntu", sans-serif;

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
  /* .header{
    width: 20%;
    position: fixed;
    top: 1%;
    left: 1%;
    animation: pop-up-bg-2 1s ease-out 0s 1 normal forwards;
  } */

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

  section.rMain {
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
      position: relative;
      padding: 2%;
      height: 85%;
      /* overflow: auto; */
      background: #f7f7f7;
      border: 5px solid #595451;
      border-top: 40px solid #595451;
      border-radius: 10px;
      .left-temp {
        position: absolute;
        /* border: 1px solid red; */
        overflow: auto;
        width: 99%;
        left: 0.5%;
        /* height: 480px; */
        height: 91%;
        top: 0;
        ::-webkit-scrollbar {
          width: 5px;
        }
        ::-webkit-scrollbar-track {
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb {
          border-radius: 3px;
        }
      }
      div.user-input {
        width: 100%;
        position: relative;
        border-radius: 15px;
        margin-top: -2%;
        /* border: 1px solid black; */
        .select-temp {
          position: relative;

          .resume-intro {
            /* border: 1px solid black; */
            width: 70%;
            color: #565555;
            margin: auto;
            margin-top: 3%;
            text-align: center;
          }

          .st1 {
            border: 2px solid #2c2c2c;
            width: 60%;
            border-radius: 10px;
            background-color: #f1b226;
            margin: auto;
            margin-top: 5%;
            margin-bottom: 5%;
            padding: 2%;
            position: relative;
            box-shadow: 2px 2px 3px gray;
            div.abs-1 {
              position: absolute;
              width: 97%;
              height: 50%;
              left: 1.5%;
              top: 2%;
              border-radius: 10px;
              background: #ebc532;
            }

            .align-label {
              color: black;
              font-weight: bold;

            }
            .alignment {
              padding: 1% 4%;
              border-radius: 5px;
              text-align: center;
              width: 50%;
              margin-left: 20%;
            }
           
            .templates {
              text-align: center;
              margin-top: 2%;
              width: 100%;
              padding: 1% 4%;
              
              margin-left: 5%;
              
              /* background-color: white; */
              .templeteClass {
                width: 80%;
              }
              }
              .select-opt {
                background: #595451;  
              }
              
              .MuiFormLabel-root {
                color: white;
                background-color: #595451; 
                padding: 0% 2%;
                border-radius: 5px;
                
              }
              .MuiSvgIcon-root {
                color: white;
              }
              .MuiPaper-root {
                background: #2c2c2c;
                color: red;
              }
              .MuiSelect-select {
                color: transparent;
                text-shadow: -0px -4px 1px white;
              }
            }
            .begin-btn {
              padding: 2% 4%;
              border-radius: 5px;
              position: relative;
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
            .begin-btn:hover {
              box-shadow: 0px 0px 2px black;
            }
          }
        }
      }

      div.subheads {
        position: absolute;
        font-weight: bold;
        text-shadow: 1px 1px 2px black;
        color: white;
        text-align: left;
        padding-left: 2%;
        width: 100%;
        height: 30px;
        top: -30px;
        left: 0;
        background-color: transparent;
      }

      .scroll-x-y {
        border-top: 1px solid black;
        position: absolute;
        border-top: 2px solid #565555;
        z-index: 12;
        width: 100%;
        bottom: 0%;
        left: 0%;
      }
    }

    div.left::before {
      position: absolute;
      content: "h";
      color: transparent;
      width: 100%;
      border-radius: 8px;
      height: 20px;
      left: 0%;
      top: -38px;
      opacity: 0.7;
      background-color: #958e8c;
    }
  

  div.right {
    padding-top: 2%;
    position: relative;
    /* border:10px solid #d95144; */
    margin-left:6%;
    margin-right:6%;
    border-radius:1%;
    background-color: #d95144;
    /* background:#4e8e2c87; */
     img.clip{
      position:absolute;
      top: -9%;
      left: 35%;
      z-index: 20;
      width: 30%;
     }
    div.a4 {
      /* width: 70px; */
      width: 385px;
      margin: auto;
      margin-top: 3%;
      height: 544.467px;
      position: relative;
      div.align-me {
        position: absolute;
        scale: 0.5;
        top: -60%;
        left: -55%;
      }
    }
  }

  /* media queries ####### */
  @media (max-width: 1280px) {
    section.rMain div.right div.a4 {
      margin-top: 25px;
    }
    section.rMain {
      div.user-input {
        .select-temp {
          .st1 {
            .alignment {
              text-align: center;
              width: 70% !important;
              margin-left: 10% !important;
            }
          }
        }
      }

      div.right{
        padding-top: 0%;
        margin-left: 2%;
        img.clip{
          top: -10%;
          left: 30%;
          width: 40%;
        }
      }
    }
  }

  @media (max-width: 820px) {
    margin-top: -1%;
    .pop-up-girl {
      width: 70%;
    }
    /* .header{
      width: 30%;
      left: 3%;
    } */
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
        left: 3%;
        top: 8%;
        font-size: 2.5vw;
        padding: 0% 2%;
        z-index: 10;
        border: 1px solid black;
        height: 40px;
        border-radius: 5px;
        box-shadow: 1px 2px 2px black;
        font-weight: bold;
      }

      div.left {
        padding: 2%;
        height: 90%;
        border-top: 60px solid #565555;
        .left-temp {
          height: 93%;
        }
        div.user-input {
          width: 100%;
          height: 100%;
        }
        div.subheads {
          width: 99%;
          height: 30px;
          top: -40px;
          font-size: 3vw;
        }
        animation: left-anim-1 0.6s normal 0s 1;
      }
      div.left::before {
        width: 100%;
        height: 30px;
        left: 0%;
        top: -57px;
      }

      div.right {
        background-color: #f1b226;
        padding: 2%;
        padding-top: 0;
        position: relative;
        height: 97%;
        display: none;
        img.clip{
          top: -6%;
          left: 32%;
          width: 40%;
        }
        div.a4 {
          width: 600px;
          margin: auto;
          height: 640px;
          background-color: transparent;
          z-index: 3;
          margin-top: 5%;
          div.align-me {
            scale: 0.7;
            top: -20%;
            left: -15%;
          }
        }
        animation: right-anim-1 0.6s normal 0s 1;
      }
      div.right::after {
        position: absolute;
        content: "1";
        color: transparent;
        background-color: #ebc532;
        width: 98%;
        height: 50%;
        top: 1%;
        left: 1%;
        border-radius: 5px;
        z-index: 0;
      }

      @keyframes left-anim-1 {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      @keyframes right-anim-1 {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    }
  }

  @media (max-width: 520px) {
    margin-top: -5%;

    .pop-up-girl {
      width: 98%;
      left: 1;
    }
    .header {
      display: none !important;
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
      height: 93%;
      button.flip {
        font-size: 3.5vw;
        border: 1px solid black;
        height: 30px;

        border-radius: 5px;
        margin-right: 2%;
        margin-top: -8%;
      }

      div.left {
        padding: 2%;
        height: 85%;
        margin-left: 0;
        border-top: 40px solid #565555;
        .left-temp {
          height: 93%;
        }
        div.user-input {
          width: 100%;
          height: 100%;
          .select-temp {
            .st1 {
              width: 90% !important;
              .templates {
                width: 90%;
                margin-left: 0%;
                .templeteClass {
                  width: 100%;
                }
              }
              .begin-btn {
                width: 30%;
                margin-left: 35%;
                margin-top: 5%;
              }
            }
          }
        }
        div.subheads {
          font-size: 4vw;
          top: -28px;
        }
      }

      .scroll-x-y {
        border-top: 2px solid #565555;
      }

      div.left::before {
        height: 20px;
        top: -38px;
      }

      div.right {
        padding: 0%;
        position: relative;
        height: 90%;
        padding-top: 0%;
        border-radius: 5px;
        margin-right: 1%;
        img.clip{
          top: -5%;
          left: 32%;
          width: 40%;
        }
        div.a4 {
          position: relative;
          margin: auto;
          margin-top: 8%;
          width: 350px;
          height: 450px;
          div.align-me {
            scale: 0.4;
            top: -75%;
            left: -64%;
          }
        }
      }
    }
  }
`;
