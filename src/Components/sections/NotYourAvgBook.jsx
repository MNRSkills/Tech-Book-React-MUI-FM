import {
  Box,
  Typography,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
// import NotYourBook from "../assets/images/image-not-average-mobile.webp";

function NotYourAvgBook({ notyourBook, notyourBookMD }) {
  return (
    //   NOT YOUR AVERAGE BOOK CLUB IS THE SECOND SECTION.
    <Box component="section" sx={{ display: "flex", gap: "20px" }}>
      <Box
        sx={{
          width: {
            lg: "520px",
            md: "704px",
          },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "2em",
            fontWeight: "bold",
            mb: 2,
          }}
        >
          Not you average book club
        </Typography>
        <Typography>
          Connect with a community that speaks your language - from Python to
          TypeScript and everything in between. Our discussions blend technical
          depth with practical applications.
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundImage: {
            sm: `url(${notyourBook})`,
            md: `url(${notyourBookMD})`,
          },
          backgroundPosition: "center",
          backgroundSize: "50% auto",
          backgroundRepeat: "no-repeat",
          height: "520px",
          width: {
            sm: "338px",
            md: "768px",
            lg: "560px",
          },
        }}
      ></Box>
    </Box>
  );
}

export default NotYourAvgBook;
