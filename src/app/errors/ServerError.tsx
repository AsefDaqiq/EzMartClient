import { Container, Divider, Paper, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

export default function ServerError() {
  const { state } = useLocation();

  return (
    <Container component={Paper}>
      {state?.error ? (
        <>
          <Typography variant="h3" gutterBottom color="secondary">
            {state.error.title}
          </Typography>
          <Divider></Divider>
          <Typography variant="body1">
            {state.error.detail || "internal server error"}
          </Typography>
        </>
      ) : (
        <Typography gutterBottom variant="h5">
          {" "}
          Server error
        </Typography>
      )}
    </Container>
  );
}
