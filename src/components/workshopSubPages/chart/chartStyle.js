import styled from "styled-components";

export const ChartStyleDiv = styled.div`
  img.header {
    width: 20%;
    position: absolute;
    top: 2%;
    left: 2%;
  }

  /* media queries ####### */
  @media (max-width: 1280px) {
  }
  @media (max-width: 820px) {
    img.header {
      width: 30%;
      position: absolute;
      top: 0.3%;
      left: 1%;
    }
  }
  @media (max-width: 520px) {
    img.header {
      width: 70%;
      position: relative;
      margin-left: 12%;
      margin-top: -5%;
    }
  }
`;
