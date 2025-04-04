import { createTheme } from "@mui/material/styles";
import { fontFamilies } from "./fonts";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EA3807", // Primary Orange
      dark: "#21262E", // Primary Dark
    },
    secondary: {
      main: "#1F66FF", // Blue
    },
    grey: {
      100: "#D6D6D6", // Grey 5
      200: "#C8C8C8", // Grey 4
      300: "#5F6164", // Grey 3
      400: "#444242", // Grey 2
      500: "#232121", // Grey 1
    },
    common: {
      black: "#000000",
      white: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: fontFamilies.heading,
    h1: {
      fontFamily: fontFamilies.heading,
      fontWeight: 700,
      fontSize: "100px",
      lineHeight: "69px",
      letterSpacing: "-5px",
      textTransform: "uppercase",
    },
    para14: {
      fontFamily: fontFamilies.para14,
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: 1.7,
      letterSpacing: "-0.02em",
    },
    para20: {
      fontFamily: fontFamilies.para20,
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "35px",
    },
    captionH1: {
      fontFamily: "'Alexandria', sans-serif",
      fontWeight: 300,
      fontSize: "32px",
      lineHeight: "48px",
      letterSpacing: "-0.02em",
    },
    subHeading2: {
      fontFamily: fontFamilies.subHeading2,
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "36px",
      letterSpacing: "-2px",
    },
    subHeading4: {
      fontFamily: fontFamilies.subHeading4,
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "36px",
      letterSpacing: "0%",
    },
  },
});

export default theme;
