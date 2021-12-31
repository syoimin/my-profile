import Box from "@mui/material/Box";
import React from "react";
import Header from "../components/Header";
import theme from "../styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import Footer from "../components/Footer";

interface HomeTemplateProps {
  children: React.ReactNode;
}

const Home: React.FC<HomeTemplateProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "#F6F6F4" }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Home;
