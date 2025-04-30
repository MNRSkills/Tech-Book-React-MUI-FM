import { Box, Stack, Typography } from "@mui/material";

const Section = ({ image, children, titleVariant = "h2", sx = {} }) => {
  console.log(image);
  return (
    <Stack spacing={6} direction={{ sm: "column", md: "column", lg: "row" }}>
      <Box
        sx={{
          width: { xs: "343px", sm: "365px", md: "768px", lg: "431px" },
        }}
      >
        {children}
      </Box>
      <Box>
        {image && (
          <img
            src={image}
            alt="image of readers"
            // style={{ width: { xs: "343px", md: "760px", lg: "1440px" } }}
            style={{ width: "343px" }}
          />
        )}
      </Box>
    </Stack>
  );
};

export default Section;
