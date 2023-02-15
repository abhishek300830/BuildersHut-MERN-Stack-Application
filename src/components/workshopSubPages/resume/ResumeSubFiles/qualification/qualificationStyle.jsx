import styled from "styled-components";

const QualificationContainer = styled.div`
  // for headings of text Fields
  .MuiFormLabel-root {
    background-color: ${(props) =>
      props.themebg === "white" ? "#FAF6F6" : "#D1D1D1"};
    padding: 0% 2%;
    border-radius: 5px;
  }

  // main folder structure
  .qualification {
    margin-top: 2%;
    padding: 1%;
    padding-bottom: 5%;
    position: relative;
    border: 1px solid black;
    border-radius: 5px;
    .qualification-label {
      padding: 0% 1%;
      background-color: #f6f5f5;
      margin-left: 2%;
      position: absolute;
      top: -9%;
    }
    .graduate {
      h3 {
        margin-left: 4%;
      }
    }
    .intermediate {
      h3 {
        margin-left: 4%;
      }
    }
    .highschool {
      h3 {
        margin-left: 4%;
      }
    }
  }

  @media (max-width:820px){
    .qualification {
        margin-top: 5%;
        .qualification-label {
          top: -5%;
        }
      }
   }

   @media (max-width:520px){
    .qualification {
        margin-top: 8%;
        .qualification-label {
          top: -4%;
        }
      }
   }
`;

export { QualificationContainer };
