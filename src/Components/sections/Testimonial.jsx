// import peopleImg from "../../assets/images/images-avatars.webp";
import { Box, Typography } from "@mui/material";
import { StarFeature } from "../../Utils/Features";
import stars from "../../assets/images/icon-star.svg";
const Testimonial = (props) => {
  console.log(props);
  return (
    <Box component="section" sx={{}}>
      {/* <StarFeature/> */}

      {Array.from({ length: 5 }).map((_, index) => (
        <img
            key={index}
            src={stars}
            alt={`Replicated Image ${index + 1}`}
            className="w-32 h-16 object-cover"
          />

      ))}

      <Typography variant="h5" sx={{ fontWeight: "bold", marginTop:"40px"}}>
        "This book club transformed my technical reading from a solitary
        activity into an enriching community experience. The discussions are
        gold!"
      </Typography>

      <Typography sx={{ padding: "20px 0", opacity:"0.40" }}>
        Sarah Chen, Software Architect
      </Typography>
    </Box>
  );
};

export default Testimonial;
