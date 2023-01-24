import React from "react";
import { AppDiv } from "./AppStyle";
import HomeScreen from "./components/home/HomeScreen";
import Navbar from "./components/navbar/navbar";
// import Practice from "./components/practices/practice";
// import BuilderVdioPage from "./components/start_animation/start_video";

function App() {
  return (
    <>
      <Navbar/>
      <AppDiv>

        <HomeScreen/>
        {/* <Practice/> */}
      
      </AppDiv>
    </>
  );
}

export default App;
