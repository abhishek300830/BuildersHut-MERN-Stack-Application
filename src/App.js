import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppDiv } from "./AppStyle";
import NotFound from "./components/fileNotFound/NotFound";
import HomeScreen from "./components/home/HomeScreen";
import Navbar from "./components/navbar/navbar";
import Workshop from "./components/workshop/Workshop";
// import Practice from "./components/practices/practice";
// import BuilderVdioPage from "./components/start_animation/start_video";

import AOS from "aos";
import "aos/dist/aos.css";
import ResumeBuilder from "./components/workshopSubPages/resume/ResumeBuilder";
import AuraBuilder from "./components/workshopSubPages/aura/AuraBuilder";
import ChartBuilder from "./components/workshopSubPages/chart/ChartBuilder";
import ColorBuilder from "./components/workshopSubPages/color/ColorBuilder";
import ImageBuilder from "./components/workshopSubPages/image/ImageBuilder";
import MemeBuilder from "./components/workshopSubPages/meme/MemeBuilder";
import ScheduleBuilder from "./components/workshopSubPages/schedule/ScheduleBuilder";

import About from "./components/about/About";
AOS.init();

function App() {
  return (
    <>
      <AppDiv>
        {/* routes   */}
        <Routes>
          {/* main route  */}
          <Route path="/" element={<Navbar />}>
            {/* inner routes  */}
            <Route index element={<HomeScreen />} />
            <Route path="workshop" element={<Workshop />} />
            {/* Builders Routes */}
            <Route path="workshop/profile" element={<ResumeBuilder />} />
            <Route path="workshop/aura" element={<AuraBuilder />} />
            <Route path="workshop/chart" element={<ChartBuilder />} />
            <Route path="workshop/colour" element={<ColorBuilder />} />
            <Route path="workshop/image" element={<ImageBuilder />} />
            <Route path="workshop/meme" element={<MemeBuilder />} />
            <Route path="workshop/schedule" element={<ScheduleBuilder />} />

            {/* sameer work. dont touch  */}
            <Route path="about" element={<About />} />

            {/* page not found route  */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AppDiv>
    </>
  );
}

export default App;
