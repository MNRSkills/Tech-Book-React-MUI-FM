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

function NotYourAvgBook() {
  return (
    //   NOT YOUR AVERAGE BOOK CLUB IS THE SECOND SECTION.
    <>
      <Box>
        <Typography
          variant="h1"
          sx={{ fontSize: "2em", fontWeight: "bold", mb: 2 }}
        >
          Not you average book club
        </Typography>
        <Typography>
          Connect with a community that speaks your language - from Python to
          TypeScript and everything in between. Our discussions blend technical
          depth with practical applications.
        </Typography>
      </Box>
    </>
  );
}

export default NotYourAvgBook;
