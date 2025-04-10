import { Box, Container, Typography } from "@mui/material";
import OrangeLine from "../OrangeLine";

const GetStartedSection = () => {
  return (
    <Box sx={{ bgcolor: "#fff", py: 10, display: "flex", flexDirection: "column" }}>
      <Container sx={{ bgcolor: "#fff", display: "flex", flexDirection: "column" }}>
        <OrangeLine />
        <Typography
          variant="subHeading1"
          sx={{ color: "primary.dark", mb: 2 }}
        >
          Two Simple Ways to Get Started
        </Typography>

        <Typography variant="para16" sx={{ color: "grey.300", mb: 2 }}>
          To get your hands on $FOXSY, you can go one of two ways — depending on what you’re comfortable with:
        </Typography>

        <Typography variant="para16" sx={{ color: "grey.300", mb: 1 }}>
          <strong>1. Centralized Exchange (CEX)</strong> Method (the easiest and most beginner-friendly option)
        </Typography>

        <Typography variant="para16" sx={{ color: "grey.300", mb: 1 }}>
          <strong>2. Non-Custodial Method</strong> (for those who like full control over their crypto and already use wallets)
        </Typography>

        <Typography variant="para16" sx={{ color: "grey.300", mt: 2 }}>
          Let’s break down both so you can choose what works best for you.
        </Typography>
      </Container>
    </Box>
  );
};

export default GetStartedSection;
