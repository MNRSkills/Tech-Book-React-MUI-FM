import { Box, Stack, Typography } from "@mui/material";

const Section = ({ image, children, titleVariant = "h2", sx = {} }) => {
  console.log(image);
  return (
    <Stack
      spacing={6}
      direction={{ sm: "column", md: "column", lg: "row" }}
      sx={{ marginTop: "64px" }}
    >
      {children}
    </Stack>
  );
};

export default Section;
