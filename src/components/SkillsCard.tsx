import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ReactIcon from "./Icons/SvgIcon";
import Rating from "@mui/material/Rating";

import "../css/Skils.css";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

interface skilsObject {
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  skil: string;
  others: Array<string>;
  rating: number;
  viewBox: string;
  projects: Array<{
    title: string;
    link: string;
  }>;
}

interface skillsProps {
  skillsData: skilsObject[];
}

const SkillsCard = (props: skillsProps) => {
  const { skillsData } = props;
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {skillsData.map((data, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <Card
            className="card"
            sx={{
              minWidth: 275,
              bgcolor: "primary.light",
              color: "primary.contrastText",
            }}
          >
            <Grid className="card-reverce-area">
              <CardContent className="card-surface">
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  pt={2}
                >
                  <Grid item xs={2}>
                    <ReactIcon icon={data.icon} viewBox={data.viewBox} />
                    {/* <img width="100" height="100" src={data.icon} /> */}
                  </Grid>
                  <Grid item xs={2} pt={2}>
                    <Typography
                      variant="h5"
                      color="text.contrastText"
                      gutterBottom
                    >
                      {data.skil}
                    </Typography>
                  </Grid>
                  <Grid item xs={2} pb={2}>
                    <Rating name="read-only" value={data.rating} readOnly />
                  </Grid>
                </Grid>

                <Stack direction="row" spacing={1}>
                  <Grid container justifyContent="center" spacing={1}>
                    {data.others.map((other, index) => (
                      <Grid item key={index}>
                        <Chip label={other} color="primary" />
                      </Grid>
                    ))}
                  </Grid>
                </Stack>
              </CardContent>
              <CardContent className="card-reverse">
                <Grid container direction="column">
                  <Grid item xs={2}>
                    <Typography variant="h5" color="text.contrastText">
                      {data.skil}
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    {data.projects.map((project, index) => (
                      <Link
                        href={project.link}
                        key={index}
                        color="primary.link"
                      >
                        <Typography variant="body1">{project.title}</Typography>
                      </Link>
                    ))}
                  </Grid>
                </Grid>
              </CardContent>
            </Grid>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default SkillsCard;