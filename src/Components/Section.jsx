import { Box, Typography } from "@mui/material";

const Section = ({ image, children, titleVariant = "h2", sx = {} }) => {
  console.log(image);
  return (
    <section>
      <Box
        sx={{
          width: { xs: "343px", sm: "365px", md: "768px", lg: "1440px" },
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
    </section>
  );
};

export default Section;
