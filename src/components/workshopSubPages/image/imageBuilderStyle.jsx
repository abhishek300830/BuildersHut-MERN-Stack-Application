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
      border-bottom: 5px solid black;
    }
  }

  .right {
    position: relative;
    background-color: #fcfcfc;
    border: 5px solid #595451;
    border-radius: 8px;
    border-top: 40px solid #595451;
    padding: 2%;
    
    h3{
      text-align:left;
      padding-left:5%;
      color:#403f3f;
      font-family: Verdana, Geneva, Tahoma, sans-serif;

    }
    .editorContainer {
      padding: 1%;
      border: 3px solid #535353;
      border-bottom: 6px solid #535353;
      display: grid;
      grid-template-columns: 1fr;
      border-radius: 8px;
      width: 90%;
      background-color: #837d7a;
      margin: auto;
      color: white;
      text-shadow: 0px 0px 3px black;
      
      .changeType {
        display: grid;
        justify-content: start;
        grid-template-columns: 30% 70%;
        align-items: center;
        .typeName {
          margin: 3%;
          margin-left: 20%;
          text-align: start;
        }
        .typeChange {
          margin: 2%;
          margin-right: 10%;
        }
        .typeChange-3 {
          text-align: left;
          padding-left: 2%;
          button{
            position: relative;
            padding: 2% 0%;
            width: 15%;
            margin-right: 5%;
          }
          button::before{
            position: absolute;
            content: "";
            width: 94%;
            height: 45%;
            background-color: #ffffff36;
            top: 3%;
            left: 3%;
            border-radius: 5px;
          }


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

  .downloadBtn{
    position: relative;
    padding: 1.5% 2.5%;
    font-weight: bold;
    margin: auto;
    margin-top: 5%;
    border-radius: 5px;
    border: 2px solid black;
    border-bottom: 3px solid black;
    cursor: pointer;
    background-color: #48e45d;
    color: #000000;
    text-shadow: 0px 0px 2px white;
    transition: 0.2s;
    display: grid;
    grid-template-columns: 90% 10%;
    align-items: center;
    text-align: left;

  }
  .downloadBtn::before{
    content: "";
    position: absolute;
    width: 96%;
    height: 45%;
    top: 4%;
    left: 2%;
    border-radius: 4px;
    background-color: #ffffff5a;
  }

  
  .downloadBtn:hover{
    scale: 0.98;
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
        width: 95%;
        margin-bottom: 5%;

        .editorContainer{
          padding-bottom: 5%;
        }
      }
  }
`;

export default ImageBuilderContainer;
