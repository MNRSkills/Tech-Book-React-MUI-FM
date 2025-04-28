import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid2,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import checkbox from "../../assets/images/icon-check.svg";
import reading from "../../assets/images/image-read-together-mobile.webp";

// Data abstraction for list items
const listItems = [
  "Monthly curated tech reads selected by industry experts",
  "Virtual and in-person meetups for deep-dive discussions",
  "Early access to new tech book releases",
  "Author and Q&A sessions with tech thought leaders",
];

// Reusable component for a single list item
const FeatureItem = ({ text }) => (
  <ListItem>
    <ListItemIcon>
      <img src={checkbox} alt="check icon" />
    </ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
);

function ReadTogether() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "blue",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "2em",
            fontWeight: "bold",
            mb: 2,
            textAlign: "left",
            maxWidth: "100%",
          }}
        >
          Read together, grow together
        </Typography>
        <Box>
          <List sx={{width: {lg:"530px"}}}>
            {listItems.map((item, index) => (
              <FeatureItem key={index} text={item} />
            ))}
          </List>
        </Box>
      </Box>
    </>
  );
}

export default ReadTogether;
