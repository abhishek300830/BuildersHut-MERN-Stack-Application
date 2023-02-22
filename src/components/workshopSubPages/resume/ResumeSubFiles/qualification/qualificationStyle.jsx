import styled from "styled-components";

const QualificationContainer = styled.div`
  // for headings of text Fields
  .MuiFormLabel-root {
    background-color: ${(props) =>
      props.themebg === "white" ? "#FAF6F6" : "#D1D1D1"};
    padding: 0% 2%;
    border-radius: 5px;
    font-family: 'Ubuntu', sans-serif;
    font-weight: bold;
  }


  // main folder structure
  .qualification {
    margin-top: 5%;
    padding:2%;
    padding-bottom: 5%;
    position: relative;
    /* border: 1px solid black; */
    border-radius: 5px;
    background: #d2d2d2;

      h3 {
        color: #454343ff;
        text-align: center;
      }
      div.graduate, div.intermediate, div.highschool{
        text-align: center;
      }
  }

  @media (max-width:820px){
    .qualification {
        margin-top: 5%;
        /* .qualification-label {
          top: -5%;
        } */
      }
   }

   @media (max-width:520px){
    .qualification {
        margin-top: 8%;
        /* .qualification-label {
          top: -4%;
        } */
      }
   }
`;

export { QualificationContainer };
