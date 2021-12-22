import Box from "@mui/material/Box";
import React from "react";
import Header from "../components/Header";
import theme from "../styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";

interface DefaultTemplateProps {
  children: React.ReactNode;
}

const Default: React.FC<DefaultTemplateProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "#F6F6F4" }}>
        <Header />
        <Container maxWidth="lg">
          <main>{children}</main>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Default;
