import React from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../../theme";
import Navigation from "../Nav";

const Layout = ({ children }) => {
  let theme = darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
