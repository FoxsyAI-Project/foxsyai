import {
  Box,
  Container,
  Typography,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import roadmapFoxImg from "../assets/images/foxFly.png";
import OrangeLine from "./OrangeLine";

const roadmap = [
  {
    quarter: "Q1",
    title: "FoxAgent (Discover & Earn)",
    desc: `First version of our Foxsy AI-powered tool which creates an interactive experience, through which users explore valuable insights, unlock hidden opportunities and get rewarded for it, in a fun and gamified way. All through AI. This is only the beginning of our AI-driven ecosystem which is going to be a game-changer.`,
  },
  {
    quarter: "Q2",
    title: "Game Viewer and Team Formation Creator",
    desc: `First version of a web-based visual logger, through which users can either watch or analyze a live or a recorded soccer game, in a truly fascinating way. Users will be able to easily build, without having to write a line of code, their own teams and strategies on top of the RoboCup's best teams, through the FoxLeague platform.`,
  },
  {
    quarter: "Q3",
    title: "Online Tournaments",
    desc: `Play and Earn rewards by using your own team and strategy, easily built on top of the RoboCup's best teams, through the FoxLeague platform.`,
  },
  {
    quarter: "Q4",
    title: "FoxStore",
    desc: `First store build on top of the FoxLeague platform. Customising, Burning, Rewarding and Growing the Ecosystem. All in one.`,
    extraTitle: "Analysis and Inception",
    extraDesc:
      "Small Size League - our first real hardware soccer player robots, scheduled to go live in 2026.",
  },
];

const RoadmapSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ bgcolor: "#d3d3d3", py: 10 }}>
      <Container>
        <Box sx={{ mb: 6 }}>
          <OrangeLine />
          <Typography variant="subHeading1" color="primary.dark">
            Roadmap 2025
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: 3,
            mb: 4,
          }}
        >
          {roadmap.slice(0, 3).map((item, index) => (
            <Paper
              key={index}
              elevation={2}
              sx={{
                flex: 1,
                p: 3,
                borderRadius: 3,
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "column",
              }}

            >
              <Typography
                variant="captionH1"
                color="primary.main"
                sx={{mb:2}}
              >
                {item.quarter}
              </Typography>
              <Typography variant="subHeading3" color="primary.dark">
                {item.title}
              </Typography>
              <Typography variant="para12" color="grey.300" sx={{ mt: 1 }}>
                {item.desc}
              </Typography>
            </Paper>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "stretch",
            gap: 4,
          }}
        >
          <Paper
            elevation={2}
            sx={{
              flex: 1,
              p: 3,
              borderRadius: 3,
              backgroundColor: "#fff",
            }}
          >
            <Typography
              variant="captionH1"
             color="primary.main"
            >
              Q4
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 4,
                flexWrap: "wrap",
              }}
            >
              <Box sx={{ flex: 1, minWidth: "250px", display:"flex", flexDirection: "column" }}>
                <Typography variant="subHeading3" color="primary.dark">
                  FoxStore
                </Typography>
                <Typography variant="para12" sx={{ mt: 1 }} color="grey.300">
                  First store build on top of the FoxLeague platform.
                  Customising, Burning, Rewarding and Growing the Ecosystem. All
                  in one.
                </Typography>
              </Box>
              <Box sx={{ flex: 1, minWidth: "250px", display:"flex", flexDirection: "column" }}>
                <Typography  variant="subHeading3" color="primary.dark">
                  Analysis and Inception
                </Typography>
                <Typography variant="para12" sx={{ mt: 1 }} color="grey.300">
                  Small Size League - our first real hardware soccer player
                  robots, scheduled to go live in 2026.
                </Typography>
              </Box>
            </Box>
          </Paper>

          <Box
            component="img"
            src={roadmapFoxImg}
            alt="Fox flying"
            sx={{
              flex: 1,
              maxWidth: 350,
              width: "100%",
              objectFit: "contain",
              alignSelf: "center",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default RoadmapSection;
