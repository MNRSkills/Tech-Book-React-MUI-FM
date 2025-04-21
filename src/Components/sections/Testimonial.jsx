// import peopleImg from "../../assets/images/images-avatars.webp";
import { Box, Typography } from "@mui/material";
import { StarFeature } from "../../Utils/Features";
import stars from "../../assets/images/icon-star.svg";
const Testimonial = (props) => {
  console.log(props);
  return (
    <>
      {/* <StarFeature/> */}

      {Array.from({ length: 5 }).map((_, index) => (
        <img
          key={index}
          src={stars}
          alt={`Replicated Image ${index + 1}`}
          className="w-32 h-32 object-cover"
        />
      ))}

      <Typography variant="h5" sx={{fontWeight:"bold"}}>
        "This book club transformed my technical reading from a solitary activity into an enriching community experience. The discussions are gold!"
      </Typography>

      <Typography sx={{padding:"20px 0"}}>Sarah Chen, Software Architect</Typography>
    </>
  );
};

export default Testimonial;
