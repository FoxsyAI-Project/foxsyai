import {
  Box,
  Container,
  Typography,
  IconButton,
  Dialog,
  DialogContent,
  useMediaQuery,
} from "@mui/material";
import Slider from "react-slick";
import { useState } from "react";
import eindhovenImg from "../assets/images/eindhoven.jpg";
import bordeauxImg from "../assets/images/bordeaux.jpg";
import nagoyaImg from "../assets/images/nagoya.jpg";
import joaoPessoaImg from "../assets/images/joao-pessoa.jpg";
import singaporeImg from "../assets/images/singapore.jpg";
import grazImg from "../assets/images/graz.jpg";
import OrangeLine from "./OrangeLine";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useTheme } from "@mui/material/styles";

// Dummy video URL
const dummyVideo = "https://www.youtube.com/embed/dQw4w9WgXcQ";
const NagoyaVideo = "https://archive.robocup.info/app/JaSMIn/embedded.html?replay=../../Soccer/Simulation/2D/replays/RoboCup/2017/Elimination/3rdPlace/20170730111925-FRA-UNIted_1-vs-Oxsy_0.replay.gz"
const SingaporeVideo = "https://archive.robocup.info/app/JaSMIn/embedded.html?replay=../../Soccer/Simulation/2D/replays/RoboCup/2010/Elimination/LF/201006241100-Oxsy_3-vs-WrightEagle_7.replay.gz"
const GrazVideo = "https://archive.robocup.info/app/JaSMIn/embedded.html?replay=../../Soccer/Simulation/2D/replays/RoboCup/2009/Elimination/LF/200907051031-HELIOS2009_2-vs-Oxsy_0.replay.gz"
const JaoaVideo = "https://archive.robocup.info/app/JaSMIn/embedded.html?replay=../../Soccer/Simulation/2D/replays/RoboCup/2014/Elimination/3rdPlace/201407241033-HELIOS2014_1-vs-Oxsy_2.replay.gz"
const achievements = [
  {
    year: "2024",
    location: "Eindhoven",
    subtitle: "Official Sponsor",
    image: eindhovenImg,
    video: dummyVideo,
  },
  {
    year: "2023",
    location: "Bordeaux",
    subtitle: "1st place\nin Cooperative Challenge",
    image: bordeauxImg,
    video: dummyVideo,
  },
  {
    year: "2017",
    location: "Nagoya",
    subtitle: "3rd place",
    image: nagoyaImg,
    video: NagoyaVideo,
  },
  {
    year: "2014",
    location: "Joao Pessoa",
    subtitle: "3rd place",
    image: joaoPessoaImg,
    video: JaoaVideo,
  },
  {
    year: "2010",
    location: "Singapore",
    subtitle: "3rd place",
    image: singaporeImg,
    video: SingaporeVideo,
  },
  {
    year: "2009",
    location: "Graz",
    subtitle: "3rd place",
    image: grazImg,
    video: GrazVideo,
  },
];

const AchievementsSection = () => {
  const [open, setOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handlePlay = (video: string) => {
    setActiveVideo(video);
    setOpen(true);
  };

  const showArrow = isMobile ? false : true;
  const showCenterMode = isMobile ? true : false;
  


  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    centerMode: showCenterMode,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: showArrow,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Box sx={{ bgcolor: "grey.400", py: 10, color: "#fff" }}>
      <Container>
        <Box sx={{ mb: 4 }}>
          <OrangeLine />
          <Typography variant="subHeading1">Achievements</Typography>
        </Box>

        <Slider {...settings} className="custom-slider">
          {achievements.map((item, idx) => (
            <Box
              key={idx}
              sx={{
                px: 2,
                cursor: "grab",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "black",
                  width: "80%",
                  borderRadius: 2,
                  overflow: "hidden",
                  position: "relative",
                  height: 400,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={`${item.year} - ${item.location}`}
                  sx={{ height: "70%", objectFit: "cover", width: "100%" }}
                />
                <Box sx={{ p: 2 , width:"60%"}}>
                  <Typography variant="b1">
                    {item.year} - {item.location}
                  </Typography>
                  <br />
                  <br />
                  <Typography variant="para12" sx={{ opacity: 0.7 }}>
                    {item.subtitle}
                  </Typography>
                </Box>
                <IconButton
                  onClick={() => handlePlay(item.video)}
                  sx={{
                    position: "absolute",
                    bottom: 20,
                    right: 20,
                    backgroundColor: "primary.main",
                    color: "#fff", // white triangle
                    borderRadius: "50%",
                    "&:hover": {
                      backgroundColor: "#c72f05",
                    },
                  }}
                >
                  <PlayArrowIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
          ))}
        </Slider>
      </Container>

      {/* Video Popup */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogContent sx={{ p: 0 }}>
          <Box sx={{ position: "relative", paddingTop: "56.25%" }}>
            <iframe
              src={activeVideo}
              title="Achievement Video"
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
    </Box>
  );
};

export default AchievementsSection;
