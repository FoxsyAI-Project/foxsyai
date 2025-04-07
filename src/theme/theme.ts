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
      fontSize: "6.25rem",
      lineHeight: "4.5rem",
      letterSpacing: "-0.3125rem",
      textTransform: "uppercase",
      "@media (max-width:600px)": {
        fontSize: "4.25rem",
        lineHeight: "3.06rem",
        letterSpacing: "-5%",
      },
    },
    para12: {
        fontFamily: "'Noto Sans', sans-serif",
        fontWeight: 400,
        fontSize: "0.75rem",
        lineHeight: "1.275rem",
        letterSpacing: "-0.015rem",
    },
    para14: {
      fontFamily: fontFamilies.para14,
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: "1.5rem",
      letterSpacing: "-0.02rem",
    },
    para16: {
        fontFamily: "'Noto Sans', sans-serif",
        fontWeight: 400,
        fontSize: "1rem",
        lineHeight: "1.7rem",
        letterSpacing: "-0.02rem",
    },
    para20: {
        fontFamily: "'Noto Sans', sans-serif",
        fontWeight: 400,
        fontSize: "1.25rem",
        lineHeight: "2.125rem",
        letterSpacing: "-0.025rem",
      },
    captionH1: {
        fontFamily: "'Alexandria', sans-serif",
        fontWeight: 300,
        fontSize: "2rem",
        lineHeight: "3rem",
        letterSpacing: "-0.04rem"
    },
    subHeading1: {
        fontFamily: "'Alexandria', sans-serif",
        fontWeight: 700,
        fontSize: "2rem",
        lineHeight: "3rem",
        letterSpacing: "-0.04rem",
    },
    subHeading2: {
        fontFamily: "'Alexandria', sans-serif",
        fontWeight: 700,
        fontSize: "1.5rem",
        lineHeight: "2.25rem",
        letterSpacing: "-0.03rem",
        
    },
    subHeading3: {
        fontFamily: "'Alexandria', sans-serif",
        fontWeight: 500,
        fontSize: "1.25rem",
        lineHeight: "1.875rem",
        letterSpacing: "-0.025rem",
      },
    subHeading4: {
      fontFamily: fontFamilies.subHeading4,
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "36px",
      letterSpacing: "0%",
    },
    b1: {
        fontFamily: "'Alexandria', sans-serif",
        fontWeight: 500,
        fontSize: "1rem",
        lineHeight: "1rem",
        letterSpacing: "0rem",
    },
    link14: {
        fontFamily: "'Alexandria', sans-serif",
        fontWeight: 500,
        fontSize: "0.875rem",
        lineHeight: "1.3125rem",
        letterSpacing: "0rem",
    },
    extra1: {
        fontFamily: "'Alexandria', sans-serif",
        fontWeight: 200,
        fontSize: "5rem",
        lineHeight: "1",
        letterSpacing: "-0.02em"
    },
    extra2: {
        fontFamily: "'Alexandria', sans-serif",
        fontWeight: 500,
        fontSize: "2.5rem",
        lineHeight: "3.75rem",
        letterSpacing: "-0.02em"
    }
  },
});


theme.typography.captionH1 = {
    ...theme.typography.captionH1,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.75rem",
      lineHeight: "2.275rem",
      letterSpacing: "-0.035rem",
    },
 
  };
theme.typography.subHeading2 = {
    ...theme.typography.subHeading2,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.25rem",
      lineHeight: "1.875rem",
      letterSpacing: "-0.02rem",
    },
  };
  theme.typography.para20 = {
    ...theme.typography.para20,
    [theme.breakpoints.down("sm")]: {
        lineHeight: "1.875rem",
        letterSpacing: "-0.02rem",
    }
  }
  theme.typography.extra1 = {
    ...theme.typography.extra1,
    [theme.breakpoints.down("sm")]: {
        fontSize: "3rem",
        lineHeight: "4.5rem",
        letterSpacing: "-0.02em"
    }
  }
export default theme;
