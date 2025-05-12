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

function NotYourAvgBook({ notyourBook, notyourBookMD, notyourBookLG, circle }) {
  return (
    //   NOT YOUR AVERAGE BOOK CLUB IS THE SECOND SECTION.
    <Box
      component="section"
      sx={{
        width: { lg: "100%" },
        height: { lg: "100%" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { sm: "column", lg: "row" },
          justifyContent: "space-around",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {/* TEXT WRAPPER */}
        <Box
          sx={{
            position: "relative",
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
                md: "534px",
                lg: "504px",
              },
              fontSize: { sm: "2em", md: "2.5em" },
              fontWeight: "bold",
            }}
          >
            Not you average book club
          </Typography>
          <Box component="span" sx={{ position: "absolute" }}>
            <img src={circle} alt="" />
          </Box>
          {/* MISSION STATEMENT */}
          <Typography sx={{ width: "90%", lineHeight: "175%" }}>
            Connect with a community that speaks your language - from Python to
            TypeScript and everything in between. Our discussions blend
            technical depth with practical applications.
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
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: {
              xs: "318px",
              md: "653px",
              lg: "520px",
            },
            width: {
              sm: "338px",
              md: "705px",
              lg: "560px",
            },
            borderRadius: "5%",
            marginTop: "40px",
          }}
        ></Box>
      </Box>
    </Box>
  );
}

export default NotYourAvgBook;
