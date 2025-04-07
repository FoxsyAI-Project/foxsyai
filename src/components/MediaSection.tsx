import {
    Box,
    Container,
    Typography,
    IconButton,
    Dialog,
    DialogContent,
  } from "@mui/material";
  import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
  import Slider from "react-slick";
  import { useState } from "react";
  import OrangeLine from "./OrangeLine";
  import media1 from "../assets/images/foxAgent.jpg";
  import media2 from "../assets/images/foxKeeper.jpg";
  import media3 from "../assets/images/foxSquad.jpg";
  import media4 from "../assets/images/foxLeague.jpg";
  
  const mediaItems = [
    { image: media1, video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { image: media2, video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { image: media3, video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { image: media4, video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  ];
  
  const MediaSection = () => {
    const [open, setOpen] = useState(false);
    const [activeVideo, setActiveVideo] = useState("");
  
    const handlePlay = (video: string) => {
      setActiveVideo(video);
      setOpen(true);
    };
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 400,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        { breakpoint: 960, settings: { slidesToShow: 2 } },
        { breakpoint: 600, settings: { slidesToShow: 1 } },
      ],
    };
  
    return (
      <Box sx={{ bgcolor: "#1a1a1a", py: 10, color: "#fff" }}>
        <Container>
          <Box sx={{ mb: 4 }}>
            <OrangeLine />
            <Typography variant="subHeading1">
              Media
            </Typography>
          </Box>
  
          <Slider {...settings}>
            {mediaItems.map((item, idx) => (
              <Box key={idx} sx={{ px: 2 }}>
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: 2,
                    overflow: "hidden",
                    height: 280,
                    backgroundColor: "#000",
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={`Media ${idx + 1}`}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <IconButton
                    onClick={() => handlePlay(item.video)}
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      color: "#fff",
                      backgroundColor: "rgba(0,0,0,0.5)",
                      "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
                    }}
                  >
                    <PlayCircleFilledWhiteIcon fontSize="large" />
                  </IconButton>
                </Box>
              </Box>
            ))}
          </Slider>
  
          <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
            <DialogContent sx={{ p: 0 }}>
              <Box sx={{ position: "relative", paddingTop: "56.25%" }}>
                <iframe
                  src={activeVideo}
                  title="Media Video"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
            </DialogContent>
          </Dialog>
        </Container>
      </Box>
    );
  };
  
  export default MediaSection;
  