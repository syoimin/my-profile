import React from "react";
import TemplateDefault from "../templates/Default";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Timeline from "../components/Timeline";
import "../css/Home.css";
import HomeCard from "../components/HomeCard";
import Container from "@mui/material/Container";
import Avatar from "../components/Avatar";
import IconLabel from "../components/Icons/IconLabel";

interface homeProps {
  data: {
    description: string;
    image: string;
    imageText: string;
    linkText: string;
    title: string;
  };
}

const Home = (props: homeProps) => {
  const { data } = props;
  return (
    <TemplateDefault title="ホーム">
      <Paper
        sx={{
          position: "relative",
          backgroundColor: "grey.800",
          color: "#fff",
          mb: 4,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(${data.image})`,
        }}
      >
        {
          <img
            style={{ display: "none" }}
            src={data.image}
            alt={data.imageText}
          />
        }
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,.3)",
          }}
        />
        <Grid container>
          <Grid item md={8}>
            <Box
              sx={{
                position: "relative",
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
            >
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                {data.title}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {data.description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={8}
          pb={10}
        >
          <Grid item xs={12}>
            <Avatar />
          </Grid>
          <Grid item xs={12}>
            <IconLabel />
          </Grid>
        </Grid>
      </Paper>

      <Box sx={{ bgcolor: "#EDF2F6" }}>
        <Container maxWidth="lg">
          <Grid container justifyContent="center">
            <Typography variant="h3" mb={10} pt={10}>
              Pick up
            </Typography>
          </Grid>

          <HomeCard />
        </Container>
      </Box>
      <Box sx={{ bgcolor: "#EDF2F6" }}>
        <Container maxWidth="lg">
          <Grid container justifyContent="center">
            <Typography variant="h3" mb={10} pt={10}>
              History
            </Typography>
            <Timeline />
          </Grid>
        </Container>
      </Box>
    </TemplateDefault>
  );
};

export default Home;
