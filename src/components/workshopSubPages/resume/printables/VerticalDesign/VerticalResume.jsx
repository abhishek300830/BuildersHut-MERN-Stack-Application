import React, { useContext } from "react";
import { VerticalResumeConatainer } from "./VerticalResumeStyle";

//icons
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";

import builderContext from "../../../../../context/builderContext";
import { Button } from "@mui/material";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const VerticalResume = () => {
  // Context
  const {
    fields,
    personalData,
    addrData,
    skillData,
    projectData,
    intershipData,
    othersData,
    hobbieData,
    qualifData,
    profileInfo,
    // setProfileInfo,
    languages,
    // setLanguages,
    extracurr,
    // setExtracurr,
    backTheme,
  } = useContext(builderContext);

  // to download verticle
  const downloadPdfDocument = (rootElementId) => {
    const input = document.getElementById(rootElementId);
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      var pdf = new jsPDF("p", "mm", "a4");
      var width = pdf.internal.pageSize.getWidth();
      var height = pdf.internal.pageSize.getHeight();
      // const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0, width, height);
      pdf.save("download.pdf");
    });
  };

  return (
    <>
      <div className="printdiv" style={{ textAlign: "center" }}>
        <Button
          variant="contained"
          sx={{
            background: "red",
          }}
          className="noprint printButton"
          onClick={() => downloadPdfDocument("printThisVertical")}
        >
          Print Your Resume
        </Button>
      </div>

      <VerticalResumeConatainer>
        <div className="page">
          <div className="subpage" id="printThisVertical">
            <div
              className="upper-part"
              style={{ background: backTheme.primary }}
            >
              <div className="upper-part1">
                <img
                  src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-business-user-profile-vector-png-image_1541960.jpg"
                  alt=""
                />
              </div>
              <div className="upper-part2">
                <h2 className="firstName">{personalData.name.split(" ", 1)}</h2>
                <h2 className="lastName">
                  {personalData.name.split(" ", 3)[1]}{" "}
                  {personalData.name.split(" ", 3)[2]}
                </h2>
                {/* <Divider /> */}
                {/* <h3 className="position">Fresher</h3> */}
              </div>
              <div className="upper-part3">
                <div className="phone">
                  <span className="icons">
                    <LocalPhoneRoundedIcon sx={{ color: "white" }} />
                  </span>
                  {/* mobile Number */}
                  <span className="detail">{addrData.mobile}</span>
                </div>
                <div className="email">
                  <span className="icons">
                    <EmailRoundedIcon sx={{ color: "white" }} />
                  </span>
                  {/* Email */}
                  <span className="detail">{addrData.email}</span>
                </div>
                <div className="address">
                  <span className="icons">
                    <LocationOnRoundedIcon sx={{ color: "white" }} />
                  </span>
                  <span className="detail">
                    {/* address */}
                    {addrData.city !== "" && (
                      <>
                        {addrData.city}, {addrData.state}, {addrData.pincode}
                      </>
                    )}
                  </span>
                </div>
                <div className="other">
                  <span className="icons">
                    <PublicRoundedIcon sx={{ color: "white" }} />
                  </span>
                  {/* Other Social Links */}
                  <span className="detail">{addrData.other}</span>
                </div>
              </div>
            </div>
            <div className="lower-part">
              <div className="lower-left">
                <div className="subpart1">
                  <span
                    className="subheading"
                    style={{ background: backTheme.primary }}
                  >
                    About Me
                  </span>
                  <p className="bio">
                    {/* profile Bio */}
                    {profileInfo}
                  </p>
                </div>
                <div className="subpart2">
                  <span
                    className="subheading"
                    style={{ background: backTheme.primary }}
                  >
                    Education
                  </span>
                  <div className="educationTable">
                    <div className="row">
                      <div className="qualification">Graduation</div>
                      <div className="percent">{qualifData.perc1}%</div>
                      <div className="year">{qualifData.year1}</div>
                    </div>
                    <span className="schoolName">( {qualifData.inst1} )</span>
                    <div className="row">
                      <div className="qualification">Intemediate</div>
                      <div className="percent">{qualifData.perc2}%</div>
                      <div className="year">{qualifData.year2}</div>
                    </div>
                    <span className="schoolName">( {qualifData.inst2} )</span>

                    <div className="row">
                      <div className="qualification">Matriculation</div>
                      <div className="percent">{qualifData.perc2}%</div>
                      <div className="year">{qualifData.year3}</div>
                    </div>
                    <span className="schoolName">( {qualifData.inst3} )</span>
                  </div>
                </div>
                <div className="subpart3">
                  <span
                    className="subheading"
                    style={{ background: backTheme.primary }}
                  >
                    Technical Skills
                  </span>
                  <ul className="list">
                    {/* Technical Skills */}

                    {skillData.map((value, idx) => {
                      console.log("value", value);
                      return (
                        <li className="item" key={idx}>
                          {value.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="subpart4">
                  {/* Interpersonal Skills */}
                  <span
                    className="subheading"
                    style={{ background: backTheme.primary }}
                  >
                    Interest And Hobbies
                  </span>
                  <ul className="list">
                    {hobbieData.map((value, idx) => {
                      return (
                        <li className="item" key={idx}>
                          {value.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="subpart5">
                  <span
                    className="subheading"
                    style={{ background: backTheme.primary }}
                  >
                    Personal Details
                  </span>
                  <div className="personalDetails">
                    <b>DOB </b>: {personalData.dob}
                  </div>
                  <div className="personalDetails">
                    <b> Languages : </b>
                    {languages.map((value, idx) => {
                      return (
                        <span key={idx}>
                          {idx !== 0 ? " | " : ""}
                          {value}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div
                className="lower-right"
                style={{ background: backTheme.secondary }}
              >
                <div className="right-subpart1">
                  <span
                    className="subheading"
                    style={{ background: backTheme.primary }}
                  >
                    Trainings And Internship
                  </span>
                  {intershipData.length > 0 && (
                    <>
                      {intershipData.map((value, idx) => {
                        return (
                          <div key={idx}>
                            <p className="trainingDetails">{value.name}</p>
                            <span className="training-date">{value.date}</span>
                          </div>
                        );
                      })}
                    </>
                  )}
                  {othersData.length > 0 && (
                    <>
                      {othersData.map((value, idx) => {
                        return (
                          <div key={idx}>
                            <p className="trainingDetails">{value.name}</p>
                            <span className="training-date">{value.date}</span>
                          </div>
                        );
                      })}
                    </>
                  )}
                </div>
                {projectData.length > 0 && (
                  <div className="right-subpart2">
                    <span
                      className="subheading"
                      style={{ background: backTheme.primary }}
                    >
                      Projects
                    </span>
                    {projectData.length > 0 && (
                      <>
                        {projectData.map((value, idx) => {
                          return (
                            <div className="projects" key={idx}>
                              <p className="projectname">{value.name}</p>
                              <span className="date">{value.date}</span>
                            </div>
                          );
                        })}
                      </>
                    )}
                  </div>
                )}

                <div className="right-subpart3">
                  <span
                    className="subheading"
                    style={{ background: backTheme.primary }}
                  >
                    Certificate and Achievements
                  </span>
                  <ul className="achievements">
                    {fields.map((value, idx) => {
                      return (
                        <li className="item" key={idx}>
                          {value.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="right-subpart4">
                  <span
                    className="subheading"
                    style={{ background: backTheme.primary }}
                  >
                    Extra Curricular Activities
                  </span>
                  <ul className="extraActivities">
                    {extracurr.map((value, idx) => {
                      return (
                        <li className="item" key={idx}>
                          {value.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </VerticalResumeConatainer>
    </>
  );
};

export default VerticalResume;
