import { useState } from "react";
import Hero from "./Components/Hero";
import ReadTogether from "./Components/sections/ReadTogether";
import NotYourAvgBook from "./Components/sections/NotYourAvgBook";
import Membership from "./Components/sections/Membership";
import Section from "./Components/Section";

import { Container, Box } from "@mui/material";
import notyourbook from "./assets/images/image-not-average-mobile.webp";
import "./App.css";
// import { textAlign } from "@mui/system";

function App() {
  return (
    <>
      <Container>
        <Hero />
        <Section
          title="Read together grow together"
          sx={{ textAlign: "center" }}
        >
          <ReadTogether />
        </Section>
        <Section image={notyourbook} sx={{ textAlign: "left" }}>
          <NotYourAvgBook />
        </Section>
        <Section>
          <Membership />
        </Section>
      </Container>
    </>
  );
}

export default App;
