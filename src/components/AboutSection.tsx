import { Box, Typography, Container, Stack } from "@mui/material";
import OrangeLine from "./OrangeLine";
import aboutImage from "../assets/images/aboutSection.png"; // replace with your actual path

const AboutSection = () => {
  return (
    <Box sx={{ bgcolor: "grey.500", color: "white", py: 8 }}>
      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Left - Text content */}
          <Box flex={1} sx={{p:{ xs: 1, md: 0}}}>
            <OrangeLine />
            <Typography variant="subHeading1" gutterBottom sx={{mb:5}}>
              What is Foxsy AI?
            </Typography>
            <Typography variant="captionH1" sx={{ maxWidth: 800, display: "block", mb: 4,mt: 4 }}>
              Cutting-edge online robotics lab, providing access to advanced simulation environments and real hardware,
              entirely accessible remotely.
            </Typography>
            <Box
            component="img"
            src={aboutImage}
            alt="robotic simulation"
            sx={{
              width: { xs: "100%", md: "300px" },
              display: { xs: "block", md: "none" },
              height: "auto",
              objectFit: "contain",
            }}
          />
            <Typography variant="para14" sx={{ color:"grey.200"}}>
              While full-scale hardware access is still on the horizon, early adopters can engage with our simulation
              tools, participate seamlessly online, and transact securely via blockchain, earning and paying through
              crypto tokens.
            </Typography>
          </Box>

          {/* Right - Image */}
          <Box
            component="img"
            src={aboutImage}
            alt="robotic simulation"
            sx={{
              width: { xs: "100%", md: "300px" },
              display: { xs: "none", md: "block" },
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default AboutSection;
