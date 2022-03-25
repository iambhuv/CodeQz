import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#477db8",
      contrastText: "#fffaff",
    },
    secondary: {
      main: "#bccfe2",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#121920",
      paper: "#1e29339c",
    },
    divider: "#2f3c49da",
    text: {
      primary: "#f3f3f3db",
      secondary: "#bccfe2",
    },
  },
  typography: {
    fontFamily: "Google Sans, Poppins"
  }
});

export default theme;
