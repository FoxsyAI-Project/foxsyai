import { Box, Typography } from "@mui/material";

const OrDivider = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        my: 2,
        width: "100%",
      }}
    >
      {/* Left line */}
      <Box
        sx={{
          width: 80, // Shorter line
          height: "1px",
          bgcolor: "grey.200",
          opacity: 0.6,
        }}
      />

      {/* OR text */}
      <Typography
      variant="subHeading4"
        sx={{
          mx: 2,
          color: "grey.300",
          
        }}
      >
        OR
      </Typography>

      {/* Right line */}
      <Box
        sx={{
          width: 80, // Shorter line
          height: "1px",
          bgcolor: "grey.200",
          opacity: 0.6,
        }}
      />
    </Box>
  );
};

export default OrDivider;
