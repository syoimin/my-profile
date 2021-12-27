import React from "react";
import TemplateDefault from "../templates/Default";
import SkilsCard from "../components/SkilsCard";
import SkillsList from "../components/SkillsList";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Skills = () => {
  return (
    <TemplateDefault className="skills">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        pt={3}
      >
        <Grid item>
          <Typography variant="h4"> {"Language & Framework"} </Typography>
        </Grid>
        <Grid item>
          <SkilsCard />
        </Grid>
        <Grid item>
          <Typography variant="h4"> {"Tools"} </Typography>
        </Grid>
        <Grid item>
          <SkillsList />
        </Grid>
      </Grid>
    </TemplateDefault>
  );
};

export default Skills;
