import {
    Box,
    Container,
    Typography,
    IconButton,
    Dialog,
    DialogContent,
    useMediaQuery
  } from "@mui/material";
  import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
  import Slider from "react-slick";
  import { useState } from "react";
  import OrangeLine from "./OrangeLine";
  import media1 from "../assets/images/foxAgent.jpg";
  import media2 from "../assets/images/foxKeeper.jpg";
  import media3 from "../assets/images/foxSquad.jpg";
  import media4 from "../assets/images/foxLeague.jpg";
  import { useTheme } from "@mui/material/styles";
  
 
  const youtubeVideos = [
    "https://www.youtube.com/watch?v=LSj4elgdMsQ",
    "https://www.youtube.com/watch?v=6W3Z4Z0tYVg",
    "https://www.youtube.com/watch?v=vhC4hyR03co",
    "https://www.youtube.com/watch?v=zpsuUe2cIOA",
  ];
  
  const mediaItems = youtubeVideos.map((url) => {
    const videoId = new URL(url).searchParams.get("v");
    return {
      thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
      video: `https://www.youtube.com/embed/${videoId}`,
    };
  });


  const MediaSection = () => {
    const [open, setOpen] = useState(false);
    const [activeVideo, setActiveVideo] = useState("");
  
    const handlePlay = (video: string) => {
      setActiveVideo(video);
      setOpen(true);
    };
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const showArrow = isMobile ? false : true;
    const showCenterMode = isMobile ? true : false;
    const settings = {
      dots: true,
      infinite: true,
      speed: 400,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: showArrow,
      centerMode: showCenterMode,
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
                    cursor: "grab",
                    borderRadius: 2,
                    overflow: "hidden",
                    height: 280,
                    width: "90%",
                    backgroundColor: "#000",
                  }}
                >
                  <Box
                    component="img"
                    src={item.thumbnail}
                    alt={`Media ${idx + 1}`}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      opacity:0.7
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
  