import { Box, Typography, Button, Stack, Container } from "@mui/material";
import heroImage from "../assets/images/hero-image.png";
import instagramIcon from "../assets/images/instagram.svg";
import twitterIcon from "../assets/images/x.svg";
import tiktokIcon from "../assets/images/tiktok.svg";
import telegramIcon from "../assets/images/telegram.svg";

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        py: { xs: 6, md: 10 },
        px: 2,
        bgcolor: "#000",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "1200px",
          borderRadius: "40px",
          overflow: "hidden",
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: { xs: "auto", md: "600px" },
          boxShadow: "0 20px 80px rgba(0,0,0,0.5)",
        }}
      >
        <Container sx={{ zIndex: 2, position: "relative", py: 6 }}>
          <Box sx={{ maxWidth: 600, paddingLeft:"10%" }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "40px", md: "72px" },
                fontWeight: 700,
                lineHeight: 1,
                color: "#fff",
              }}
            >
              OUT <br />
              FOXING <br />
              THE FUTURE
            </Typography>

            <Typography variant="body1" sx={{ mt: 3, color: "#ccc" }}>
              Pioneering innovation in <br />
              <Typography
                component="span"
                variant="h6"
                sx={{
                  display: "inline",
                  fontWeight: 400,
                  fontSize: "28px",
                  color: "#fff",
                }}
              >
                AI, Robotics & Blockchain
              </Typography>
            </Typography>

            {/* CTA */}
            <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#EA3807",
                  color: "#fff",
                  borderRadius: "999px",
                  textTransform: "none",
                  px: 4,
                  py: 1.5,
                  fontSize: "16px",
                  fontWeight: 600,
                  "&:hover": { bgcolor: "#d23100" },
                }}
              >
                Get $FOXSY
              </Button>
            </Stack>

            {/* Social Icons */}
            <Stack direction="row" spacing={2} sx={{ mt: 5 }}>
              {[telegramIcon, tiktokIcon, instagramIcon, twitterIcon].map(
                (icon, idx) => (
                  <img
                    key={idx}
                    src={icon}
                    alt="social-icon"
                    style={{
                      width: 28,
                      height: 28,
                      filter: "invert(1)",
                      cursor: "pointer",
                    }}
                  />
                )
              )}
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HeroSection;
