import styled from "styled-components";

export const ChartStyleDiv = styled.div`
  padding-top: 2%;
  position: fixed;
  width: 100%;
  overflow: auto;
  top: 15%;
  height: 78%;
  padding-bottom: 2%;

  img.header {
    width: 20%;
    position: absolute;
    top: 2%;
    left: 2%;
  }
  .textFieldContainer {
    position: relative;
    display: grid;
    grid-template-columns: 50%;
    justify-content: center;

    .selectFile {
      position: relative;
      background-color: #f8f8f8;
      border: 5px solid #595451;
      border-radius: 5px;
      width: 80%;
      margin-left: 10%;
      text-align: center;
      min-height: 400px;

      .headers {
        background-color: #595451;
        height: 30px;
        position: relative;
      }
      .headers::before {
        content: "";
        position: absolute;
        width: 100%;
        top: 0.5%;
        left: 0%;
        background: #837d7a;
        z-index: 2;
        height: 50%;
        border-radius: 8px;
      }
      .headers::after {
        content: "Chart Builder";
        color: white;
        text-align: left;
        position: absolute;
        width: 80%;
        z-index: 3;
        left: 2%;
        top: 10%;
      }
      p {
        color: #3f3f3f;
      }
      .selection {
        width: fit-content;
        margin: auto;
        margin-top: 6%;

        .select-input {
          border: 2px solid black;
          padding: 2%;
          border-radius: 7px;
          font-weight: bold;
        }
        .select-input::-webkit-file-upload-button {
          border: 2px solid black;
          padding: 2% 4%;
          border-radius: 5px;
          cursor: pointer;
          transition: 0.2s;
          box-shadow: 1px 1px 2px gray;
        }
        .select-input::-webkit-file-upload-button:hover {
          box-shadow: -1px -1px 2px gray;
        }
      }
    }

    .chart-builder{
      width: 30%;
      position: absolute;
      bottom: 0%;
      left: -4%;
    }

    .selectAttribute {
      max-height: 400px;
      width: 80%;
      margin-left: 8%;
      border: 4px solid #595451;
      border-radius: 10px;
      background-color: #f8f8f8;
      // Animation Attribute Appears
      animation: AttributeAppears 1s ease-out 0s 1;

      .headers {
        background-color: #595451;
        height: 30px;
        position: relative;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
      }
      .headers::before {
        content: "";
        position: absolute;
        width: 99%;
        top: 3%;
        left: 0.5%;
        background: #837d7a;
        z-index: 2;
        height: 50%;
        border-radius: 10px;
      }
      .headers::after {
        content: "Select Attributes";
        color: white;
        text-align: left;
        position: absolute;
        width: 80%;
        z-index: 3;
        left: 3%;
        top: 15%;
      }

      section {
        padding: 0% 2%;
        .button-section{

          display: grid;
          grid-template-columns: 40% 40%;
          justify-content: right;
          margin-top: 2%;
          .build-chart {
            padding: 3%;
            border-radius: 4px;
            width: 50%;
            box-shadow: 1px 1px gray;
            cursor: pointer;
            transition: 0.4s;
            font-weight: bold;
            background-color: #595451;
            color: white;
          }
          .build-chart:hover {
            box-shadow: -1px -1px gray;
          }

        }
      }
      .warning {
        color: red;
        font-size: small;
        text-align: center;
      }
      .inputAttribute {
        min-height: auto;
        max-height: 260px;
        overflow-y: auto;
        overflow-x: hidden;
        border: 2px solid #3f3f3f;
        border-radius: 5px;

        ::-webkit-scrollbar {
          width: 5px;
          background-color: #595451;
        }

        div.heading-part {
          display: grid;
          justify-content: center;
          grid-template-columns: 60% 40%;
          gap: 1%;
          background-color: #595451;
          border-radius: 5pz;

          div.tableHead {
            color: white;
            margin: 3px;
            text-align: center;
            padding: 1%;
          }
        }

        div.table-content-part {
          display: grid;
          justify-content: center;
          grid-template-columns: 60% 40%;
          gap: 1%;
          border-bottom: 2px solid #595451;
          transition: 0.2s;
          div.tableContent {
            ::-webkit-scrollbar {
              background-color: transparent;
            }
            overflow-y: auto;
            padding: 2.5%;
            text-align: center;
            border-right: 1px solid #595451;
          }
        }

        div.table-content-part:hover {
          cursor: pointer;
          box-shadow: 0px -1px 2px black;
          background-color: #c8f5b8 !important;
        }
      }
    }
    @keyframes AttributeAppears {
      from {
        scale: 0;
      }
      to {
        scale: 1;
      }
    }
  }
  .chartHeading {
    margin-top: 2%;
    text-align: center;
  }
  .chartContainer {
    display: grid;
    width: 90%;
    margin: auto;
    grid-template-columns: 45% 45%;
    /* justify-content: center; */
    gap: 10%;
    margin-bottom: 100px;
  }

  /* media queries ####### */
  @media (max-width: 1280px) {
    .textFieldContainer {
      display: grid;
      grid-template-columns: 50% 50% !important;
    }
    div.selectFile {
      width: 95% !important;
      margin-left: 3% !important;
    }

    .selectAttribute {
      width: 95% !important;
      margin-left: 3% !important;
    }
  }
  @media (max-width: 820px) {
    top: 10%;
    height: 86%;
    img.header {
      width: 30%;
      position: absolute;
      top: 0.3%;
      left: 1%;
    }
    div.selectFile {
      width: 80% !important;
      margin-left: 10% !important;
    }

    .selectAttribute {
      margin-top: 5%;
      width: 80% !important;
      margin-left: 10% !important;
    }
    .textFieldContainer {
      display: block;

      .chart-builder{
        width: 35%;
        position: absolute;
        bottom: 0%;
        left: -4%;
      }
    }

    .chartContainer {
      display: block;
      div{
        /* width: 50% !important; */
        scale: 0.9;
      }
    }
  }

  @media (max-width: 520px) {
    top: 12%;
    height: 85%;
    img.header {
      width: 70%;
      position: relative;
      margin-left: 12%;
      margin-top: -5%;
    }
    div.selectFile {
      width: 90% !important;
      margin-left: 5% !important;
    }
    .textFieldContainer {
      .chart-builder{
        width: 45%;
      }
    }
    .selectAttribute {
      width: 90% !important;
      margin-left: 5% !important;
    }
    .chartContainer {
      display: block;
      div{
        /* width: 50% !important; */
        scale: 1;
      }
      #pieChart{
      }
    }
  }
`;
