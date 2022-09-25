import { Theme } from "@emotion/react";

const themes = {
  light: {
    id: "light",
    name: "Light",
    font: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
    colors: {
      body: ["#FFF", "#F8F9FA", "#E9ECEF"],
      text: ["#5C5F66", "#2C2E33", "#1A1B1E"],
      primary: ["#FF6B6B", "#F03E3E", "#C92A2A"],
      secondary: ["#FF922B", "#F76707", "#D9480F"],
    },
    spacing: { xs: 5, sm: 10, md: 15, lg: 20, xl: 25 },
    fontSize: {
      xs: "0.5em",
      sm: "0.75em",
      md: "1em",
      lg: "1.25em",
      xl: "1.5em",
    },
  },
  dark: {
    id: "dark",
    name: "Dark",
    font: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
    colors: {
      body: ["#343A40", "#2C2E33", "#1A1B1E"],
      text: ["#FFF", "#F8F9FA", "#E9ECEF"],
      primary: ["#FF6B6B", "#F03E3E", "#C92A2A"],
      secondary: ["#FF922B", "#F76707", "#D9480F"],
    },
    spacing: { xs: 5, sm: 10, md: 15, lg: 20, xl: 25 },
    fontSize: {
      xs: "0.5em",
      sm: "0.75em",
      md: "1em",
      lg: "1.25em",
      xl: "1.5em",
    },
  },
};

export default themes;
