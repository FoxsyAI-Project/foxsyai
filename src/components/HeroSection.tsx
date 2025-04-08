import { Box, Typography, Button, Stack, Container, useMediaQuery } from "@mui/material";
import heroImageDesktop from "../assets/images/hero-image.png";
import heroImageMobile from "../assets/images/hero-image-mobile.jpg";
import instagramIcon from "../assets/images/instagram.svg";
import twitterIcon from "../assets/images/x.svg";
import tiktokIcon from "../assets/images/tiktok.svg";
import telegramIcon from "../assets/images/telegram.svg";
import { useTheme } from "@mui/material/styles";

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const backgroundImage = isMobile ? heroImageMobile : heroImageDesktop;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        py: { xs: 6, md: 5 },
        px: 0,
        background: "linear-gradient(to bottom, #000000 0%, #232121 100%)",
        width: "100%",
      }}
    >
      
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: { xs: "100vw", md: "1200px" },
          height: "100%",
          borderRadius: "40px",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: { xs: "auto", md: "600px" },
          boxShadow: "0 20px 80px rgba(0,0,0,0.5)",
        }}
      >
        <Container disableGutters sx={{  position: "relative", py: 6 }} >
          <Box sx={{ maxWidth: 600, paddingLeft: "10%" }}>
            <Typography
              variant="h1"
              sx={{
                color: "#fff",
              }}
            >
              OUT <br />
              FOXING <br />
              THE <br />
              FUTURE
            </Typography>

            <Typography variant="para14" sx={{ mt: 3, color: "#ccc" }}>
              Pioneering innovation in <br />
              <Typography
                component="span"
                variant="captionH1"
                sx={{
                  display: "inline",
                  color: "#fff",
                }}
              >
                AI, Robotics & Blockchain
              </Typography>
            </Typography>

            {/* CTA and Social Icons aligned left and right */}
            <Box
              sx={{
                mt: 5,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap", // for responsiveness
                pr: "10%", // to match left padding visually
              }}
            >
              {/* Social Icons - Left */}
              <Stack direction="row" spacing={2}>
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

              {/* CTA Button - Right */}
              
              <Button
                variant="contained"
                sx={{
                  ...theme.typography.b1,
                  bgcolor: "#EA3807",
                  color: "#fff",
                  borderRadius: "999px",
                  textTransform: "none",
                  px: 4,
                  py: 1.5,
                  "&:hover": { bgcolor: "#d23100" },
                  mt: { xs: 3, md: 0 }, // stack on small screens
                }}
              >
                Get $FOXSY
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HeroSection;
