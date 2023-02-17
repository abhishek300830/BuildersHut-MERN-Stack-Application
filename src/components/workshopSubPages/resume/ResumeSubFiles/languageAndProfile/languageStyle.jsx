import styled from "styled-components";

export const LanguageContainer = styled.div`
  // select language
  .MuiOutlinedInput-notchedOutline:focus {
    border-color: red !important;
  }
  .border {
    margin-bottom: 0%;
    padding: 2%;
    border-radius: 5px;
  }

  .languages {
    position: relative;

    #demo-multiple-chip-label {
      z-index: 10;
      padding-right: 2%;
      .outlined-lang-input {
        select:focus {
          border: 1px solid red !important;
        }
        input:focus {
          border: 1px solid red !important;
        }
      }
    }

    .lang-label {
      /* position: absolute; */
      /* top: -35%; */
      /* left: 3%; */
      padding: 0% 1%;
      border-radius: 5px;
      color: #454343ff;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
  .profileBio {
    position: relative;

    .profile-label {
      /* position: absolute; */
      /* top: -20%; */
      /* left: 3%; */
      padding: 0% 1%;
      border-radius: 5px;
      color: #454343ff;
      text-align: center;
    }
    .css-leqjib-MuiInputBase-root-MuiFilledInput-root::after {
      border-bottom: #fcae05 2px solid;
    }
    /* #outlined-multiline-static {
      border-bottom: red 2px solid;
    } */
  }

  .interestAndHobbies {
    position: relative;
    h4 {
      background-color: #d74846;
      position: absolute;
      top: -10%;
      padding: 1% 2%;
      margin-left: 32%;
      border-radius: 8px;
      color: #e7e7e7;
    }
    .dyn-data {
      text-align: center;
    }
    .interest-label {
      /* position: absolute; */
      /* top: -15%; */
      /* left: 3%; */
      display: flex;
      /* border: 1px solid black; */
      padding: 0% 1%;
      border-radius: 5px;
      color: #454343ff;
      align-items: baseline;
      justify-content: center;

      div.content {
        /* border: 1px solid red; */
      }
    }
  }

  @media (max-width: 520px) {
    .languages {
      padding-top: 5%;
      #demo-multiple-chip {
        margin-top: 2%;
      }
    }
    .profileBio {
      margin-top: 5%;
      padding-top: 4%;
    }
    .interestAndHobbies {
      margin-top: 5%;
      h4 {
        margin-left: 10%;
      }
      .interest-label {
        align-items: center;
        margin-top: 10%;
        div.content {
          font-size: 4.5vw;
        }
      }
    }
  }
`;
