import { Container, Typography, Box, Button, Stack } from "@mui/material";
import downArrow from "../assets/images/icon-arrow-down.svg";
import patterBg from "../assets/images/pattern-light-bg.svg";
import { StarFeature } from "../Utils/Features";

function Hero({ heroImg, mdHeroImg, lgHeroImg, logo }) {
  return (
    <Box
      component="header"
      sx={{
        backgroundImage: `url(${patterBg})`,
        bgcolor: "primary.main",
        margin: 0,
        padding: "0 20px",
        height: {
          lg: "834px",
        },
      }}
    >
      {/* Navigation */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: { xs: "24px", md: "48px" },
        }}
      >
        <Box component="image" sx={{ backgroundImage: `url(${logo})` }}></Box>
      </Box>

      {/* Main Stack */}
      <Stack
        direction={{
          xs: "column",
          md: "column",
          lg: "row",
        }}
        spacing={{ xs: 4, md: 6 }}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Text Content */}
        <Box
          sx={{
            width: {
              xs: "100%",
              md: "100%",
              lg: "50%",
            },
            textAlign: "left",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              background:
                "linear-gradient(107deg, #FF9A60 -11.37%, #062630 61.84%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text", // Safari + Chrome need this
              color: "transparent",
              WebkitTextFillColor: "transparent", // Safari fix
              fontSize: {
                sm: "42px",
                md: "70px",
                lg: "48px",
              },
              fontWeight: "bold",
              lineHeight: {
                xs: "2.5rem",
                sm: "4rem",
                md: "5.5rem",
                lg: "3.5rem",
              },
              marginBottom: "24px",
              width: { md: "450px" },
            }}
          >
            Join the ultimate tech book club
          </Typography>

          <Typography
            sx={{
              fontFamily: "'Inter', sans-serif",
              fontSize: {
                xs: "16px",
                sm: "18px",
                md: "20px",
                lg: "25px",
              },
              marginBottom: "32px",
            }}
          >
            Turn your reading time into learning time with fellow tech
            enthusiasts. Get curated recommendations, join vibrant discussions,
            and level up your skills one chapter at a time.
          </Typography>

          {/* Button */}
          <Button
            variant="contained"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontWeight: "bold",
              fontSize: {
                sm: "16px",
                md: "18px",
              },
              width: {
                sm: "343px",
                md: "380px",
              },
            }}
          >
            REVIEW MEMBERSHIP OPTIONS
            <img src={downArrow} alt="Arrow" style={{ width: "24px" }} />
          </Button>

          {/* Star Feature */}
          <Box sx={{ marginTop: "32px", width: "auto" }}>
            <StarFeature />
          </Box>
        </Box>

        {/* Hero Image */}
        <Box
          sx={{
            width: { sm: "100%", lg: "540px" },
            minHeight: { sm: "343px", md: "1345px", lg: "606px" },
            // marginTop: { xs: "32px", lg: "0" },
            backgroundImage: {
              sm: `url(${heroImg})`,
              md: `url(${mdHeroImg})`,
              lg: `url(${lgHeroImg})`,
            },
            backgroundRepeat: "no-repeat",
            backgroundSize: {
              sm: "cover",
              md: "contain",
            },
            backgroundPosition: "center left",
          }}
        ></Box>
      </Stack>

      {/* Extra spacing below */}
    </Box>
  );
}

export default Hero;
