import Accordion from "../components/Accordion";
import React from "react";
import TemplateDefault from "../templates/Default";
import { Typography } from "@mui/material";
const Resume = () => {
  return (
    <TemplateDefault className="resume" bgColor="primary.bgLight2">
      <Typography variant="h4" color="primary.contrastText2" p={3}>
        経歴・履歴（最新順）
      </Typography>
      <Accordion />
    </TemplateDefault>
  );
};

export default Resume;
