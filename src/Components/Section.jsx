import { Box, Typography } from "@mui/material";

const Section = ({ image, children, titleVariant = "h2", sx = {} }) => {
  return (
    <section style={{ margin: "64px 0", width: "343px" }}>
      <Box sx={{  }}>{children}</Box>
      <Box>
        {image && (
          <img
            src={image}
            alt="image of readers"
            style={{ width: { xs: "343px", md: "760px", lg: "1440px" } }}
          />
        )}
      </Box>
    </section>
  );
};

export default Section;
