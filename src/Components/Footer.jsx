import { Box, Button, Typography } from "@mui/material";
import upArrow from "../assets/images/icon-arrow-up.svg";
import patternIMG from "../assets/images/pattern-light-bg.svg";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          background: "#062630",
          width: "375px",
          color: "white",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            zIndex: "1",
            backgroundImage: ` url(${patternIMG})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            width: "100%",
            height: "100%",
          }}
        ></Box>
        <Typography
          variant="h1"
          sx={{
            fontSize: 35,
            fontWeight: "bold",
            textAlign: "left",
            lineHeight: "3.5rem",
            margin: "24px 0 32px",
          }}
        >
          Ready to debug your reading list?
        </Typography>

        <Button
          variant="contained"
          sx={{
            background: "transparent",
            width: "343px",
            height: "64px",
            border: "2px solid #062630",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            color: "black",
            padding: "0",
          }}
        >
          <Typography
            sx={{ fontWeight: "bold", margin: "auto", color: "#fff5ef" }}
          >
            REVIEW MEMBERSHIP OPTIONS
          </Typography>
          <img
            src={upArrow}
            alt="Arrow here "
            style={{ width: "24px", padding: "0 5px" }}
          />
        </Button>
      </Box>
      <Box>
        @ 2024 - Tech Book Club
        <Box>

        </Box>
      </Box>
    </>
  );
};

export default Footer;
