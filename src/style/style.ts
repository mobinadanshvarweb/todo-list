import { createTheme } from "@mui/material";
export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
        },
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
        html: {
          margin: 0,
          padding: 0,
        },
      },
    },
  },
  // palette: {
  //   primary: {
  //     main: "#673ab7",
  //   },
  //   secondary: {
  //     main: "white",
  //   },
  // },
});
