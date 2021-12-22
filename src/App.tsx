import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Skill from "./pages/Skills";
import Resume from "./pages/Resume";
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
      <Route path="/skills" element={<Skill />} />
      <Route path="/resume" element={<Resume />} />
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
