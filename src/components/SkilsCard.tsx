import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ReactIcon from "./Icons/ReactIcon";
import Rating from "@mui/material/Rating";
// アス比が崩れるが大きさは揃う
// import SvgReactIcon from "../icons/react.svg";
// import SvgVueIcon from "../icons/vue.svg";
// import SvgLaravelIcon from "../icons/laravel.svg";
import { ReactComponent as SvgReactIcon } from "../icons/react.svg";
import { ReactComponent as SvgVueIcon } from "../icons/vue.svg";
import { ReactComponent as SvgLaravelIcon } from "../icons/laravel.svg";
import { ReactComponent as SvgAwsAmplifyIcon } from "../icons/aws-amplify.svg";
import { ReactComponent as SvgGoIcon } from "../icons/gopher.svg";
import "../css/Skils.css";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

const skilsData = [
  {
    icon: SvgReactIcon,
    skil: "React",
    others: ["React Native", "Expo"],
    rating: 2,
    viewBox: "0 0 256 228",
    projects: [
      {
        title: "○○案件の管理画面作成プロジェクト",
        link: "https://google.com",
      },
      {
        title: "○○案件の管理画面作成プロジェクト",
        link: "https://google.com",
      },
    ],
  },
  {
    icon: SvgVueIcon,
    skil: "Vue",
    others: ["Vue3", "Composition API", "Vue2", "Vuex", "Vue Router", "NuxtJS"],
    rating: 3,
    viewBox: "0 0 256 221",
    projects: [
      {
        title: "○○案件の管理画面作成プロジェクト",
        link: "https://google.com",
      },
    ],
  },
  {
    icon: SvgLaravelIcon,
    skil: "Laravel",
    others: ["Laravel 5,7,8"],
    rating: 4,
    viewBox: "0 0 256 264",
    projects: [
      {
        title: "○○案件の管理画面作成プロジェクト",
        link: "https://google.com",
      },
    ],
  },
  {
    icon: SvgAwsAmplifyIcon,
    skil: "AWS Amplify",
    others: ["Amplify SDK", "Authenticator", "IoT Core"],
    rating: 4,
    viewBox: "0 0 256 191",
    projects: [
      {
        title: "○○案件の管理画面作成プロジェクト",
        link: "https://google.com",
      },
    ],
  },
  {
    icon: SvgGoIcon,
    skil: "Go",
    others: ["gin", "gorm"],
    rating: 4,
    viewBox: "0 0 256 348",
    projects: [
      {
        title: "○○案件の管理画面作成プロジェクト",
        link: "https://google.com",
      },
    ],
  },
  {
    icon: SvgGoIcon,
    skil: "Java",
    others: ["Apach Click, Java6"],
    rating: 4,
    viewBox: "0 0 256 348",
    projects: [
      {
        title: "○○案件の管理画面作成プロジェクト",
        link: "https://google.com",
      },
    ],
  },
];
const SkilsCard = () => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {skilsData.map((data, index) => (
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

export default SkilsCard;
