import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      fontColorDark: "#661616",
      bgLight: "#f6dfe2",
      light: "#c36075",
      main: "#b33e5c",
      dark: "#93354d",
      contrastText: "#fff",
      link: "#00f1e3",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

export default theme;
