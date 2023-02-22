import React from "react";
import { VerticalResumeConatainer } from "./VerticalResumeStyle";

//icons
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import { Divider } from "@mui/material";

const VerticalResume = () => {
  return (
    <VerticalResumeConatainer>
      <div className="page">
        <div className="subpage">
          <div className="upper-part">
            <div className="upper-part1">
              <img
                src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-business-user-profile-vector-png-image_1541960.jpg"
                alt=""
              />
            </div>
            <div className="upper-part2">
              <h2 className="firstName">Abhishek</h2>
              <h2 className="lastName">Kumar</h2>
              <Divider />
              <h3 className="position">MERN Stack Developer</h3>
            </div>
            <div className="upper-part3">
              <div className="phone">
                <span className="icons">
                  <LocalPhoneRoundedIcon sx={{ color: "white" }} />
                </span>
                <span className="detail">9759250020</span>
              </div>
              <div className="email">
                <span className="icons">
                  <EmailRoundedIcon sx={{ color: "white" }} />
                </span>
                <span className="detail">Abhishek300830@gmail.com</span>
              </div>
              <div className="address">
                <span className="icons">
                  <LocationOnRoundedIcon sx={{ color: "white" }} />
                </span>
                <span className="detail">
                  Saharanpur,Uttar Pradesh , 123456
                </span>
              </div>
              <div className="other">
                <span className="icons">
                  <PublicRoundedIcon sx={{ color: "white" }} />
                </span>
                <span className="detail">github.com/abhishek300830</span>
              </div>
            </div>
          </div>
          <div className="lower-part">
            <div className="lower-left">
              <div className="subpart1">
                <span className="subheading">About Me</span>
                <p className="bio">
                  I have core knowledge of Front-End and Back-End Web
                  Development and working on Mern Stack Development and Data
                  Structure and algorithms in java and Python with few libraries
                  and learning Ethical Hacking
                </p>
              </div>
              <div className="subpart2">
                <span className="subheading">Education</span>
                <div className="educationTable">
                  <div className="row">
                    <div className="qualification">BE CSE</div>
                    <div className="percent">8.5 CGPA</div>
                    <div className="year">2024</div>
                  </div>
                  <div className="row">
                    <div className="qualification">Intemediate (CBSE)</div>
                    <div className="percent">88 %</div>
                    <div className="year">2019</div>
                  </div>
                  <div className="row">
                    <div className="qualification">Matriculation</div>
                    <div className="percent">10 CGPA</div>
                    <div className="year">2017</div>
                  </div>
                </div>
              </div>
              <div className="subpart3">
                <span className="subheading">Technical Skills</span>
                <ul className="list">
                  <li className="item">Full Stack Web Development</li>
                  <li className="item">JAVA</li>
                  <li className="item">C++</li>
                  <li className="item">JAVASCRIPT</li>
                  <li className="item">Video Editing</li>
                </ul>
              </div>
              <div className="subpart4">
                <span className="subheading">Interpersonal Skills</span>
                <ul className="list">
                  <li className="item">Time Management</li>
                  <li className="item">Team Working</li>
                  <li className="item">Adaptability</li>
                  <li className="item">Coordination</li>
                </ul>
              </div>
              <div className="subpart5">
                <span className="subheading">Personal Details</span>
                <div className="personalDetails">DOB : 28 September 2024</div>
                <div className="personalDetails">
                  Languages : English | Hindi | Punjabi
                </div>
              </div>
            </div>
            <div className="lower-right">
              <div className="right-subpart1">
                <span className="subheading">Trainings</span>
                <div>
                  <p className="trainingDetails">
                    React Training From Internshala
                  </p>
                  <span className="training-date">july 2022</span>
                </div>
                <div>
                  <p className="trainingDetails">
                    Summer Training of Web Development
                  </p>
                  <span className="training-date">july 2022</span>
                </div>
              </div>
              <div className="right-subpart2">
                <span className="subheading">Projects</span>
                <div className="projects">
                  <p className="projectname">Brainiac Web Application</p>
                  <span className="date">July 2022</span>
                </div>
                <div className="projects">
                  <p className="projectname">Brainiac Web Application</p>
                  <span className="date">July 2022</span>
                </div>
                <div className="projects">
                  <p className="projectname">Brainiac Web Application</p>
                  <span className="date">July 2022</span>
                </div>
                <div className="projects">
                  <p className="projectname">Brainiac Web Application</p>
                  <span className="date">July 2022</span>
                </div>
              </div>
              <div className="right-subpart3">
                <span className="subheading">Certificate and Achievements</span>
                <ul className="achievements">
                  <li className="item">5 Star JS Programmer on HackerRank</li>
                  <li className="item">5 Star JS Programmer on HackerRank</li>
                  <li className="item">5 Star JS Programmer on HackerRank</li>
                  <li className="item">5 Star JS Programmer on HackerRank</li>
                  <li className="item">5 Star JS Programmer on HackerRank</li>
                </ul>
              </div>
              <div className="right-subpart4">
                <span className="subheading">Extra Curricular Activities</span>
                <ul className="extraActivities">
                  <li className="item">
                    Front-End Web Frameworks: Bootstrap 4
                  </li>
                  <li className="item">
                    Front-End Web Frameworks: Bootstrap 4
                  </li>
                  <li className="item">
                    Front-End Web Frameworks: Bootstrap 4
                  </li>
                  <li className="item">
                    Front-End Web Frameworks: Bootstrap 4
                  </li>
                  <li className="item">
                    Front-End Web Frameworks: Bootstrap 4
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </VerticalResumeConatainer>
  );
};

export default VerticalResume;
