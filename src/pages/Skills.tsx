import React from "react";
import TemplateDefault from "../templates/Default";
import SkilsCard from "../components/SkilsCard";
import Typography from "@mui/material/Typography";

const Skills = () => {
  return (
    <TemplateDefault className="skills">
      <Typography variant="h4"> {"Language & Framework"} </Typography>
      <SkilsCard />
    </TemplateDefault>
  );
};

export default Skills;
