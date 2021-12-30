import Accordion from "../components/Accordion";
import React from "react";
import TemplateDefault from "../templates/Default";
const Resume = () => {
  return (
    <TemplateDefault className="resume" bgColor="primary.bgLight2">
      <h1>経歴・履歴（最新順） </h1>
      <Accordion />
    </TemplateDefault>
  );
};

export default Resume;
