import styled from "styled-components";

export const SkillStyleDiv = styled.div`
  // internship type
  #demo-simple-select-label {
    background-color: white;
    padding: 0px 5px;
    border-radius: 5px;
    margin-top: -6%;
  }
  /* #demo-simple-select-label:focus {
    margin-top: -1%;
    
  } */
  .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root {
    margin-top: 0.5% !important;
  }
  .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    margin-top: 0.5% !important;
  }
  background-color: #e0dfdf;
  margin-top: 5%;
  border-radius: 5px;
  section.skills {
    padding: 2%;
    position: relative;
    border-radius: 5px;
    h4 {
      background-color: #d74846;
      padding: 1% 2%;
      position: absolute;
      border-radius: 8px;
      color: #e7e7e7;
      margin-left: 33%;
      margin-top: 0%;
    }

    h3 {
      font-size: 1.3vw;
      margin-top: 5%;
      padding: 0% 1%;
      color: #454343ff;
      display: flex;
      justify-content: center;
      align-items: baseline;
      gap: 2%;
    }

    .dyn-data {
      text-align: center;
    }
  }

  section.projects {
    padding: 2%;
    position: relative;
    border-radius: 5px;
    margin-top: -2%;
    h4 {
      background-color: #d74846;
      padding: 1% 2%;
      position: absolute;
      border-radius: 8px;
      color: #e7e7e7;
      margin-left: 33%;
      margin-top: -2%;
    }
    h3 {
      text-align: center;
      font-size: 1.3vw;
      color: #454343ff;
      padding: 0% 1%;
      border-radius: 5px;
    }

    .MuiInputBase-input {
      padding: 3.5%;
      font-family: "Ubuntu", sans-serif;
      font-weight: bold;
    }
    .project-select {
      margin-top: 8%;
      text-align: center;
    }
    .dyn-data {
      text-align: center;
    }
  }

  @media (max-width: 1280px) {
    section.skills {
      h1 {
        top: -25px;
      }
    }
    section.projects {
      h1 {
        top: -25px;
      }
    }
  }

  @media (max-width: 820px) {
    section.skills {
      padding: 2%;
      h3 {
        font-size: 2.5vw;
      }
      h4 {
        margin-left: 34%;
        font-size: 1.5vw;
      }
    }
    section.projects {
      padding: 3%;
      h3 {
        font-size: 2.5vw;
      }
      h4 {
        font-size: 1.5vw;
        margin-left: 33%;
      }
    }
  }

  @media (max-width: 520px) {
    section.skills {
      padding: 2%;
      h3 {
        font-size: 3.5vw;
      }
      h4 {
        margin-left: 25%;
        font-size: 2.5vw;
        border-radius: 5px;
      }
    }
    section.projects {
      h3 {
        font-size: 5.5vw;
      }
      h4 {
        font-size: 2.5vw;
        border-radius: 5px;
        margin-left: 25%;
      }
      .project-select {
        margin-top: 15%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .select-2 {
          width: 60% !important;
          margin-left: 0%;
        }
      }
    }
  }
`;
