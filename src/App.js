import React, { useEffect } from "react";
import { AppDiv } from "./AppStyle";
import Navbar from "./components/navbar/navbar";
import BuilderVdioPage from "./components/start_animation/start_video";

function App() {

//   useEffect(()=>{
//     setTimeout(() => {
      
//     }, 6000);
//  },[])
  return (
    <>
      <Navbar/>
      
      <AppDiv>
        <div>
          Hello Builder
        </div>
          

      </AppDiv>
    
    </>
  );
}

export default App;
