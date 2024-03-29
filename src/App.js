import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AppDiv } from "./AppStyle";
import NotFound from "./components/fileNotFound/NotFound";
import HomeScreen from "./components/home/HomeScreen";
import Navbar from "./components/navbar/navbar";
import Workshop from "./components/workshop/Workshop";

import ResumeBuilder from "./components/workshopSubPages/resume/ResumeBuilder";
import AuraBuilder from "./components/workshopSubPages/aura/AuraBuilder";
import ChartBuilder from "./components/workshopSubPages/chart/ChartBuilder";
import ColorBuilder from "./components/workshopSubPages/color/ColorBuilder";
import ImageBuilder from "./components/workshopSubPages/image/ImageBuilder";
import MemeBuilder from "./components/workshopSubPages/meme/MemeBuilder";
import ScheduleBuilder from "./components/workshopSubPages/schedule/ScheduleBuilder";

import About from "./components/about/About";
import builderContext from "./context/builderContext";
import HorizontalPreview from "./components/workshopSubPages/resume/printables/horizontalFile/HorizontalPreview";
import VerticalResume from "./components/workshopSubPages/resume/printables/VerticalDesign/VerticalResume";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  const { alignment } = useContext(builderContext);
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
          {/* profile print */}
          `$
          {alignment === "horizontal" ? (
            <Route
              path="workshop/profile/printResume"
              element={<HorizontalPreview />}
            />
          ) : (
            <Route
              path="workshop/profile/printResume"
              element={<VerticalResume />}
            />
          )}
          `
          {/* <Route path="workshop/profile/printResume" element={<PrintPage />} /> */}
          {/* <Route
            path="workshop/profile/printResume"
            element={<VerticalResume />}
          /> */}
          {/* <Route
            path="workshop/profile/horizontal"
            element={<HorizontalPreview />}
          /> */}
        </Routes>
      </AppDiv>
    </>
  );
}

export default App;
