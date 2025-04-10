import { Box, Container, Typography, Paper, Button, useMediaQuery } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import RobotLifecycle from "../assets/images/robot-lifecycle.png";
import RobotLifeCycleMobile from "../assets/images/robot-lifecycle-M.png";
import foxKeeper from "../assets/images/foxKeeper.jpg";
import foxAgent from "../assets/images/foxAgent.jpg";
import foxLeague from "../assets/images/foxLeague.jpg";
import foxStore from "../assets/images/foxStore.jpg";
import foxTalk from "../assets/images/foxTalk.jpg";
import foxMini from "../assets/images/foxMini.jpg";
import foxSquad from "../assets/images/foxSquad.jpg";
import foxDroid from "../assets/images/foxDroid.png";
import OrangeLine from "./OrangeLine";
import { useTheme } from "@mui/material/styles";
import Slider from "react-slick";

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
    title: "FoxDroid",
    desc: "Competitive humanoid robots deployed in dynamic environments with defined rules, showcasing mobility, strategy and team-based decision-making.",
    image: foxDroid,
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
    title: "FoxTalk",
    desc: "An AI-powered robot for engaging, human-like communication across applications such as customer service, education, and entertainment.",
    image: foxTalk,
  },
 
];

const ProductsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const robotImage = isMobile ? RobotLifeCycleMobile : RobotLifecycle;
  

const slickSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  arrows: false,
};
  return (
    <Box sx={{ bgcolor: "#1a1a1a", py: 8, color: "#fff" }} id="products-section">
      <Container>
        {/* Section Header */}
        <Box sx={{ mb: 4 }}>
        <OrangeLine />
          <Typography variant="subHeading1">
            Products
          </Typography>
          <Typography
            variant="para20"
            sx={{ mt: 4, mb: 6, display: "block", color: "grey.200", maxWidth: "100%" }}
          >
            Our existing and upcoming products cover the whole spectrum of AI in robotics, from games, complex simulators and digital marketplaces, to hardware talking heads and mini-robots, to multi-agent and humanoid robot teams that can collaborate to achieve certain goals based on a set of rules.
          </Typography>
          <Box
            component="img"
            src={robotImage}
            alt="Robot lifecycle"
            sx={{ width: "100%", borderRadius: 2, mb:4 }}
          />
        </Box>
 {/* Mobile: Slider */}
 {isMobile ? (
  <Box>
    <Slider {...slickSettings}>
      {products.map((product, index) => (
        <Box key={index} sx={{ px: 2 }}>
          <Paper
            elevation={3}
            sx={{
              borderRadius: 2,
              overflow: "hidden",
              cursor: "grab",
              bgcolor: "#fff",
              color: "#000",
              width:"80%"
            }}
          >
            {/* Image */}
            {product.image && (
              <Box
                component="img"
                src={product.image}
                alt={product.title}
                sx={{
                  width: "100%",
                  height: 160,
                  objectFit: "cover",
                }}
              />
            )}
            {/* Content */}
            <Box sx={{ p: 3 }} display="flex" flexDirection="column" gap={1}>
              <Typography variant="subHeading3" sx={{ color: "primary.dark" }}>
                {product.title}
              </Typography>
              <Typography variant="para12" sx={{ color: "grey.300" }}>
                {product.desc}
              </Typography>
              {product.cta && (
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    mt: 2,
                    ...theme.typography.link14,
                    borderRadius: "999px",
                    textTransform: "none",
                    color: "white",
                    bgcolor: "primary.dark",
                  }}
                >
                  {product.cta}
                </Button>
              )}
            </Box>
          </Paper>
        </Box>
      ))}
    </Slider>
  </Box>
) : (
  <Masonry columns={{ xs: 1, sm: 2, md: 4 }} spacing={3}>
  {products.map((product, index) => {
    const image = (
      <Box
        component="img"
        src={product.image}
        alt={product.title}
        sx={{
          width: "100%",
        }}
      />
    );

    const content = (
      <Box sx={{ p: 4, display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="subHeading3" sx={{ color: "primary.dark" }}>
          {product.title}
        </Typography>
        <Typography variant="para12" sx={{ color: "grey.300" }}>
          {product.desc}
        </Typography>
        {product.cta && (
          <Button
            variant="contained"
            size="small"
            sx={{
              alignSelf: "flex-end",
              ...theme.typography.link14,
              mt: 1,
              borderRadius: "999px",
              textTransform: "none",
              color: "white",
              bgcolor: "primary.dark",
            }}
          >
            {product.cta}
          </Button>
        )}
      </Box>
    );

    return (
      <Paper
        key={index}
        elevation={3}
        sx={{
          borderTopLeftRadius: 0,
          borderTopRightRadius: 12,
          borderBottomRightRadius: 12,
          borderBottomLeftRadius: 12,
          overflow: "hidden",
          bgcolor: "#fff",
          color: "#000",
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
       {[0, 2, 6, 7].includes(index) ? (
  <>
    {image}
    {content}
  </>
) : (
  <>
    {content}
    {image}
  </>
)}
      </Paper>
    );
  })}
</Masonry>

)}
      </Container>
    </Box>
  );
};

export default ProductsSection;
