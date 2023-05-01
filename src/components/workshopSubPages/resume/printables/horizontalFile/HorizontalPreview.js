import React, { useContext } from "react";
import builderContext from "../../../../../context/builderContext";
import { HorizontalPrevStyleDiv } from "./horizontalStyle";
import idphoto from "../../../../../images/left out/idcard.jpg";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Button } from "@mui/material";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const HorizontalPreview = () => {
  const {
    image,
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

  // to download pdf
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
          onClick={() => downloadPdfDocument("printThis")}
        >
          Print Your Resume
        </Button>
      </div>
      <HorizontalPrevStyleDiv>
        <div class="Main">
          <div class="page-y">
            <div class="horizontalPage" id="printThis">
              {/* left section of resume  */}
              <div className="left-section">
                <div
                  className="addrs"
                  style={{ background: backTheme.primary }}
                >
                  <img src={image ? image : idphoto} alt="profilePhoto" />

                  <div>
                    <LocationOnIcon fontSize="large" />
                    <h3>Address</h3>
                    <span></span>
                    <p>
                      {" "}
                      {addrData.city}, {addrData.state}, {addrData.pincode}
                    </p>
                  </div>

                  <div>
                    <LocalPhoneIcon fontSize="large" />
                    <h3>Phone</h3>
                    <span></span>
                    <p>{addrData.mobile}</p>
                  </div>

                  <div>
                    <EmailIcon fontSize="large" />
                    <h3>Email</h3>
                    <span></span>
                    <p>{addrData.email}</p>
                  </div>
                </div>

                <section className="rest">
                  <div
                    className="skills"
                    style={{ background: backTheme.secondary }}
                  >
                    <h2>SKILLS</h2>
                    <div>
                      {skillData.map((val, indx) => (
                        <span
                          key={indx}
                          style={{ background: backTheme.primary }}
                        >
                          {val.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div
                    className="hobbies"
                    style={{ background: backTheme.secondary }}
                  >
                    <h2>INTEREST & HOBBIES</h2>
                    <div>
                      {hobbieData.map((val, indx) => (
                        <span
                          key={indx}
                          style={{ background: backTheme.primary }}
                        >
                          {val.name}{" "}
                        </span>
                      ))}
                    </div>
                  </div>
                </section>
              </div>

              {/* right sectio nof resume  */}
              <div className="right-section">
                <div
                  className="bio"
                  style={{ background: backTheme.secondary }}
                >
                  <h1>{personalData.name}</h1>
                  <h3>PROFILE</h3>
                  <p>{profileInfo}</p>
                  <h3>PERSONAL DETAILS</h3>
                  <b>D.O.B - </b>
                  {personalData.dob}
                  <br />
                  <b>Languages Known - </b>

                  <div>
                    {languages.map((val, indx) => (
                      <span key={indx}>
                        {val} <b> | </b>{" "}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="qualifications">
                  <h3>QUALIFICATIONS</h3>

                  <table>
                    <tr>
                      <td>
                        <b>Graduation</b>
                      </td>
                      <td>in</td>
                      <td>BE - CSE </td>
                      <td>- {qualifData.year1}</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>from </td>
                      <td>{qualifData.inst1}</td>
                    </tr>
                    <br />
                    <tr>
                      <td>
                        <b>Intermediate</b>{" "}
                      </td>
                      <td>in</td>
                      <td>Science </td>
                      <td>- {qualifData.year2}</td>
                    </tr>

                    <tr>
                      <td></td>
                      <td>from</td>
                      <td>{qualifData.inst3}</td>
                    </tr>
                    <br />
                    <tr>
                      <td>
                        <b>Matriculation</b>
                      </td>
                      <td></td>
                      <td></td>
                      <td>- {qualifData.year3}</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>from</td>
                      <td>{qualifData.inst3}</td>
                    </tr>
                  </table>
                </div>

                <div className="projects">
                  <h3>PROJECTS AND INTERNSHIPS</h3>
                  {projectData.length > 0 && (
                    <>
                      <b>Projects</b>
                      {projectData.map((val, indx) => (
                        <li key={indx}>
                          {val.name} - on {val.date}
                        </li>
                      ))}
                    </>
                  )}
                  {intershipData.length > 0 && (
                    <>
                      <b>Interships</b>
                      {intershipData.map((val, indx) => (
                        <li key={indx}>
                          {val.name} - on {val.date}
                        </li>
                      ))}
                    </>
                  )}
                  {othersData.length > 0 && (
                    <>
                      <b>Others</b>
                      {othersData.map((val, indx) => (
                        <li key={indx}>
                          {val.name} - on {val.date}
                        </li>
                      ))}
                    </>
                  )}
                </div>

                <div className="acheivements">
                  <h3>CERTIFICATION & ACHIEVEMENTS</h3>
                  {fields.map((val, indx) => (
                    <li key={indx}>{val.name}</li>
                  ))}
                </div>

                <div className="extra">
                  <h3>EXTRA CURRICULAR ACTIVITIES</h3>
                  {extracurr.map((val, indx) => (
                    <li key={indx}>{val.name}</li>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </HorizontalPrevStyleDiv>
    </>
  );
};

export default HorizontalPreview;
