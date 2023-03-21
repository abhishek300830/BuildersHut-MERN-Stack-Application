import builderContext from "./builderContext";

import React, { useState } from "react";

const BuilderState = (props) => {
  //   console.log("props", props);

  const [themebg, setThemebg] = useState("white");
  const [formbg, setFormbg] = useState("#faf6f6");
  const [borderbg, setBorderbg] = useState("black");

  // personal data
  const [personalData, setPersonalData] = useState({ name: "", dob: "" });
  const [addrData, setAddrData] = useState({
    city: "",
    state: "",
    pincode: "",
    mobile: "",
    email: "",
    other: "",
  });
  // templete alignment
  const [alignment, setAlignment] = useState("horizontal");

  //  languages and bio
  const [languages, setLanguages] = useState([]);
  const [profileInfo, setProfileInfo] = useState(
    " Ex. I have core knowledge of Front-End and Back-End Web Development and working on Mern Stack Development and Data Structure and algorithms in java and Python with few libraries and learning Ethical Hacking."
  );

  // acheivement state (all fields data)
  const [fields, setFields] = useState([]);

  // extra curricular data
  const [extracurr, setExtracurr] = useState([]);

  // skills state (all fields data)
  const [skillData, setSkillData] = useState([]);

  // projects and internships data
  const [projectData, setProjectData] = useState([]);
  const [intershipData, setIntershipData] = useState([]);
  const [othersData, setOthersData] = useState([]);

  // interests and hobbies data
  const [hobbieData, setHobbieData] = useState([]);

  // qualification data
  const [qualifData, setQualifData] = useState({
    grad: "",
    year1: "",
    perc1: "",
    inst1: "",
    year2: "",
    perc2: "",
    inst2: "",
    year3: "",
    perc3: "",
    inst3: "",
  });

  const [backTheme, setBackTheme] = useState({
    primary: "#191919",
    secondary: "#c7c7c7d4",
  });

  // const headings in resume builder
  const headings = [
    " personal details",
    " qualifications",
    " skills-projects-internships",
    " acheivements",
  ];

  return (
    <builderContext.Provider
      value={{
        formbg,
        themebg,
        setThemebg,
        setFormbg,
        setBorderbg,
        borderbg,
        fields,
        setFields,
        personalData,
        setPersonalData,
        addrData,
        setAddrData,
        languages,
        setLanguages,
        profileInfo,
        setProfileInfo,
        skillData,
        setSkillData,
        projectData,
        setProjectData,
        intershipData,
        setIntershipData,
        othersData,
        setOthersData,
        hobbieData,
        setHobbieData,
        qualifData,
        setQualifData,
        headings,
        extracurr,
        setExtracurr,
        backTheme,
        setBackTheme,
        alignment,
        setAlignment,
      }}
    >
      {props.children}
    </builderContext.Provider>
  );
};

export default BuilderState;
