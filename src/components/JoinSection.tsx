import {
    Box,
    Container,
    Typography,
    Button,
    IconButton,
    Stack,
    useMediaQuery,
    useTheme,
  } from "@mui/material";
  
  import TelegramIcon from "../assets/images/telegram.svg";
  import TiktokIcon from "../assets/images/tiktok.svg";
  import InstagramIcon from "../assets/images/instagram.svg";
  import XIcon from "../assets/images/x.svg";
  
  const JoinSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
    return (
      <Box sx={{ bgcolor: "#fff", py: 10 }}>
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 4,
            }}
          >
            {/* Text Section */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h4" fontWeight={500} sx={{ color: "#555" }}>
                Join Foxsy AI
              </Typography>
              <Typography variant="h6" fontWeight={600} sx={{ mt: 1, color: "#444" }}>
                to shape the future of robotics and transform society through technology!
              </Typography>
              <Typography variant="body1" sx={{ mt: 2, color: "#666", maxWidth: 600 }}>
                If you share our vision, if you believe amazing technologies should be created for
                the purpose of enriching lives, if you are interested in robotics, AI or blockchain
                - JOIN US! We would love to have you along on our journey.
              </Typography>
  
              <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                <IconButton component="a" href="https://t.me/foxsyai" target="_blank">
                  <Box component="img" src={TelegramIcon} alt="Telegram" sx={{ width: 24, height: 24 }} />
                </IconButton>
                <IconButton component="a" href="https://www.tiktok.com/@foxsyai" target="_blank">
                  <Box component="img" src={TiktokIcon} alt="TikTok" sx={{ width: 24, height: 24 }} />
                </IconButton>
                <IconButton component="a" href="https://instagram.com/foxsyai" target="_blank">
                  <Box component="img" src={InstagramIcon} alt="Instagram" sx={{ width: 24, height: 24 }} />
                </IconButton>
                <IconButton component="a" href="https://x.com/foxsyai" target="_blank">
                  <Box component="img" src={XIcon} alt="X" sx={{ width: 24, height: 24 }} />
                </IconButton>
              </Stack>
            </Box>
  
            {/* CTA Button */}
            <Box>
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "#d2461e",
                  px: 4,
                  py: 1.5,
                  borderRadius: "999px",
                  textTransform: "none",
                  fontWeight: 700,
                  fontSize: "1rem",
                  "&:hover": {
                    bgcolor: "#c13f1c",
                  },
                }}
              >
                Get $FOXSY
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    );
  };
  
  export default JoinSection;
  