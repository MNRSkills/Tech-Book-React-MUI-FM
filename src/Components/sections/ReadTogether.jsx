import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
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
      <Container>
        <Box>
          <List>
            {listItems.map((item, index) => (
              <FeatureItem key={index} text={item} />
            ))}
          </List>
        </Box>
        <Box sx={{ padding: "10px" }}>
          <img src={reading} alt="" style={{ width: "343px" }} />
        </Box>
      </Container>
    </>
  );
}

export default ReadTogether;
