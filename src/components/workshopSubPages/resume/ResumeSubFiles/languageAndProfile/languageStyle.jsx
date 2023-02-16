import styled from "styled-components";

export const LanguageContainer = styled.div`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  .border {
    margin-bottom: 5%;
    padding: 2%;
    border: black solid 1px;
    border-radius: 5px;
  }

  .languages {
    /* // set border of mui language
    .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused {
      border: solid !important;
      border-color: #fcae05 !important;
      border-width: 2px !important;
    } */
    position: relative;
    #demo-multiple-chip-label {
      z-index: 10;
      padding-right: 2%;
      background-color: white;
    }
    .outlined-lang-input {
      select:focus {
        border: 1px solid #fcae05 !important;
      }
      input:focus {
        border: 1px solid #fcae05 !important;
      }
    }
    .lang-label {
      position: absolute;
      top: -35%;
      left: 3%;
      background-color: white;
      padding: 0% 1%;
      border-radius: 5px;
      color: #454343ff;
    }
  }
  .profileBio {
    position: relative;
    .profile-label {
      position: absolute;
      top: -20%;
      left: 3%;
      background-color: white;
      padding: 0% 1%;
      border-radius: 5px;
      color: #454343ff;
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
    .interest-label {
      position: absolute;
      top: -15%;
      left: 3%;
      background-color: white;
      padding: 0% 1%;
      border-radius: 5px;
      color: #454343ff;
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
      .interest-label {
        top: -20%;
      }
    }
  }
`;
