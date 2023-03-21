import { Box } from "@mui/material";
import React from "react";
import { CssTextField } from "../../orangeTextBox/CssTextField";
import { ScheduleStyleDiv } from "./scheduleStyle";
import dusturImg from '../../../images/taskBuilder/duster.png'
import blackBg from '../../../images/taskBuilder/bgBlackBoard.jpg'

const ScheduleBuilder = () => {
  const seq = [1, 2, 3, 4, 5];
  const task = [
    "I want ot complete my Assignments till MOnday.",
    "I need to take a nap",
    "I need to watch a movie",
    "I will go to the restaurant for dinner",
    "I will go to the restaurant for dinner at home",
  ];

  // const const [first, setfirst] = useState(second)

  const dusturAnimation=(indx)=>{
      document.getElementById(`display-dust-${indx}`).style.display="block";
      document.getElementById(`hide-dust-${indx}`).style.display="none";
  }

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
              <button
                className="all-btns"
                // onClick={addField2}
                // disabled={
                //   maxField2 === 0 || type.length === 0 || txValue.length === 0
                // }
              >
                <lord-icon
                  src="https://cdn.lordicon.com/ynwbvguu.json"
                  trigger="hover"
                  colors="primary:#000000"
                  style={{
                    width: "40px",
                    height: "40px",
                    // opacity:
                    //   maxField2 === 0 || type.length === 0 || txValue.length === 0
                    //     ? "0.6"
                    //     : "1",
                  }}
                ></lord-icon>
              </button>
            </Box>
          </div>
        </div>

        {/* a4 size template  */}
        <div className="right" id="right-part" >

          <div className="generate-tables"  style={{backgroundImage:`url(${blackBg})`}}>
            <section className="table-head">
              <b className="b1">Priority</b>
              <b>Task ( 12 hours Table )</b>
              <b className="b3">asd</b>
            </section>

            {seq.map((val, indx) => (
              <>
                <section className="content" key={indx}>
                  <div>{val}.</div>
                  <div className="tasks">{task[indx]}</div>
                  {/* <button>X</button> */}
                  <img src={dusturImg} className="dusturImg" id={`hide-dust-${task[indx]}`} alt="dustur" onClick={()=>dusturAnimation(task[indx])}/>
                  <img src={dusturImg} className="dusturImg-anim" id={`display-dust-${task[indx]}`} alt="dustur"/>
                </section>
                {/* <hr style={{margin:"0"}}/> */}
              </>
            ))}

            <section className="bottom">
              <div></div>
              <div></div>
              <div></div>
            </section>
          </div>
         
          <div className="generate-tables"  style={{marginTop:"5%",backgroundImage:`url(${blackBg})`, borderColor:'#0f6d07'}}>
            <section className="table-head">
              <b className="b1">Priority</b>
              <b>Task ( 24 hours Table )</b>
              <b className="b3">asd</b>
            </section>

            {seq.map((val, indx) => (
              <>
                <section className="content" key={indx}>
                  <div>{val}.</div>
                  <div className="tasks">{task[indx]}</div>
                  {/* <button>X</button> */}
                  <img src={dusturImg} className="dusturImg" alt="dustur" />
                </section>
                {/* <hr style={{margin:"0"}}/> */}
              </>
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
