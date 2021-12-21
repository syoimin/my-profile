import Box from "@mui/material/Box";
import React from "react";
import Header from "../components/Header";
import theme from "../styles/theme";
import { ThemeProvider } from "@mui/material/styles";

interface DefaultTemplateProps {
  title: string;
  children: React.ReactNode;
}

const Default: React.FC<DefaultTemplateProps> = ({ children, title }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "#F6F6F4" }}>
        <Header />
        <main>{children}</main>
      </Box>
    </ThemeProvider>
  );
};

export default Default;
