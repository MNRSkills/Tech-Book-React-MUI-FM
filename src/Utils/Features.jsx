import { Box, Typography } from "@mui/material";

import peopleImg from "../assets/images/image-avatars.webp";
import stars from "../assets/images/icon-star.svg";

export const StarFeature = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          gap: "12px",
          marginTop: "20px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "red",
            backgroundImage: `url(${peopleImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
            width: {
              sm: "110px", 
              md: "110px",
            },
          }}
        ></Box>

        <Box>
          {Array.from({ length: 5 }).map((_, index) => (
            <img
              key={index}
              src={stars}
              alt={`Replicated Image ${index + 1}`}
              className="w-32 md:w-24 h-32 object-cover"
            />
          ))}
          <Typography>200+ developers joined already</Typography>
        </Box>
      </Box>
    </>
  );
};

// export const Button = () => {};
