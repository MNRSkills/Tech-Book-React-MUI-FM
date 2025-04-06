import {
  Typography,
  Button,
  Container,
  List,
  ListItem,
  Box,
} from "@mui/material";

const Cards = ({ accessTier }) => {
  return (
    <>
      <Container sx={{ border: "1px solid #385159 " }}>
        <Typography
          variant="h1"
          sx={{ fontSize: "2em", fontWeight: "bold", mb: 2 }}
        >
          {accessTier.title}
        </Typography>
        <Box>
          <List>
            <ListItem>
              <Typography>{accessTier.access1}</Typography>
            </ListItem>
            <ListItem>
              <Typography>{accessTier.access2}</Typography>
            </ListItem>
          </List>
        </Box>
      </Container>
    </>
  );
};

export default Cards;
