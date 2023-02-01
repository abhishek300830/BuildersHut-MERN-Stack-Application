import styled from "styled-components";

const color3 = "#a4ba7681";
export const CardDiv = styled.div`
  .card-main {
    /* border-radius: 10px; */
    user-select: none;
    width: 90%;
    padding: 5% 0% 0% 0%;
    text-align: center;
    margin-bottom: 20%;
    box-shadow: 10px 10px 3px ${color3};
    border: 5px solid ${color3};
    background-color: #d1d1d1;
    margin-left: 10%;
    overflow: hidden;

    position: relative;
    img {
      width: 40%;
      height: 40%;
    }

    div {
      margin-top: 10%;
      padding: 3% 0% 5% 0%;
      h2 {
        font-size: 1.3vw;
        color: #153e1b;
        background-color: ${color3};
        padding: 2%;
        width: 80%;
        text-align: center;
        margin: auto;
        border-radius: 10px;
      }
      p {
        font-family: "Aboreto", cursive;
        font-size: 0.8vw;
        color: #365f37;
      }
    }

    div.upward {
      position: absolute;
      background-color: #a9ba85f9;
      width: 100%;
      bottom: 0;
      height: 80%;
      display: none;
      transition: 0.4s;
      animation: up-anim 0.8s ease-out 0s 1;
      div.loop {
        display: grid;
        grid-template-columns: 45% 45%;
        justify-content: space-evenly;
        button {
          margin-bottom: 10%;
          position: relative;
          padding: 5%;
          border-radius: 5px;
          font-size: 1.2vw;
          background: linear-gradient(#acf85ae8, #86f014);
          border: 3px solid black;
          box-shadow: 1px 1px 3px #3d3d3d;
          cursor: pointer;
          transition: 0.4s;
          color: #3b3b3b;
          font-weight: bold;

          div.seperate {
            position: absolute;
            width: 85%;
            top: -5%;
            height: 25%;
            margin-left: 3%;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            z-index: 1;
            background-color: #fefefe53;
          }
          img {
            position: relative;
            z-index: 2;
            filter: drop-shadow(-2px 2px 1px black);
            width: 40%;
            height: 50%;
            transition: 0.3s;
          }
        }

        button:hover {
          box-shadow: -2px 2px 5px transparent;

          img {
            transform: rotate(10deg);
          }
        }
      }
    }
  }

  @keyframes up-anim {
    0% {
      opacity: 1;
      bottom: 0%;
      height: 5%;
      color: transparent;
    }
    100% {
      height: 80%;
      opacity: 1;
      color: #153e1b;
    }
  }

  .card-main:hover {
    div.upward {
      display: block;
    }
  }

  @media (max-width: 1280px) {
  }

  @media (max-width: 820px) {
    .card-main {
      img {
        width: 60%;
        height: 46%;
      }
      div {
        h2 {
          font-size: 3vw;
        }
        p {
          font-size: 1.8vw;
        }
      }

      div.upward {
        div.loop {
          button {
            margin-bottom: 10%;
            padding: 8%;
            border-radius: 5px;
            font-size: 2.5vw;
            div.seperate {
              margin-left: 0%;
            }
          }
        }
      }
    }
  }

  @media (max-width: 520px) {
    .card-main {
      img {
        width: 60%;
        height: 48%;
      }
      div {
        h2 {
          font-size: 6vw;
        }
        p {
          font-size: 3.5vw;
        }
      }

      div.upward {
        div.loop {
          button {
            margin-bottom: 10%;
            padding: 15%;
            border-radius: 5px;
            font-size: 4.5vw;
            div.seperate {
              height: 35%;
              margin-left: -7%;
            }
            img {
              width: 50%;
              height: 60%;
            }
          }
        }
      }
    }
  }
`;
