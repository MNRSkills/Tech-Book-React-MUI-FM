import { Box, Typography } from "@mui/material";

const Section = ({ image, children, titleVariant = "h2", sx = {} }) => {
  return (
    <section style={{ margin: "64px 0" }}>
     
      <Box>{children}</Box>
      <Box>
        {image && (
          <img src={image} alt="image of readers" style={{ width: "343px" }} />
        )}
      </Box>
    </section>
  );
};

export default Section;
