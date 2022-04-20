import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#477db8",
      contrastText: "#fffaff",
      dark: "#1d5db1",
    },
    secondary: {
      main: "#bccfe2",
    },
    error: {
      main: "#ff0e0e",
    },
    background: {
      default: "#121920",
      paper: "#19222a",
    },
    divider: "#2f3c49da",
    text: {
      primary: "#f3f3f3db",
      secondary: "#bccfe2",
    },
  },
  typography: {
    fontFamily: "Google Sans, Poppins",
  }
});

export default theme;
