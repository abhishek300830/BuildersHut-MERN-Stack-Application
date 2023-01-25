import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppDiv } from "./AppStyle";
import NotFound from "./components/fileNotFound/NotFound";
import HomeScreen from "./components/home/HomeScreen";
import Navbar from "./components/navbar/navbar";
import Workshop from "./components/workshop/Workshop";
// import Practice from "./components/practices/practice";
// import BuilderVdioPage from "./components/start_animation/start_video";

function App() {
  return (
    <>
        <AppDiv>

      {/* routes   */}
          <Routes>
    {/* main route  */}
          <Route path="/" element={<Navbar/>}>

              {/* inner routes  */}
              <Route  index element={<HomeScreen/>} />
              <Route path="workshop" element={<Workshop/>} />

              {/* page not found route  */}
              <Route path="*" element={<NotFound/>}/>

            </Route>
          </Routes>

        </AppDiv>
    </>
  );
}

export default App;
