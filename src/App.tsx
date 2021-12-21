import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Skill from "./pages/Skill";
import Resume from "./pages/Resume";
import Activitiy from "./pages/Activity";
import About from "./pages/About";

const homeProps = {
  title: "しょいみんの プロフィール",
  description: "",
  image: "https://source.unsplash.com/random",
  imageText: "main image description",
  linkText: "Continue reading…",
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home data={homeProps} />} />
      <Route path="/about" element={<About />} />
      <Route path="/skill" element={<Skill />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/activity" element={<Activitiy />} />
    </Routes>
  );
}

function wrapApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default wrapApp;
