import { Box, Container, Typography } from "@mui/material";
import Logo from "../assets/images/FoxsyAILogo.png"; // Replace with actual logo path

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#000", py: 3, color: "#fff" }}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Box
          component="img"
          src={Logo}
          alt="Foxsy AI"
          sx={{ height: 40 }}
        />
        <Typography variant="para12" sx={{ mt: { xs: 2, sm: 0 }, textAlign: { xs: "center", sm: "right" } }}>
          © All Rights Reserved. FOXSY AI. | contact@foxsy.ai
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
