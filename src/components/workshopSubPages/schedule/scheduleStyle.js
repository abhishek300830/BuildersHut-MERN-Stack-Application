import styled from "styled-components";

export const ScheduleStyleDiv=styled.div`
    
section.sMain {

    display: grid;
    grid-template-columns: 50% 50%;
    /* border: 1px solid black; */
    position: absolute;
    width: 98%;
    height: 83%;
    margin-left: 1%;
    margin-top: -2.5%;

    
    div.left {
      position: relative;
      padding: 2%;
      height: 85%;
      background: #f7f7f7;
      border: 5px solid #595451;
      border-top: 40px solid #595451;
      border-radius: 10px;
      
      div.user-input {
        width: 100%;
        position: relative;
        border-radius: 15px;
        margin-top: -2%;
        /* border: 1px solid black; */

          .schedule-intro {
            /* border: 1px solid black; */
            width: 70%;
            color: #565555;
            margin: auto;
            margin-top: 3%;
            text-align: center;
          }

        }
      }

      div.subheads {
        position: absolute;
        font-weight: bold;
        text-shadow: 1px 1px 2px black;
        color: white;
        text-align: left;
        padding-left: 2%;
        width: 100%;
        height: 30px;
        top: -30px;
        left: 0;
        background-color: transparent;
      }
    }

    div.left::before {
      position: absolute;
      content: "h";
      color: transparent;
      width: 100%;
      border-radius: 8px;
      height: 20px;
      left: 0%;
      top: -38px;
      opacity: 0.7;
      background-color: #958e8c;
    }
  

  div.right {
    padding: 2%;
    position: relative;

    .generate-tables{
      border: 5px solid #bb0404;
      border-radius: 10px;
        .table-head{
            position: relative;
            display: grid;
            grid-template-columns: 15% 75% 10%;
            text-align: center;
            align-items: center;
            color: white;
            border-radius: 5px;
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
            /* background-color: #565555; */
            /* background-color: #0c5214; */
            background-color: #1a1a1a;

            b{
                padding: 3%;
            }
            .b3{
                /* border-left: 1px solid white; */
                color: transparent;
            }
        }

        /* .table-head::before{
            content: "1";
            position: absolute;
            width: 99%;
            height: 47%;
            top: 5%;
            left: 0.5%;
            border-radius: 8px;
            background-color: #837c7a;
            z-index: 2;
            color: transparent;
        } */

        .content{
            display: grid;
            grid-template-columns: 15% 75% 10%;
            text-align: center;
            align-items: center;
            color: white;
            border-radius: 0px;
            background-color: #1a1a1a;
            border-top-right-radius: 0px;
            border-top-left-radius: 0px;


            div{
                padding: 2%;
            }
            button{
                border: 0;
                width: 70%;
                padding: 10% 0%;
                margin: auto;
                border-radius: 5px;
                background-color: #f82a2a;
                color: white;
                cursor: pointer;
            }
            
        }
        .bottom{
            display: grid;
            grid-template-columns: 15% 75% 10%;
            text-align: center;
            align-items: center;
            color: white;
            height: 30px;
            border-radius: 5px;
            /* background-color: black; */
            background-color: #1a1a1a;

            /* background-color: #042e09; */

            border-top-right-radius: 0px;
            border-top-left-radius: 0px;
        }
    }

    
  }
`