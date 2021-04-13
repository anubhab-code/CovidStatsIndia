import { createMuiTheme } from "@material-ui/core/styles";

const greyBlue = "#171c28";
const blackSecondary = "#212121";

export default createMuiTheme({
  palette: {
    common: {
      greyBlue: `${greyBlue}`,
      blackSecondary: `${blackSecondary}`,
    },
    primary: {
      main: `${greyBlue}`,
    },
    secondary: {
      main: `${blackSecondary}`,
    },
  },
  typography: {
    fontFamily: ["Maven Pro", "sans-serif"],
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": ["Maven Pro"],
      },
    },
    MuiAppBar: {
      boxShadow: "none",
    },
  },
});
