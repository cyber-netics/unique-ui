import React from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../../theme";

const Layout = ({ children }) => {
  let theme = darkTheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Layout;
