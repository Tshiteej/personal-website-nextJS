import { extendTheme, chakra } from "@chakra-ui/react";
import { theme as chakraTheme } from "@chakra-ui/react";
import { createBreakpoints, mode } from "@chakra-ui/theme-tools";

const fonts = {
  ...chakraTheme.fonts,
  heading: `'Roboto Mono', monospace;`,
  body: `'Roboto Mono', monospace;`
};

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  "2xl": "70em"
});

const styles = {
  global: props => ({
    body: {
      bg: mode("gray.200", "gray.800")(props)
    }
  })
};

const overrides = {
  ...chakraTheme,
  fonts,
  breakpoints,
  styles,
  fontWeights: {
    normal: 300,
    medium: 600,
    bold: 700
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px"
  }
};

const customTheme = extendTheme(overrides);

export default customTheme;
