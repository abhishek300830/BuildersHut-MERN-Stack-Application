import styled from "styled-components";

export const VerticalResumeConatainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #8099b0;
  .page {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    width: 210mm;
    min-height: 297mm;
    padding: 5mm;
    margin: 10mm auto;
    border: 1px #d3d3d3 solid;
    border-radius: 5px;
    background: rgb(252, 252, 252);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
  .subpage {
    // this height is main cause of page shift
    height: 257mm;
    border: 1px black solid;
    display: grid;
    grid-template-rows: 16% 84%;

    .upper-part {
      display: grid;
      grid-template-columns: 24% 38% 38%;
      // background color of upper part
      background-color: #303c47;
      color: "white";

      .upper-part1 {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          height: 130px;
          width: 97.5px;
          border: black 1px solid;
          box-shadow: 0 1px 1px 2px rgba(0, 0, 0, 0.1);
          border-radius: 5px;
          object-fit: cover;
        }
      }
      .upper-part2 {
        padding: 0px 20px;
        .firstName {
          margin: 0;
          margin-top: 35px;
          font-size: 30px;

          color: white;
        }
        .lastName {
          margin: 0px;
          margin-top: 10px;
          font-size: 30px;
          margin-bottom: 5px;
          color: white;
        }
        .position {
          margin: 0;
          margin-top: 10px;
          color: white;
        }
      }
      .upper-part3 {
        margin: 20px 0px;
        display: grid;
        grid-template-rows: auto auto auto auto;
        div {
          display: flex;
          align-items: center;
          .icons {
            display: flex;
            align-items: center;
          }
          .detail {
            padding-left: 10px;
            color: white;
          }
        }
      }
    }
    .lower-part {
      // remove at last
      border: red solid 1px;
      display: grid;
      grid-template-columns: 50% 50%;
      .lower-left {
        background-color: #ffffff;
        padding: 20px;
        .subpart1 {
        }
        .subpart2 {
          display: block;
          .subheading {
            margin-bottom: 10px;
          }
        }
        .subpart3 {
          margin-top: 10px;
        }
        .subpart4 {
        }
        .subpart5 {
          .subheading {
            margin-bottom: 10px;
          }
        }
        // common for all subparts
        .subheading {
          display: inline-block;
          background-color: #838f9b;
          padding: 0px 10px;
          color: white;
          font-size: 20px;
        }
        .bio {
          margin-left: 10px;
        }
        .educationTable {
          display: grid;
          grid-template-rows: auto auto auto;
          .row {
            margin-left: 10px;
            display: grid;
            grid-template-columns: 65% 20% 15%;
          }
        }
      }
      .lower-right {
        background-color: #f8f8f8;
        padding: 20px;
      }
    }
  }

  @page {
    size: A4;
    margin: 0;
  }
  @media print {
    html,
    body {
      width: 210mm;
      height: 297mm;
    }
    .page {
      margin: 0;
      border: initial;
      border-radius: initial;
      width: initial;
      min-height: initial;
      box-shadow: initial;
      background: initial;
      page-break-after: always;
    }
  }
`;
