import {mergeDeep} from "../../utils/general";

const lightColor = "#fff";
// const darkColor = "#151718";
const darkColor = "#1D1D1D";

const commonTheme = {
  spacing: (num = 1) => `${8 * num}px`,
  breakpoints: {
    "xs": "0px",
    "sm": "600px",
    "md": "900px",
    "lg": "1200px",
    "xl": "1400px",
    "xxl": "1700px"
  },
  palette: {
    primary: "#edd38a",
    secondary: "#3f9ad9",
    third: "#cc687d",
    green: "#64d64f"
  }
};

const lightThemeBare = {
  palette: {
    background: lightColor,
    color: darkColor
  }
}

const darkThemeBare = {
  palette: {
    color: lightColor,
    background: darkColor,
  }
}

export const lightTheme = mergeDeep(commonTheme, lightThemeBare);
export const darkTheme = mergeDeep(commonTheme, darkThemeBare);