import { Box } from "@mui/material";
import React, { useContext, useState } from "react";
import { CssTextField } from "../../orangeTextBox/CssTextField";
import { ScheduleStyleDiv } from "./scheduleStyle";
import { TimePeriodContainer } from "./timePeriodStyle";
import builderContext from "../../../context/builderContext";

// icons import
// import blackBg from "../../../images/taskBuilder/bgBlackBoard.jpg";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import dusturImg from "../../../images/taskBuilder/cross.png";
import EjectIcon from "@mui/icons-material/Eject";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const ScheduleBuilder = () => {
  // enter task-nname state

  const {
    taskData,
    setTaskData,
    taskData_24,
    setTaskData_24,
    timePassed,
    setTimePassed,
  } = useContext(builderContext);

  const [taskName, setTaskName] = useState("");

  const deleteTaskHandler_12 = (indx) => {
    setTimePassed(timePassed - taskData_24[indx].taskTime);
    setTaskData(taskData.filter((data, indx1) => indx1 !== indx));
  };

  const deleteTaskHandler_24 = (indx) => {
    setTaskData_24(taskData_24.filter((data, indx1) => indx1 !== indx));
  };

  // priority data
  const [priority, setPriority] = useState("");
  const handlePriority = (val, idx, color) => {
    setPriority({ val, idx, color });
    const changeColor = document.getElementById("colorChange");
    changeColor.style.backgroundColor = color;
    handleSelect();
  };

  // Priority functions
  const [onSelect, setOnSelect] = useState(true);
  const handleSelect = () => {
    const view = document.getElementById("selectoptions");

    if (onSelect) {
      view.style.display = "block";
      setOnSelect(false);
    } else {
      view.style.display = "none";
      setOnSelect(true);
    }
  };
  const priorityArray = [
    { p: "Highest", color: "#039b15" },
    { p: "High", color: "#58c941" },
    { p: "Medium", color: "#9bd28f" },
    { p: "Low", color: "#ff9191" },
    { p: "Lowest", color: "#fe6767" },
    { p: "Not Important", color: "#ff0000" },
  ];

  // time
  const totalTime = ["10", "30", "01", "02", "03", "04", "05"];
  const [indxOfTime, setIndxOfTime] = useState(-1);

  const increaseTimer = () => {
    if (indxOfTime < 6) {
      setIndxOfTime((prev) => ++prev);
    }
  };
  const decreaseTimer = () => {
    if (indxOfTime > 0) {
      setIndxOfTime((prev) => --prev);
    }
  };

  const flag =
    taskName.length === 0 || indxOfTime === -1 || priority.length === 0;

  const handleOnclickButton = () => {
    if (flag) {
      // warning
      document.getElementById("alert").innerHTML = "Please Enter all Fields.";
    } else {
      var timeTOadd = Number.parseInt(totalTime[indxOfTime]);
      if (timeTOadd !== 10 && timeTOadd !== 30) {
        timeTOadd *= 60;
      }

      setTimePassed(timePassed + timeTOadd);

      const cond = timePassed + timeTOadd;
      if (cond <= 720) {
        setTaskData([
          ...taskData,
          {
            taskName: taskName,
            taskPriority: priority.idx,
            taskTime: timeTOadd,
          },
        ]);
      }
      setTaskData_24([
        ...taskData_24,
        { taskName: taskName, taskPriority: priority.idx, taskTime: timeTOadd },
      ]);
      setTaskName("");
      setPriority("");
      const changeColor = document.getElementById("colorChange");
      changeColor.style.backgroundColor = "white";
    }
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
                color="success"
                value={taskName}
                onChange={(ev) => setTaskName(ev.target.value)}
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

                  {priority ? (
                    priority.val
                  ) : (
                    <span style={{ color: "black", textShadow: "none" }}>
                      Select Priority
                    </span>
                  )}
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
                <TimePeriodContainer>
                  <div className="box1">
                    <div className="horizontal11">
                      <AvTimerIcon style={{ color: "blue" }} />
                    </div>
                    <div className="horizontal22"></div>
                  </div>

                  {indxOfTime === -1 && (
                    <>
                      <div className="hours">Select</div>
                      <div className="minutes">Time</div>
                    </>
                  )}
                  {indxOfTime > -1 && (
                    <>
                      <div className="hours">{totalTime[indxOfTime]}</div>
                      <div className="minutes">
                        {indxOfTime === 0 || indxOfTime === 1
                          ? "minutes"
                          : "hours"}
                      </div>
                    </>
                  )}

                  <div className="prevTime" onClick={decreaseTimer}>
                    <PlayArrowIcon className="prevIcon" />
                  </div>
                  <div className="nextTime" onClick={increaseTimer}>
                    <PlayArrowIcon className="nextIcon" />
                  </div>
                </TimePeriodContainer>
              </div>
              {/* </Box> */}
              <br />
              {flag && (
                <div
                  id="alert"
                  style={{ color: "red", textAlign: "center" }}
                ></div>
              )}
              {onSelect && (
                <button className="all-btns" onClick={handleOnclickButton}>
                  <lord-icon
                    src="https://cdn.lordicon.com/ynwbvguu.json"
                    trigger="hover"
                    colors="primary:#000000"
                    style={{
                      width: "40px",
                      height: "40px",
                      opacity: flag ? 0.6 : 1,
                    }}
                  ></lord-icon>
                </button>
              )}
            </Box>
          </div>
        </div>

        {/* a4 size template  */}
        <div className="right" id="right-part">
          <div className="generate-tables" id="bb-1">
            <section className="table-head">
              <b className="b1">Priority</b>
              <b>Task ( 12 hours Table )</b>
              <b className="b3">asd</b>
            </section>

            {taskData.length === 0 && (
              <section className="content">
                <div></div>
                <div className="tasks">Nothing...</div>
              </section>
            )}

            {taskData.map((val, indx) => (
              <section className="content" key={indx}>
                <div>{indx + 1}.</div>
                <div className="tasks">{val.taskName}</div>
                <img
                  src={dusturImg}
                  className="deleteImg"
                  alt="cross"
                  onClick={() => deleteTaskHandler_12(indx)}
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
              // backgroundImage: `url(${blackBg})`,
              // borderColor: "#0f6d07",
              top: 0,
            }}
            id="bb-2"
          >
            <section className="table-head">
              <b className="b1">Priority</b>
              <b>Task ( 24 hours Table )</b>
              <b className="b3">asd</b>
            </section>

            {/* //sleep  */}
            <section className="content">
              <div>1.</div>
              <div className="tasks">sleep</div>
            </section>

            {taskData_24.map((val, indx) => (
              <section className="content" key={indx}>
                <div>{indx + 2}.</div>
                <div className="tasks">{val.taskName}</div>
                {/* <button>X</button> */}
                <img
                  src={dusturImg}
                  className="deleteImg"
                  alt="dustur"
                  onClick={() => deleteTaskHandler_24(indx)}
                />
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
