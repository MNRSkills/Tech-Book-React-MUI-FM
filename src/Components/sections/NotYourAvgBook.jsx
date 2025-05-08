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

function NotYourAvgBook({ notyourBook, notyourBookMD, notyourBookLG }) {
  return (
    //   NOT YOUR AVERAGE BOOK CLUB IS THE SECOND SECTION.
    <Box
      component="section"
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        gap: "20px",
        width: { lg: "100%" },
      }}
    >
      {/* TEXT WRAPPER */}
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
            marginBottom: "24px",
            width: {
              sm: "343px",
              md: "704px",
              lg: "504px",
            },
            fontSize: { sm: "2em", md: "3em" },
            fontWeight: "bold",
          }}
        >
          Not you average book club
        </Typography>
        <Typography sx={{ width: "90%", height: "112px", lineHeight: "175%" }}>
          Connect with a community that speaks your language - from Python to
          TypeScript and everything in between. Our discussions blend technical
          depth with practical applications.
        </Typography>
      </Box>
      {/* IMAGE TO SECTION */}
      <Box
        sx={{
          backgroundImage: {
            sm: `url(${notyourBook})`,
            md: `url(${notyourBookMD})`,
            lg: `url(${notyourBookLG})`,
          },
          backgroundPosition: "center",
          backgroundSize: "560px auto",
          backgroundRepeat: "no-repeat",
          height: "520px",
          width: {
            sm: "338px",
            md: "768px",
            lg: "560px",
          },
          borderRadius: "5%",
        }}
      ></Box>
    </Box>
  );
}

export default NotYourAvgBook;
