import styled from "styled-components";

export const AuraContainer = styled.div`

  #bg-change{
    position: fixed;
    width: 100%;
    height: 100%;
    margin-top: -10%;
    z-index: -3;
    transition: 0.4s;
  }
  #circle{
    position: fixed;
    border-radius: 50%;
    width: 5%;
    height: 10%;
    margin-top: -10%;
    z-index: -2;
    left: 47%;
    display: none;
    animation: circle-anim 0.4s linear 0s 1;
  }
  @keyframes circle-anim {
    0%{
      width: 5%;
      margin-top: 10%;
      height: 10%;
    }
    100%{
      margin-top: -20%;
      left: 0%;
      width: 100%;
      height: 200%;
    }
  }
  section{
    position: absolute;
    width: 60%;
    height: 70%;
    margin-top: -4%;
    margin-left: 20%;

    img.common {
      position: absolute;
      width: 150px;
      height: 150px;
      transition: 0.5s !important;
      z-index: 10;
      cursor: pointer;
      border-radius: 50%;
      border: 3px solid black;
      filter: drop-shadow(0px 0px 5px #3f3f3f);
    }

    .top-left {
      left: 20%;
      animation: top-chakara-anim 5s ease-in-out 0s infinite;

    }
    .top-right {
      right: 20%;
      animation: top-chakara-anim 5s ease-in-out 0s infinite;
    }
    @keyframes top-chakara-anim {
      0% {
        margin-top: 0%;
      }
      50% {
        margin-top: 2%;
      }
      100% {
        margin-top: 0%;
      }
    }
    .bottom-left {
      margin-top: 20%;
      left: 10%;
      animation: bottom-chakara-anim 5s ease-in-out 0s infinite;
    }
    .bottom-right {
      margin-top: 20%;
      right: 10%;
      animation: bottom-chakara-anim 5s ease-in-out 0s infinite;
    }
    @keyframes bottom-chakara-anim {
      0% {
        margin-top: 20%;
      }
      50% {
        margin-top: 22%;
      }
      100% {
        margin-top: 20%;
      }
    }
    .common:hover{

      scale: 1.2;
    }
  }
  


  .yoga-man {
    position: absolute;
    width: 40%;
    margin-left: 32%;
    margin-top: -2%;
    transition: 0.3s;
    animation: yoga-anim 5s ease-in-out 0s infinite;
    filter: drop-shadow(0px 0px 5px #ffffff70);
  }


  @keyframes yoga-anim {
    0% {
      margin-top: -2%;
    }
    50% {
      margin-top: -1%;
    }
    100% {
      margin-top: -2%;
    }
  }

  @media (max-width: 1280px) {
    section{
      img.common {
        width: 130px;
        height: 130px;
      }
    }
    
    .yoga-man {
      width: 50%;
      margin-left: 27%;
    }
  }

  @media (max-width: 820px) {
    #bg-change{
      margin-top: -12%;
    }
    #circle{
      margin-top: -10%;
      left: 80%;
    }
    @keyframes circle-anim {
      0%{
        width: 10%;
        margin-top: 40%;
        height: 5%;
        left: 40%;
      }
      100%{
        margin-top: -20%;
        left: -20%;
        width: 150%;
        height: 100%;
      }
    }
    section{
      width: 90%;
      margin-left: 3%;
      height:40%;
      margin-top: 10%;
    }
   
    .yoga-man {
      width: 90%;
      margin-left: 6%;
      margin-top: 20%;
    }
    @keyframes yoga-anim {
      0% {
        margin-top: 20%;
      }
      50% {
        margin-top: 23%;
      }
      100% {
        margin-top: 20%;
      }
    }
  }

  @media (max-width: 520px) {
    #bg-change{
      margin-top: -25%;
    }
    @keyframes circle-anim {
      0%{
        width: 10%;
        margin-top: 40%;
        height: 5%;
        left: 40%;
      }
      100%{
        margin-top: -20%;
        left: -50%;
        width: 200%;
        height: 100%;
      }
    }
    section{
      margin-top: 0%;
      img.common {
        width: 80px;
        height: 80px;
      }
      .bottom-left{
        margin-top: 30%;
      }
      .bottom-right{
        margin-top: 30%;
      }
      @keyframes bottom-chakara-anim {
        0% {
          margin-top: 30%;
        }
        50% {
          margin-top: 34%;
        }
        100% {
          margin-top: 30%;
        }
    }
    }

    .yoga-man {
      width: 98%;
      margin-left: 2%;
      margin-top: 20%;
    }
    @keyframes yoga-anim {
      0% {
        margin-top: 20%;
      }
      50% {
        margin-top: 23%;
      }
      100% {
        margin-top: 20%;
      }
    }
  }
`;
