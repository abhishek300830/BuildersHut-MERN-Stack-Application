import React from 'react'
import { MainPrintStyleDiv } from './mainPrintStyle'

const MainPrintableFile = () => {
    
    const onClickHandler2=()=>{
        document.getElementById('show-result').style.display="block";
    }
    const onClickHandler1=()=>{
        document.getElementById('show-result').style.display="none";
    }
  return (
    <MainPrintStyleDiv>
        <div className="vanish-click" onClick={onClickHandler1}>
        </div>
        <div className="resume-print">
            print your file here -
        </div>

    </MainPrintStyleDiv>
  )
}

export default MainPrintableFile