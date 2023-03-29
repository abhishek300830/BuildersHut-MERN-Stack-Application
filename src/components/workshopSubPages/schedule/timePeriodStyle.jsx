import styled from "styled-components";

export const TimePeriodContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 32% 32% 8% 8%;
  position: relative;
  width: 48%;
  background-color: white;
  border: 1px solid black;
  border-top: 2px solid black;
  /* padding: 2.5%; */
  border-radius: 5px;
  user-select: none;
  text-shadow: 0px 0px 3px white;
  align-items: center;

  .box1 {
    /* position: absolute; */
    display: flex;
    flex-direction: row;
    /* margin: -4.5%; */
    width: 80%;
    margin-left: 4%;
    height: 40px;
    margin-top: 4%;
    border-radius: 5px;
    overflow: hidden;
    border: 3px solid black;
    .horizontal11 {
      font-size: 1.2em;
      display: flex;
      flex-direction: row;
      width: 40px;
      height: 40px;
      overflow: hidden;
      align-items: center;
      justify-content: center;
      background-color: white;
      .tickIcon {
        transition: 0.3s;
        color: #24b300;
      }
    }
    .horizontal22 {
      height: 100%;
      width: 20%;
      background-color: #dddaec;
    }
  }
  .hours {
    display: flex;
    justify-content: end;
    padding: 2%;
  }
  .minutes {
    display: flex;
    padding: 2%;
    justify-content: start;
  }
  .prevIcon {
    color: black !important;
    transform: rotate(180deg);
    cursor: pointer;
    transition: 0.2s;
  }

  .nextIcon {
    transition: 0.2s;
    color: black !important;
    cursor: pointer;
  }
  .prevIcon:hover,
  .nextIcon:hover {
    /* filter: drop-shadow(0px 0px 1px black); */
    scale: 1.2;
  }
  /* .selectIcon {
    position: absolute;
    right: 5%;
    color: #252525;
    transform: rotate(180deg);
    transition: 0.2s;
  }
  .selectIcon2 {
    position: absolute;
    right: 5%;
    transition: 0.2s;
    color: #252525;
  } */
`;
