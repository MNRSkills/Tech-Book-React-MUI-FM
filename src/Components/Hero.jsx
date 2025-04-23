import { Container, Typography, Box, Button, Stack } from "@mui/material";
import heroMobile from "../assets/images/image-hero-mobile.webp";
import logo from "../assets/images/logo.svg";
import downArrow from "../assets/images/icon-arrow-down.svg";
import { StarFeature } from "../Utils/Features";
import { lightGreen } from "@mui/material/colors";

// linear-gradient(107deg, #FF9A60 -11.37%, #062630 61.84%);
function Hero() {
  return (
    <header>
      <nav sx={{}}>
        <Box>
          <img src={logo} alt="" />
        </Box>
      </nav>
      <Stack
        direction={{
          xs: "column",
          md: "column",
          // lg: "row",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: {
              xs: 35,
              sm: 40,
              lg: 42,
            },
            fontWeight: "bold",
            textAlign: "left",
            lineHeight: "3.5rem",
            margin: "24px 0 32px",
          }}
        >
          Join the ultimate tech book club
        </Typography>
        <Typography
          sx={{ fontFamily: "'Inter', sans-serif", margin: "32px 0" }}
        >
          Turn your reading time into learning time with fellow tech
          enthusiasts. Get curated recommendations, join vibrant discussions,
          and level up your skills one chapter at a time.
        </Typography>
        {/* Button & arrow ... */}
        <Button variant="contained" sx={{}}>
          <Typography sx={{ fontWeight: "bold", margin: "auto" }}>
            REVIEW MEMBERSHIP OPTIONS
          </Typography>
          <img
            src={downArrow}
            alt="Arrow here "
            style={{ width: "24px", padding: "0 5px" }}
          />
        </Button>
        {/* Testimonial .... */}
        <StarFeature />
      </Stack>

      <Box sx={{ marginTop: "64px" }}>
        <img
          src={heroMobile}
          alt="Mobile hero"
          style={{
            width: "375px",
            objectFit: "contain",
          }}
        />
      </Box>
      <div className="reviews-dev-join"></div>
    </header>
  );
}

export default Hero;
