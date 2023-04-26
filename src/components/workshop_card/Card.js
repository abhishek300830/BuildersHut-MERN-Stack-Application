import React from "react";
import { CardDiv } from "./cardStyle";
import hathoda from "../../images/favicon/hathoda2.png";
import { NavLink } from "react-router-dom";

const Card = ({ name, desc, url, index, btn1, btn2, btn3 }) => {
  return (
    <CardDiv>
      <div className="card-main">
        <img src={url} alt="builder" />

        <div>
          {index === 7 ? <h2>Coming {name}</h2> : <h2>{name} Builder</h2>}
          {index === 7 ? (
            <p>
              We will bring up some more Builders. Stay tuned <br /> <br />{" "}
              <br />{" "}
            </p>
          ) : (
            <p>{desc}</p>
          )}
        </div>

        {index !== 7 && (
          <div className="upward">
            <div className="loop">
              <NavLink to={`${name}`}>
                <button>
                  <img src={hathoda} alt="hathoda" />
                  <div className="seperate"></div>
                  <br />
                  {btn1}
                  {/* BUILD */}
                </button>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </CardDiv>
  );
};

export default Card;
