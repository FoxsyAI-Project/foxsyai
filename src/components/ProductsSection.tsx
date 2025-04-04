import { Box, Container, Typography, Paper, Button } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import RobotLifecycle from "../assets/images/robot-lifecycle.png";
import foxKeeper from "../assets/images/foxKeeper.jpg";
import foxAgent from "../assets/images/foxAgent.jpg";
import foxLeague from "../assets/images/foxLeague.jpg";
import foxStore from "../assets/images/foxStore.jpg";
import foxTalk from "../assets/images/foxTalk.jpg";
import foxMini from "../assets/images/foxMini.jpg";
import foxSquad from "../assets/images/foxSquad.jpg";
import foxDroid from "../assets/images/foxDroid.png";
import OrangeLine from "./OrangeLine";

const products = [
  {
    title: "FoxKeeper",
    desc: "Play-to-earn penalty shooter game on Telegram mobile. Score goals, challenge the Fox mascot, and compete on the leaderboard to win real rewards in $FOXSY tokens.",
    image: foxKeeper,
    cta: "Play now!",
  },
  {
    title: "FoxAgent",
    desc: "An intelligent AI avatar designed to enhance communication, drive user engagement and unlock interactive experiences within Foxsy AI ecosystem.",
    image: foxAgent,
  },
  {
    title: "FoxLeague",
    desc: "An interactive AI & robotics tournament platform enabling users to create, manage, and compete with customized digital soccer teams, earning rewards through competitions.",
    image: foxLeague,
  },
  {
    title: "FoxStore",
    desc: "A digital marketplace for customizable soccer-themed digital assets, utilizing blockchain technology.",
    image: foxStore,
  },
  {
    title: "FoxTalk",
    desc: "An AI-powered robot for engaging, human-like communication across applications such as customer service, education, and entertainment.",
    image: foxTalk,
  },
  {
    title: "FoxMini",
    desc: "Compact autonomous robots specialized for precise, collaborative tasks in industrial, educational, or home environments.",
    image: foxMini,
  },
  {
    title: "FoxSquad",
    desc: "Multi-agent robotic systems designed in coordination for advanced mobility, strategy, and autonomous teamwork.",
    image: foxSquad,
  },
  {
    title: "FoxDroid",
    desc: "A competitive platform featuring humanoid robots in structured tournaments, demonstrating advanced mobility, strategy, and decision-making capabilities.",
    image: foxDroid,
  },
];

const ProductsSection = () => {
  return (
    <Box sx={{ bgcolor: "#1a1a1a", py: 8, color: "#fff" }}>
      <Container>
        {/* Section Header */}
        <Box sx={{ mb: 4 }}>
        <OrangeLine />
          <Typography variant="h5" fontWeight={700}>
            Products
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 2, color: "#ccc", maxWidth: "800px" }}
          >
            Our existing and upcoming products cover the whole spectrum of AI in
            robotics, from games and complex simulators and digital
            marketplaces, to hardware talking heads and mini-robots, to
            multi-agent and biped humanoid robot teams that can collaborate to
            achieve certain goals based on a set of rules.
          </Typography>
          <Box
            component="img"
            src={RobotLifecycle}
            alt="Robot lifecycle"
            sx={{ width: "100%", borderRadius: 2 }}
          />
        </Box>

        {/* Masonry Grid */}
        <Masonry columns={{ xs: 1, sm: 2, md: 4 }} spacing={3}>
          {products.map((product, index) => (
            <Paper
              key={index}
              elevation={3}
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                bgcolor: "#fff",
                color: "#000",
                p: 2,
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              {product.image && (
                <Box
                  component="img"
                  src={product.image}
                  alt={product.title}
                  sx={{ width: "100%", borderRadius: 2 }}
                />
              )}

              <Typography variant="subtitle1" fontWeight={600}>
                {product.title}
              </Typography>
              <Typography variant="body2">{product.desc}</Typography>

              {product.cta && (
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    alignSelf: "flex-end",
                    mt: 1,
                    borderRadius: "999px",
                    textTransform: "none",
                    bgcolor: "primary.main",
                  }}
                >
                  {product.cta}
                </Button>
              )}
            </Paper>
          ))}
        </Masonry>
      </Container>
    </Box>
  );
};

export default ProductsSection;
