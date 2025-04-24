import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
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
      <Typography
        variant="h1"
        sx={{ fontSize: "2em", fontWeight: "bold", mb: 2 }}
      >
        Membership options
      </Typography>
      {/* Move the width to section for all sections */}
      {/* <Grid
        container
        spacing={}
        // key={index}
        xs={12} // full width on phones
        sm={6} // still one per row
        md={4} // 2 per row on tablet
        //lg={4} // 3 per row on desktop
      >
        {cardData.map((accessTier, index) => {
          return (
            <Cards
              accessTier={accessTier}
              key={index}
              gradientStyle={index === 1}
            />
          );
        })}
      </Grid> */}

      <Grid container spacing={2} columns={{ xs: 1, sm: 2, md: 2 }}>
        {cardData.map((accessTier, index) => (
          <Grid
            item
            key={index}
            xs={12} // 1 per row on mobile
            sm={12}
            md={6} // 2 per row on tablets
            lg={4} // 3 per row on desktop
          >
            <Cards accessTier={accessTier} gradientStyle={index === 1} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Membership;
