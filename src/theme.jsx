// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 365,
      md: 768,
      lg: 1440,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: "#fff5ef", // Light background

      contrastText: "#062630", // Dark text for contrast
    },
    secondary: {
      main: "#062630", // Dark button
      contrastText: "#fff5ef", // Light text for contrast
    },
    text: {
      primary: "#062630",
      secondary: "#fff5ef",
    },
  },

  typography: {
    fontFamily: `'Martian Mono', monospace`, // default

    mono: {
      fontFamily: `'Martian Mono', monospace`,
      fontWeight: 400,
      fontSize: "1rem",
    },
    inter: {
      fontFamily: `'Inter', sans-serif`,
      fontWeight: 400,
      fontSize: "3rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: "343px",
          height: "64px",
          border: "2px solid #062630",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          color: "black",
          padding: "0",
        },
      },
    },
  },
});

export default theme;
