import styled from "styled-components";

const ImageBuilderContainer = styled.div`
  position: relative;
  margin-top: -2%;
  text-align: center;
  display: grid;
  grid-template-columns: 40% 60%;
  padding: 2%;
  .left {
    width: 90%;
    .photoView {
      background-color: white;
      overflow: hidden;
      display: inline-block;
      border: 2px solid black;
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
  }

  .right {
    position: relative;
    background-color: #fcfcfc;
    border: 5px solid #595451;
    border-radius: 8px;
    border-top: 40px solid #595451;
    .editorContainer {

      display: grid;
      grid-template-columns: 1fr;
      
      h3{
        text-align: left;
        padding-left: 5%;
      }
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
          margin: 2%;
          margin-right: 10%;
        }
      }
    }
  }
  .right::before{
    position: absolute;
    content: '';
    background-color: #837d7a;
    width: 99%;
    height: 4%;
    left: 0.5%;
    top: -36px;
    border-radius: 8px;
  }
  .right::after{
    position: absolute;
    content: 'Image Builder';
    color: white;
    left: 2%;
    top: -30px;
    font-size: 1.2em;
    text-shadow: 1px 1px 2px black;
  }

  @media (max-width:1280px) {
    grid-template-columns:45% 55%;
  }
  @media (max-width:1030px) {
    grid-template-columns:55% 45%;
  }

  @media (max-width:820px) {
    display: block;
    .left{
      margin: auto;
    }
    .right{
      margin: auto;
      margin-top: 5%;
      width: 80%;
    }
  }
  @media (max-width:520px) {
    margin-top: -15%;
     .left{
       margin-left: -8.5%;
       scale: 0.8;
      }

      .right{
        width: 98%;
        margin: auto;
        margin-bottom: 5%;

        .typeChange-3{
          margin-top: 10%;
          display: grid;
          grid-template-columns: 50% 50%;

          button{
            margin: auto;
            margin-bottom: 5%;
            width: 80%;
          }
          .button-3{
            grid-column: 1 / span 2;
            width: 40%;
          }
        }
      }
  }
`;

export default ImageBuilderContainer;
