import styled from "styled-components";

const ImageBuilderContainer = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: 50% 50%;
  .left {
    .photoView {
      overflow: hidden;
      display: inline-block;
      border: 2px solid black;
      border-radius: 10px;
      /* margin: auto; */
      /* padding-bottom: -20px; */
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
  }
  .right {
    .editorContainer {
      display: grid;

      grid-template-columns: 1fr;
      .changeType {
        display: grid;
        justify-content: start;
        align-items: center;
        grid-template-columns: 30% 70%;
        .typeName {
          margin: 3%;
          margin-left: 20%;
          text-align: start;
        }
        .typeChange {
          margin: 3%;
          margin-right: 10%;
        }
      }
    }
  }
`;

export default ImageBuilderContainer;
