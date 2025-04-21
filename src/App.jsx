import { Container, Box } from "@mui/material";
import Hero from "./Components/Hero";
import ReadTogether from "./Components/sections/ReadTogether";
import NotYourAvgBook from "./Components/sections/NotYourAvgBook";
import Membership from "./Components/sections/Membership";
import Section from "./Components/Section";
import Testimonial from "./Components/sections/Testimonial";
import Footer from "./Components/Footer";
import "./App.css";

// IMAGES FOR THE COMPONENTS
import readTogethermobile from "./assets/images/image-read-together-mobile.webp";
import notyourbook from "./assets/images/image-not-average-mobile.webp";
import patternGlow from "./assets/images/pattern-glow.svg";
import imageHeroMobile from "./assets/images/image-hero-mobile.webp";
import starsMobile from "./assets/images/icon-star.svg";
// import { textAlign } from "@mui/system";

function App() {
  return (
    <>
      <Container>
        <Hero heroImg={imageHeroMobile} />
        {/* Sections  */}
        <Section image={readTogethermobile} sx={{ textAlign: "center" }}>
          <ReadTogether />
        </Section>
        <Section image={notyourbook} sx={{ textAlign: "center" }}>
          <NotYourAvgBook />
        </Section>
        <Section>
          <Membership />
        </Section>
        <Section>
          <Testimonial starsMobile={starsMobile} />
        </Section>
        <Box sx={{   background: "#062630",}}>
          <Footer />
        </Box>
      </Container>
    </>
  );
}

export default App;
