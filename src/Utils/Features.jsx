import { Box, Typography } from "@mui/material";

import peopleImg from "../assets/images/image-avatars.webp";
import stars from "../assets/images/icon-star.svg";

export const StarFeature = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          marginTop: "20px",
        }}
      >
        <Box sx={{ backgroundColor: "red", margin: "auto" }}>
          <img src={peopleImg} alt="" style={{ width: "100px" }} />
        </Box>
        <Box>
          <Box>
            {Array.from({ length: 5 }).map((_, index) => (
              <img
                key={index}
                src={stars}
                alt={`Replicated Image ${index + 1}`}
                className="w-32 h-32 object-cover"
              />
            ))}
            <Typography>200+ developers joined already</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

// export const Button = () => {};
