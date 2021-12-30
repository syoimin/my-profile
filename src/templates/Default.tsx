import Box from "@mui/material/Box";
import React from "react";
import Header from "../components/Header";
import theme from "../styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";

interface DefaultTemplateProps {
  children: React.ReactNode;
  className: string;
  bgColor: string;
}

const Default = (Props: DefaultTemplateProps) => {
  const { children, className, bgColor } = Props;
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: bgColor }}>
        <Header />
        <Container maxWidth="lg">
          <main className={className}>{children}</main>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Default;
