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
    background-color: aliceblue;
    /* overflow: scroll; */
    /* align-items: center; */
    ::-webkit-scrollbar {
      display: none;
    }
    .leftArrow {
      margin: auto;
      svg {
        font-size: 60px;
      }
    }
    .meme-images {
      border-left: 3px solid black;
      border-right: 3px solid black;
      display: flex;
      overflow: scroll;
      ::-webkit-scrollbar {
        display: none;
      }
    }
    .rightArrow {
      /* border-left: 2px solid black; */
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
    background-color: aqua;
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
