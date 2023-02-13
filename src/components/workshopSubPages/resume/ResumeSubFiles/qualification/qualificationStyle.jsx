import styled from "styled-components";

const QualificationContainer = styled.div`
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
`;

export { QualificationContainer };
