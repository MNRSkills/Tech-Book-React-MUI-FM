// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
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
  Box: {
    
  }
});

export default theme;
