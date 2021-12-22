import Accordion from "../components/Accordion";
import React from "react";
import TemplateDefault from "../templates/Default";
import Container from "@mui/material/Container";
const Resume = () => {
  return (
    <TemplateDefault>
      <h1>経歴・履歴（最新順） </h1>
      <Accordion />
    </TemplateDefault>
  );
};

export default Resume;
