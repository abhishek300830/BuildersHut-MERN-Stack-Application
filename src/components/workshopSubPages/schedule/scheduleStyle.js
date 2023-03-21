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
    /* font-family: 'Fredericka the Great', cursive; */
    /* font-family: 'Homemade Apple'; */
    /* font-family: 'Nanum Pen Script', cursive; */
    font-family: "Over the Rainbow", cursive;

    .generate-tables {
      border: 5px solid #bb0404;
      border-radius: 10px;
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
        /* background-color: #565555; */
        /* background-color: #0c5214; */
        background-color: #1a1a1a;

        b {
          padding: 3%;
        }
        .b3 {
          /* border-left: 1px solid white; */
          color: transparent;
        }
      }
      .b1 {
        border-right: 1px solid white;
      }
      .b3 {
        border-left: 1px solid white;
        color: transparent;
      }
    }

    /* .table-head::before{
            content: "1";
            position: absolute;
            width: 99%;
            height: 47%;
            top: 5%;
            left: 0.5%;
            border-radius: 8px;
            background-color: #837c7a;
            z-index: 2;
            color: transparent;
        } */

    .content {
      display: grid;
      grid-template-columns: 15% 75% 10%;
      text-align: center;
      align-items: center;
      color: white;
      border-radius: 0px;
      background-color: #1a1a1a;
      border-top-right-radius: 0px;
      border-top-left-radius: 0px;

      div {
        padding: 2%;
      }
      button {
        border: 0;
        width: 70%;
        padding: 10% 0%;
        margin: auto;
        border-radius: 5px;
        background-color: #f82a2a;
        color: white;
        cursor: pointer;
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
      /* background-color: black; */
      background-color: #1a1a1a;

      /* background-color: #042e09; */

      border-top-right-radius: 0px;
      border-top-left-radius: 0px;
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
    background-color: #4a4747;
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
  }
`;
