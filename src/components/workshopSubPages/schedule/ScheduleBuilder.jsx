import { Box } from "@mui/material";
import React from "react";
import { CssTextField } from "../../orangeTextBox/CssTextField";
import { ScheduleStyleDiv } from "./scheduleStyle";

const ScheduleBuilder = () => {
  const seq=[1,2,3,4,5,6];
  const task=["I want ot complete my Assignments till MOnday.","I need to take a nap","I need to watch a movie","I will go to the restaurant for dinner","I need to watch Cricket match","I need to complete my project"];

  return( 
  <ScheduleStyleDiv>
    <section className="sMain">
       
        <div className="left">

          <div className="subheads">
            Schedule Builder 
          </div>

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
                  "& .MuiButton-root": { m: 1, width: "30ch", height: "6.5ch" },
                }}
                noValidate
                autoComplete="off"
                id="select-2"
                style={{ display: "none" }}
              >

                </Box>

          </div>

        </div>

        {/* a4 size template  */}
        <div className="right" id="right-part">

          <div className="generate-tables">
                <section className="table-head">
                  <b className="b1">Sequence</b>
                  <b>Task</b>
                  <b className="b3">asd</b>
                </section>
                
                {
                  seq.map((val,indx)=>(
                    <>
                    <section className="content" key={indx}>
                      <div>{val}</div>
                      <div className="tasks">{task[indx]}</div>
                      <button>X</button>                    
                    </section>
                    <hr style={{margin:"0"}}/>
                    </>
                  ))
                }
                
                <section className="bottom">
                   <div></div>
                   <div></div>
                   <div></div>
                </section>
          </div>

          
        </div>
      </section>
  </ScheduleStyleDiv>);
};

export default ScheduleBuilder;
