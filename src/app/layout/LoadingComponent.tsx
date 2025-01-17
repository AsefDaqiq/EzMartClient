import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";

interface Props {
  message?: string;
}

export default function LoadingComponent({ message = "Loading..." }: Props) {
  return (
    <Backdrop open={true} sx={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress
          size={100}
          style={{ color: "#00796b" }} // Custom teal color for spinner
        />
        <Typography
          variant="h5"
          sx={{
            color: "#fff",
            textAlign: "center",
            fontWeight: 600,
            letterSpacing: "0.5px",
            fontSize: "1.25rem",
            maxWidth: "80%",
            lineHeight: "1.5",
          }}
        >
          {message}
        </Typography>
      </Box>
    </Backdrop>
  );
}
