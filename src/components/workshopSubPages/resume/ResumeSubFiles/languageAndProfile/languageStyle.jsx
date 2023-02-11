import styled from "styled-components";

export const LanguageContainer = styled.div`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  .border {
    margin: 2%;
    padding: 2%;
    border: black solid 1px;
    border-radius: 5px;
  }

  .languages {
    position: relative;
    #demo-multiple-chip-label {
      z-index: 10;
      padding-right: 2%;
      background-color: white;
    }
    .lang-label {
      position: absolute;
      top: -35%;
      left: 3%;
      background-color: white;
      padding: 0% 1%;
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
    }
  }
  .interestAndHobbies {
    position: relative;
    .interest-label {
      position: absolute;
      top: -35%;
      left: 3%;
      background-color: white;
      padding: 0% 1%;
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
    }
  }
`;
