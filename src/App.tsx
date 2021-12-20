import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Skil from "./pages/Skil";
import Resume from "./pages/Resume";
import Activitiy from "./pages/Activity";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skil" element={<Skil />} />
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
