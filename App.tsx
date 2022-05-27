import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components";

import Home from "./src/screens/Home";

import theme from "./src/global/styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
