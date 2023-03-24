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
          /* justify-content: center; */
          width: 80%;
          height: 50px;
          background-color: grey;
        }
        // making selection list
        .mainbutton {
          background-color: white;
          z-index: 10;
          margin-top: 50px;
          position: absolute;
          width: 100%;
          .selectPriority {
            /* width: 100%; */

            display: flex;
            position: relative;
            justify-content: center;
            align-items: center;
            .box {
              display: flex;
              flex-direction: row;
              margin: 5px;
              width: 40px;
              height: 40px;
              border-radius: 5px;
              overflow: hidden;
              border: 3px solid black;

              .horizontal1 {
                flex-grow: 2;
                background-color: white;
              }
              .horizontal2 {
                flex-grow: 1;

                background-color: #dddaec;
              }
            }
            .content {
              margin-left: -5px;
              padding: 7px;

              padding-right: 20%;
              background-color: #f75185;
            }
            .arrow {
              width: 0;
              height: 0;
              /* background-color: red; */
              border-left: 18px solid #e5384f;
              border-top: 18px solid transparent;
              border-bottom: 18px solid transparent;
            }
          }
        }
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

      .dusturImg,
      .dusturImg-anim {
        width: 60%;
        transition: 0.5s;
        filter: drop-shadow(0px 3px #b8eabd);
        cursor: pointer;
      }
      .dusturImg:hover {
        width: 70%;
        transform: rotate(20deg);
      }
      .dusturImg-anim {
        display: none;
        position: absolute;
        width: 6%;
        right: 4%;
        animation: dustAnim 1s normal 0s 1 linear forwards;
      }

      @keyframes dustAnim {
        0% {
          right: 4%;
        }
        100% {
          right: 90%;
        }
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
    .bottom {
      display: grid;
      grid-template-columns: 15% 75% 10%;
      text-align: center;
      align-items: center;
      color: white;
      height: 30px;
      border-radius: 5px;
      border-top-right-radius: 0px;
      border-top-left-radius: 0px;
    }
  }
`;
