import styled from "styled-components";

const MemeContainer = styled.div`
  display: grid;
  grid-template-rows: 25% 75%;
  height: 79vh;

  .upper {
    display: grid;
    width: 95%;
    margin: auto;
    grid-template-columns: 4% 92% 4%;
    position: relative;
    border: 2px solid black;
    border-radius: 8px;
    /* background-color: #413c3c; */

    ::-webkit-scrollbar {
      display: none;
    }
    .leftArrow {
      /* background-color: black; */
      /* color: white; */
      margin: auto;
      svg {
        font-size: 60px;
      }
    }
    .meme-images {
      padding: 0.5%;
      border-left: 3px solid black;
      border-right: 3px solid black;
      display: flex;
      overflow: scroll;
      ::-webkit-scrollbar {
        display: none;
      }
      img {
        transition: 300ms;
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.845);
        border-radius: 4px;
        &:hover {
          overflow: visible;
          cursor: pointer;
          scale: 0.9;
        }
      }
    }
    .rightArrow {
      margin: auto;
      svg {
        font-size: 60px;
      }

      /* position: absolute; */
      /* right: 0; */
    }

    img {
      margin-left: 10px;
      width: auto;
      height: 16ch;
    }
  }
  .lower {
    display: grid;
    width: 100%;
    grid-template-columns: 50% 50%;
    .lower-left {
      margin: auto;
      h2 {
        text-align: center;
        border: 1px solid black;
        margin-bottom: 0;
        border-radius: 50px 50px 0 0;
      }
      img {
        margin-top: 0;
        height: 350px;
        width: auto;
        border: 1px solid black;
      }
      .when-not-image {
        background-color: #d1d1d1;
        height: 350px;
        width: 350px;
        text-align: center;
        border: 1px solid black;
        border-radius: 0px 0px 30px 30px;
        font-size: 25px;
        .selectImage {
          margin-top: 80px;
        }
      }
    }
    .lower-right {
      .memeEditorContainer {
        border: 1px solid black;
        border-radius: 10px;
        height: 380px;
        width: 90%;
        margin-top: 40px;
        background-color: #c0c0c0;
        text-align: center;
      }
    }
  }
  @media (max-width: 1280px) {
    .upper {
      .leftArrow {
        svg {
          font-size: 250%;
        }
      }
      .memeImages {
      }
      .rightArrow {
        svg {
          font-size: 250%;
        }
      }
    }
    .lower {
    }
  }
  @media (max-width: 820px) {
    .upper {
      grid-template-columns: 6% 88% 6%;
      .leftArrow {
      }
      .memeImages {
      }
      .rightArrow {
      }
    }
    .lower {
    }
  }
  @media (max-width: 520px) {
    .upper {
      grid-template-columns: 10% 80% 10%;
      .leftArrow {
        font-size: 80%;
      }
      .memeImages {
      }
      .rightArrow {
        font-size: 80%;
      }
    }
    .lower {
    }
  }
`;

export default MemeContainer;
