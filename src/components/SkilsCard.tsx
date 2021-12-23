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

const skilsData = [
  {
    icon: SvgReactIcon,
    skil: "React",
    others: "React Native",
    rating: 2,
  },
  {
    icon: SvgVueIcon,
    skil: "Vue",
    others: "Vue3",
    rating: 4,
  },
  {
    icon: SvgLaravelIcon,
    skil: "React",
    others: "React Native",
    rating: 2,
  },
  {
    icon: SvgAwsAmplifyIcon,
    skil: "AWS Amplify",
    others: "Amplify SDK, UI-Component, Authenticator",
    rating: 4,
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
        <Grid item xs={2} sm={3} md={3} key={index}>
          <Card
            sx={{
              minWidth: 275,
              bgcolor: "primary.light",
              color: "primary.contrastText",
            }}
          >
            <CardContent>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                pt={2}
              >
                <Grid item xs={2}>
                  <ReactIcon icon={data.icon} />
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
                <Grid item xs={2}>
                  <Rating name="read-only" value={data.rating} readOnly />
                </Grid>
              </Grid>

              <Typography sx={{ mb: 1.5 }} color="text.contrastText">
                {data.others}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default SkilsCard;
