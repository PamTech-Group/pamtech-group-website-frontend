// theme.ts
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    primaryOrange: "#E52321",
    tertiary: "#061E45",
    background: "#F1F1FF",
    text: "#FFFBFB",
    headingBlue: "#192140",
    // NavText: "#FFFDFD",
    // greenBgText: "#262626",
    // greyBg: "#333333",
    // primaryNeonGreen: "#39FF14",
    // secondaryDarkBlue: "#001f3f",
    // accentPurple: "#8A2BE2",
    backgroundCard: "#FFFDFD",
    textDark: "#FFFDFD",
    textGrey: "#333333",
    inputBg: "#1E1E1E",
    inputBorder: "#393939",
    buttonHover: "#2E8B57",
  },
  fontSizes: {
    xs: ".7rem",
    sm: "1rem",
    md: "1.2rem",
    lg: "1.5rem",
    xl: "1.8rem",
    xxl: "2rem",
    xxxl: "2.5rem",
    xxxxl: "3rem",
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    bold: 600,
    thick: 700,
  },

  borders: {
    thin: "1px solid",
    thick: "2px solid",
    primary: "2px solid #0B9243",
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  gradientBg: {
    bgColor: "#D3D7D5",
    bgGradient:
      "linear-gradient(120deg, rgba(1,11,21,1) 0%, rgba(4,4,121,1) 37%, rgba(0,15,130,1) 48%, rgba(11,1,45,1) 100%)",
  },
  greenGradient: {
    bgColor: " rgb(10,245,125)",
    bgGradient:
      "linear-gradient(90deg, rgba(9,177,91,1) 20%, rgba(2,9,83,1) 73%)",
  },
  neonGradient: {
    bgColor: "rgb(10,245,125)",
    bgGradient:
      "linear-gradient(90deg, rgba(57,255,20,1) 20%, rgba(138,43,226,1) 73%)",
  },
  radius: "25px",
  boxShadow: `0px 4px 6px 2px rgba(11, 1, 45, 0.5)`,
  customBoxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Added custom box shadow
  customBorderRadius: "0.5rem", // Added custom border radius
});

export default theme;
