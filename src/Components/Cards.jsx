import {
  Typography,
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
} from "@mui/material";
import checkBox from "../assets/images/icon-check.svg";
import patternGlow from "../assets/images/pattern-glow.svg";
console.log(patternGlow);

const Cards = ({ accessTier, gradientStyle }) => {
  console.log(accessTier);
  return (
    <>
      <Container
        sx={{
          boxShadow: "0 1px 4px #385159",
          padding: "20px 20px",
          margin: "24px 0",
          borderRadius: "2%",
          position: "relative",
          overflow: "hidden",
          background: gradientStyle ? "#faf5f3" : "#fffff",
        }}
      >
        {gradientStyle ? (
          <Box
            sx={{
              position: "absolute",
              bottom: { xs: "100px", sm: "25%" },
              right: { xs: "-115px", sm: "-40px" },
              width: { xs: "400px", sm: "800px", md: "1100px" },
            }}
          >
            <img
              src={patternGlow}
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        ) : null}

        <Typography
          variant="h1"
          sx={{ fontSize: "18px", fontWeight: "bold", mb: 2 }}
        >
          {accessTier.title}
        </Typography>
        {typeof accessTier.price === "number" ? (
          <Typography
            variant="h1"
            sx={{ fontSize: "25px", fontWeight: "700", margin: "24px 0" }}
          >
            {"$" + accessTier.price}
          </Typography>
        ) : (
          <Typography variant="h4" sx={{ fontWeight: "700" }}>
            {accessTier.price}
          </Typography>
        )}
        <Box
          sx={{ border: "1px solid #e6e1df", width: "100%", margin: "auto" }}
        ></Box>
        <Box>
          <List sx={{ margin: "24px 0" }}>
            <ListItem>
              <ListItemIcon>
                <img src={checkBox} alt="picture" />
              </ListItemIcon>
              <ListItemText primary={accessTier.access1} />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <img src={checkBox} alt="" />
              </ListItemIcon>
              <ListItemText primary={accessTier.access2} />
            </ListItem>
          </List>
        </Box>
        <Button
          sx={{
            background: "#fff5ef",
            width: "100%",
            height: "64px",
            border: "2px solid #062630",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            color: "black",
            padding: "0",
            margin: "24px 0",
          }}
        >
          {accessTier.subNow}
        </Button>
      </Container>
    </>
  );
};

export default Cards;
