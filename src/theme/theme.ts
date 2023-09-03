import { createTheme } from "@mui/material";
import { pxToRem } from "../utils/font";

const theme = createTheme({
  palette: {
    primary: { main: "#3F5BF6" },
  },
  typography: {
    fontWeightBold: 600,
    fontFamily: ["Work Sans"].join(","),
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          fontSize: pxToRem(14),
          textTransform: "inherit",
        },
      },
    },
  },
});

export default theme;
