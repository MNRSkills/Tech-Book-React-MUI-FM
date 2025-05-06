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
import readTogetherTablet from "./assets/images/image-read-together-tablet.webp";
import readTogetherDesktop from "./assets/images/image-read-together-desktop.webp";
import notyourbook from "./assets/images/image-not-average-mobile.webp";
import patternGlow from "./assets/images/pattern-glow.svg";
import imageHeroMobile from "./assets/images/image-hero-mobile.webp";
import imageHeroTablet from "./assets/images/image-hero-tablet.webp";
import imageHeroDesktop from "./assets/images/image-hero-desktop.webp";
import logo from "./assets/images/logo.svg";
import starsMobile from "./assets/images/icon-star.svg";
// import { textAlign } from "@mui/system";

function App() {
  return (
    <>
      <Box sx={{ margin: 0, padding: 0 }}>
        <Hero
          heroImg={imageHeroMobile}
          mdHeroImg={imageHeroTablet}
          lgHeroImg={imageHeroDesktop}
          logo={logo}
        />
        {/* Sections  */}
        <Section sx={{ textAlign: "center" }}>
          <ReadTogether
            readTogethermobile={readTogethermobile}
            readTogetherTablet={readTogetherTablet}
            readTogetherDesktop={readTogetherDesktop}
          />
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
        <Box sx={{ background: "#062630" }}>
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default App;
