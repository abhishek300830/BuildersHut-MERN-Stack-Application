import React, { useContext, useEffect, useState } from "react";
import yogaImage from "../../../images/auraBuilder/yoga.png";
import { AuraContainer } from "./auraStyle";
import style1 from "../../../images/auraBuilder/design1.png";
import style2 from "../../../images/auraBuilder/design2.png";
import style3 from "../../../images/auraBuilder/design3.png";
import style4 from "../../../images/auraBuilder/design4.png";
import builderContext from "../../../context/builderContext";
import music1 from "../../../music/classical-guitar.mp3";
import music2 from "../../../music/reflected-light.mp3";
import music3 from "../../../music/relaxed.mp3";
import music4 from "../../../music/relaxing.mp3";

const AuraBuilder = () => {
  const { indexOfColor, setIndexOfColor } = useContext(builderContext);
  const [currentMusic, setCurrentMusic] = useState(music1);

  let colors = ["#0000000", "#01adef", "#ff0000", "#01a651", "#fdb501"];
  let musics = [music1, music1, music2, music3, music4];

  useEffect(() => {
    document.getElementById("bg-change").style.background =
      colors[indexOfColor];
  });

  function onClickHandler(indx) {
    setIndexOfColor(indx);
    document.getElementById("circle").style.display = "block";
    document.getElementById("circle").style.background = colors[indx];
    let audio = document.getElementById("audio");
    setCurrentMusic(musics[indx]);
    audio.play();
    setTimeout(() => {
      document.getElementById("circle").style.display = "none";
    }, 500);
  }

  return (
    <AuraContainer>
      <audio id="audio" src={currentMusic} hidden></audio>
      <article id="bg-change"></article>
      <article id="circle"></article>
      <section>
        <img
          src={style1}
          data-aos="zoom-in"
          data-aos-duration="2000"
          onClick={() => onClickHandler(1)}
          alt="anahata"
          className="top-left common"
        />
        <img
          src={style2}
          data-aos="zoom-in"
          data-aos-duration="2000"
          onClick={() => onClickHandler(2)}
          alt="muladhara"
          className="top-right common"
        />
        <img
          src={style3}
          data-aos="zoom-in"
          data-aos-duration="2000"
          onClick={() => onClickHandler(3)}
          alt="manipura"
          className="bottom-left common"
        />
        <img
          src={style4}
          data-aos="zoom-in"
          data-aos-duration="2000"
          onClick={() => onClickHandler(4)}
          alt="ajna"
          className="bottom-right common"
        />
      </section>
      <img
        src={yogaImage}
        data-aos="fade-up"
        alt="personImage"
        className="yoga-man"
      />
    </AuraContainer>
  );
};

export default AuraBuilder;
