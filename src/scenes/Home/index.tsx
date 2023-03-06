import React, { ReactElement } from "react";
import { Box } from "@mui/material";
import Header from "./components/Header";
import Motivation from "./components/Motivation";
import Features from "./components/Features";
import Descriptions from "./components/Descriptions";
import Footer from "./components/Footer";

export default function Home(): ReactElement {
  return (
    <Box>
      <Header />
      <Motivation />
      <Features />
      <Descriptions />
      <Footer />
    </Box>
  );
}
