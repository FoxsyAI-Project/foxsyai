import { Box, Typography, Container } from "@mui/material";
import OrangeLine from "./OrangeLine";

const AboutSection = () => {
  return (
    <Box sx={{ bgcolor: "#1a1a1a", color: "white", py: 8 }}>
      <Container>
    <OrangeLine />
        <Typography variant="h4" gutterBottom>
          What is Foxsy AI?
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 800 }}>
          Cutting-edge online robotics lab, providing access to advanced simulation environments and real hardware,
          entirely accessible remotely.
        </Typography>
        <Typography variant="para14">
        While full-scale hardware access is still on the horizon, early adopters can engage with our simulation tools, participate seamlessly online, and transact securely via blockchain, earning and paying through crypto tokens.
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutSection;
