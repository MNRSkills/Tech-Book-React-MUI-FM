// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
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
  sm: "365px",
  md: 740,
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
    MuiTypography: {
      variants: [
        {
          props: { variant: "mono" },
          style: {
            fontFamily: `'Martian Mono', monospace`,
            fontWeight: [400, 700, 800],
          },
        },
        {
          props: { variant: "inter" },
          style: {
            fontFamily: `'Inter', sans-serif`,
            fontWeight: 400,
          },
        },
      ],
    },
  },
  Box: {},
});

export default theme;
