import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ReactIcon from "./Icons/ReactIcon";
import Rating from "@mui/material/Rating";

const skilsData = [
  {
    icon: <ReactIcon />,
    skil: "React",
    others: "React Native",
    rating: 2,
  },
  {
    icon: <ReactIcon />,
    skil: "Vue",
    others: "Vue3",
    rating: 4,
  },
  {
    icon: <ReactIcon />,
    skil: "React",
    others: "React Native",
    rating: 2,
  },
  {
    icon: <ReactIcon />,
    skil: "Vue",
    others: "Vue3",
    rating: 4,
  },
  {
    icon: <ReactIcon />,
    skil: "React",
    others: "React Native",
    rating: 2,
  },
  {
    icon: <ReactIcon />,
    skil: "Vue",
    others: "Vue3",
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
              bgcolor: "primary.main",
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
                  {data.icon}
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
