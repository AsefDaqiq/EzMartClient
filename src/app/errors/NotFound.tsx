import { Button, Container, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Container component={Paper} sx={{ height: 400 }}>
      <Typography gutterBottom variant="h3">
        Oops - we could not find what you were looking for
      </Typography>
      <Button fullWidth component={Link} to="/catalog">
        {" "}
        Go back to the shop
      </Button>
    </Container>
  );
}
