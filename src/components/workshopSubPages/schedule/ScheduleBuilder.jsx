import { Box } from "@mui/material";
import React, { useState } from "react";
import { CssTextField } from "../../orangeTextBox/CssTextField";
import { ScheduleStyleDiv } from "./scheduleStyle";
import dusturImg from "../../../images/taskBuilder/cross.png";
import blackBg from "../../../images/taskBuilder/bgBlackBoard.jpg";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import EjectIcon from "@mui/icons-material/Eject";

const ScheduleBuilder = () => {
  const [data_12, setData_12] = useState([
    { id: 1, task: "I want ot complete my Assignments till MOnday." },
    { id: 2, task: "I need to take a nap" },
    { id: 3, task: "I need to watch a movie" },
    { id: 4, task: "I will go to the restaurant for dinner" },
    { id: 5, task: "I will go to the restaurant for dinner at home" },
    { id: 6, task: "I will go to the restaurant for dinner at home" },
  ]);

  const dusturAnimation = (indx) => {
    document.getElementById(`display-dust-${indx}`).style.display = "block";
    document.getElementById(`hide-dust-${indx}`).style.display = "none";
  };
  var show = false;
  const [onSelect, setOnSelect] = useState(true);

  const handleSelect = () => {
    const view = document.getElementById("selectoptions");

    if (show) {
      view.style.display = "none";
      show = false;
      setOnSelect(true);
    } else {
      view.style.display = "block";
      show = true;
      setOnSelect(false);
    }
  };
  const [data_24, setData_24] = useState([
    { id: 1, task: "Sleep" },
    { id: 2, task: "I need to take a nap" },
    { id: 3, task: "I need to watch a movie" },
    { id: 4, task: "I will go to the restaurant for dinner" },
    { id: 5, task: "I will go to the restaurant for dinner at home" },
  ]);

  const deleteTaskHandler_12 = (indx) => {
    setData_12(data_12.filter((data) => data.id !== indx));
  };

  const deleteTaskHandler_24 = (indx) => {
    setData_24(data_24.filter((data) => data.id !== indx));
  };

  // Priority

  const priorityArray = [
    { p: "Highest", color: "#039b15" },
    { p: "High", color: "#58c941" },
    { p: "Medium", color: "#9bd28f" },
    { p: "Low", color: "#ff9191" },
    { p: "Lowest", color: "#fe6767" },
    { p: "Not Important", color: "#ff0000" },
  ];

  // priority
  const [priority, setPriority] = useState();
  const handlePriority = (val, idx, color) => {
    setPriority({ val, idx, color });
    const changeColor = document.getElementById("colorChange");
    changeColor.style.backgroundColor = color;
  };
  return (
    <ScheduleStyleDiv>
      <section className="sMain">
        <div className="left">
          <div className="subheads">Schedule Builder</div>

          <div className="user-input">
            <h4 className="schedule-intro">
              It helps you to build your whole day Schedule with ease.
            </h4>

            {/* box  */}
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": {
                  m: 1,
                  width: "25ch",
                  background: "white",
                  borderRadius: "0.8ch",
                },
                "& .MuiButton-root": {
                  m: 1,
                  width: "30ch",
                  height: "6.5ch",
                },
              }}
              noValidate
              autoComplete="off"
              id="select-2"
              style={{
                padding: "10px",
                textAlign: "center",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <div className="entertask">Enter Your Task Here </div>
              <CssTextField
                placeholder="Enter Here"
                variant="outlined"
                style={{ marginTop: "10px", textAlign: "center", width: "80%" }}
                // value={personalData.name}
                // onChange={(ev)=>(setPersonalData({...personalData,name:ev.target.value}))}
                color="success"
              />
              <br />
              <div
                className="selectionContainer"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "80%",
                  margin: "auto",
                }}
              >
                <div
                  className="selectButton"
                  id="colorChange"
                  onClick={handleSelect}
                >
                  <div className="box">
                    <div className="horizontal1">
                      <TaskAltIcon className="tickIcon" />
                    </div>
                    <div className="horizontal2"></div>
                  </div>

                  {priority ? priority.val : "Select Priority"}
                  {onSelect ? (
                    <EjectIcon className="selectIcon" />
                  ) : (
                    <EjectIcon className="selectIcon2" />
                  )}
                </div>

                <div className="mainbutton" id="selectoptions">
                  {priorityArray.map((val, idx) => {
                    return (
                      <div
                        className="selectPriority"
                        key={idx}
                        style={{ animationDelay: `${(idx + 1) * 0.1}s` }}
                        onClick={() => {
                          handlePriority(val.p, idx + 1, val.color);
                        }}
                      >
                        <div className="box">
                          <div className="horizontal1">
                            <TaskAltIcon className="tickIcon" />
                          </div>
                          <div className="horizontal2"></div>
                        </div>
                        <div
                          className="content"
                          style={{ backgroundColor: val.color }}
                        >
                          {val.p}
                        </div>
                        <div
                          className="arrow"
                          style={{ borderLeftColor: val.color }}
                        ></div>

                        <div></div>
                      </div>
                    );
                  })}
                </div>

                {/* time period */}
                <div className="selectButton">Select Time</div>
              </div>
              {/* </Box> */}
              <br />

              {onSelect && (
                <button className="all-btns">
                  <lord-icon
                    src="https://cdn.lordicon.com/ynwbvguu.json"
                    trigger="hover"
                    colors="primary:#000000"
                    style={{
                      width: "40px",
                      height: "40px",
                    }}
                  ></lord-icon>
                </button>
              )}
            </Box>
          </div>
        </div>

        {/* a4 size template  */}
        <div className="right" id="right-part">
          <div
            className="generate-tables"
            style={{ backgroundImage: `url(${blackBg})` }}
            id="bb-1"
          >
            <section className="table-head">
              <b className="b1">Priority</b>
              <b>Task ( 12 hours Table )</b>
              <b className="b3">asd</b>
            </section>

            {data_12.length === 0 && (
              <section className="content">
                <div></div>
                <div className="tasks">Nothing...</div>
              </section>
            )}

            {data_12.map((val, indx) => (
              <section className="content" key={indx}>
                <div>{indx + 1}.</div>
                <div className="tasks">{val.task}</div>
                <img
                  src={dusturImg}
                  className="dusturImg"
                  alt="cross"
                  onClick={() => deleteTaskHandler_12(val.id)}
                />
              </section>
            ))}

            <section className="bottom">
              <div></div>
              <div></div>
              <div></div>
            </section>
          </div>

          <div
            className="generate-tables"
            style={{
              marginTop: "5%",
              backgroundImage: `url(${blackBg})`,
              borderColor: "#0f6d07",
              top: 0,
            }}
            id="bb-2"
          >
            <section className="table-head">
              <b className="b1">Priority</b>
              <b>Task ( 24 hours Table )</b>
              <b className="b3">asd</b>
            </section>

            {data_24.map((val, indx) => (
              <section className="content" key={indx}>
                <div>{indx + 1}.</div>
                <div className="tasks">{val.task}</div>
                {/* <button>X</button> */}
                {indx > 0 && (
                  <img
                    src={dusturImg}
                    className="dusturImg"
                    alt="dustur"
                    onClick={() => deleteTaskHandler_24(val.id)}
                  />
                )}
              </section>
            ))}

            <section className="bottom">
              <div></div>
              <div></div>
              <div></div>
            </section>
          </div>
        </div>
      </section>
    </ScheduleStyleDiv>
  );
};

export default ScheduleBuilder;
