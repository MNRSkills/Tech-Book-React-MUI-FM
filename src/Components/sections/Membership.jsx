import { Box, Container, Button, Typography } from "@mui/material";
import Cards from "../Cards";
const Membership = () => {
  const cardData = [
    {
      title: "Starter",
      price: "19",
      icon: "icon",
      access1: "1 book/month",
      access2: "Online forums",
    },
    {
      title: "Pro",
      price: "29",
      icon: "icon",
      access1: "2 books/month",
      access2: "Virtual meetups",
    },
    {
      title: "Enterprise",
      price: "Custom",
      icon: "icon",
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
        <Box>
          {cardData.map((accessTier, index) => {
            return <Cards accessTier={accessTier} key={index} />;
          })}
        </Box>
      </Box>
    </>
  );
};

export default Membership;
