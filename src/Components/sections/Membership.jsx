import { Box, Container, Button, Typography } from "@mui/material";
import Cards from "../Cards";
const Membership = () => {
  const cardData = [
    {
      title: "Starter",
      price: 19,
      subNow: "Subscribe Now",
      access1: "1 book/month",
      access2: "Online forums",
    },
    {
      title: "Pro",
      price: 29,
      subNow: "Subscribe Now",
      access1: "2 books/month",
      access2: "Virtual meetups",
    },
    {
      title: "Enterprise",
      price: "Custom",
      subNow: "Talk To Us",
      access1: "Team access",
      access2: "Private session",
    },
  ];
  return (
    <>
      <Box>
        <Typography
          variant="h1"
          sx={{ fontSize: "2em", fontWeight: "bold", mb: 2 }}
        >
          Membership options
        </Typography>
        {/* Move the width to section for all sections */}
        <Box sx={{}}>
          {cardData.map((accessTier, index) => {
            return (
              <Cards
                accessTier={accessTier}
                key={index}
                gradientStyle={index === 1}
              />
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default Membership;
