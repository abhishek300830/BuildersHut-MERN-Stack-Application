import styled from "styled-components";

export const ScheduleStyleDiv = styled.div`
  section.sMain {
    display: grid;
    grid-template-columns: 50% 50%;
    /* border: 1px solid black; */
    position: absolute;
    width: 98%;
    height: 83%;
    margin-left: 1%;
    margin-top: -2.5%;

    div.left {
      position: relative;
      padding: 2%;
      height: 85%;
      background: #f7f7f7;
      border: 5px solid #595451;
      border-top: 40px solid #595451;
      border-radius: 10px;

      div.user-input {
        width: 100%;
        position: relative;
        border-radius: 15px;
        margin-top: -2%;
        /* border: 1px solid black; */

        .schedule-intro {
          /* border: 1px solid black; */
          width: 70%;
          color: #565555;
          margin: auto;
          margin-top: 3%;
          text-align: center;
        }
        .entertask {
          /* text-align: left; */
          padding: "10px";
        }
        .templeteClass {
          width: 80%;
        }
        // select button
        .selectButton {
          position: relative;
          width: 43%;
          background-color: white;
          border: 1px solid black;
          border-top: 2px solid black;
          padding: 2.5%;
          border-radius: 5px;
          cursor: pointer;
          user-select: none;

          .box {
              position: absolute;
              display: flex;
              flex-direction: row;
              margin: -4.5%;
              width: 40px;
              height: 40px;
              border-radius: 5px;
              overflow: hidden;
              border: 3px solid black;
              .horizontal1 {
                font-size: 1.2em;
                display: flex;
                flex-grow: 2;
                align-items: center;
                justify-content: center;
                background-color: white;
                .tickIcon {
                  transition: 0.3s;
                  color: #24b300;
                }
              }
              .horizontal2 {
                flex-grow: 2;
                background-color: #dddaec;
              } 
            }
          .selectIcon{
            position:absolute;
            right: 5%;
            color: #252525;
            transform: rotate(180deg);
            transition: 0.2s;
          }
          .selectIcon2{
            position:absolute;
            right: 5%;
            transition: 0.2s;
            color: #252525;
          }
        }
        // making selection list
        .mainbutton {
          z-index: 10;
          margin-top: 50px;
          position: absolute;
          width: 37%;
          background: transparent;
          display: none;

          .selectPriority {
            display: flex;
            position: relative;
            align-items: center;
            animation: "p-anim" 0.5s normal 0s 1 linear;
            transition: 0.3s;

            .box {
              display: flex;
              flex-direction: row;
              margin: 2px;
              width: 40px;
              height: 40px;
              border-radius: 5px;
              overflow: hidden;
              border: 3px solid black;

              .horizontal1 {
                font-size: 1.2em;
                display: flex;
                flex-grow: 2;
                align-items: center;
                justify-content: center;
                background-color: white;
                .tickIcon {
                  transition: 0.3s;
                  color: black;
                }
              }
              .horizontal2 {
                flex-grow: 2;
                background-color: #dddaec;
              }
              
              
            }
            .content {
              text-align: left;
              width: 70%;
              margin-left: 0px;
              padding: 7px 0px;
              padding-left: 2%;
              color: #000000;
              border: 2px solid black;
              border-right: 0;
              user-select: none;
              text-shadow: 0px 0px 3px white;
              /* border-right-radius:2px ; */
              border-top-right-radius: 2px;
              border-bottom-right-radius: 2px;
            }

            .arrow {
              width: 0;
              height: 0;
              margin-left: -0.4%;
              /* background-color: red; */
              border-left: 18px solid black;
              border-top: 18px solid transparent;
              border-bottom: 18px solid transparent;
              transition: 0.3s;
              filter: drop-shadow(2px 0px black);
            }
          }

          @keyframes p-anim {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

        }
      }

      .selectPriority:hover {
        cursor: pointer;
        opacity: 0.8;
        .box {
          .horizontal1 {
            .tickIcon {
              color: #000000 !important;
              filter: drop-shadow(-1px 1px black);
              /* text-shadow: 1px 1px black !important; */
            }
          }     
        }
        /* .arrow{
              border-left: 18px solid transparent !important;
          } */
      }
      .select-opt {
        /* background: #595451;   */
        background-color: white;
        color: black;
      }

      .MuiFormLabel-root {
        color: black;
        /* background-color: #595451;  */
        background-color: white;
        padding: 0% 2%;
        border-radius: 5px;
      }
      .MuiSvgIcon-root {
        color: white;
      }
      .MuiPaper-root {
        /* background: #2c2c2c; */
        background-color: white;
        /* color: red; */
      }
      .MuiSelect-select {
        color: transparent;
        /* color:black; */
        text-shadow: -0px -4px 1px black;
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
      padding: 2%;
      position: relative;
      overflow: auto;
      font-family: "Over the Rainbow", cursive;
      ::-webkit-scrollbar {
        width: 0px;
      }

      .generate-tables {
        border: 10px solid #68440d;
        border-radius: 10px;
        background-size: auto;
        background-position: center;
        min-height: 350px;

        .table-head {
          position: relative;
          display: grid;
          grid-template-columns: 15% 75% 10%;
          text-align: center;
          align-items: center;
          color: white;
          border-radius: 5px;
          border-bottom-left-radius: 0px;
          border-bottom-right-radius: 0px;
          border-bottom: 3px solid #e2e2e2;

          /* background-color: #242424; */

          b {
            padding: 3%;
            font-size: 1.5vw;
          }
          .b3 {
            color: transparent;
          }
        }

        .dusturImg {
          width: 40%;
          transition: 0.5s;
          filter: drop-shadow(0px 1px #b8eabd);
          cursor: pointer;
        }
        .dusturImg:hover {
          width: 45%;
        }
      }
      .content {
        position: relative;
        display: grid;
        grid-template-columns: 15% 75% 10%;
        text-align: center;
        align-items: center;
        color: white;
        border-radius: 0px;
        border-top-right-radius: 0px;
        border-top-left-radius: 0px;
        text-shadow: 0.5px 0.2px white;

        div {
          padding: 2%;
        }
      }
    }
  }

  @media (max-width: 820px) {
    section.sMain {
      display: block;
      margin-top: 0;
      overflow: auto;
      height: 90%;
      div.left {
        height: auto;
        width: 80%;
        margin: auto;
      }
      div.right {
        /* border: 1px solid black; */
        height: auto;
        width: 85%;
        margin: auto;
        margin-top: 5%;
      }
    }
  }

  @media (max-width: 520px) {
    section.sMain {
      margin-top: -5%;
      height: 88%;
      div.left {
        width: 90%;
      }
      div.right {
        width: 95%;
      }
    }
  }
`;
