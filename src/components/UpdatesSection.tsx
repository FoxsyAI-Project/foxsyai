import {
    Box,
    Container,
    Typography,
    IconButton,
    Card,
    CardContent,
    CardMedia,
    useMediaQuery
  } from "@mui/material";
  import Slider from "react-slick";
  import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
  import foxImg from "../assets/images/updatesDummyImage.png";
  import OrangeLine from "./OrangeLine";
  import { useTheme } from "@mui/material/styles";
  
  const updates = new Array(6).fill({
    title: "Update title text",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    image: foxImg,
  });


  
  const UpdatesSection = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const showArrow = isMobile ? false : true;
    const showCenterMode = isMobile ? true : false;

    const settings = {
      dots: false,
      infinite: true,
      speed: 400,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: showArrow,
      centerMode: showCenterMode,
      responsive: [
        {
          breakpoint: 1200,
          settings: { slidesToShow: 2 },
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 1 },
        },
      ],
    };
  
    return (
      <Box sx={{ bgcolor: "#1a1a1a", py: 10, color: "#fff" }}>
        <Container>
          <Box sx={{ mb: 4 }}>
            <OrangeLine />
            <Typography variant="subHeading1">
              Updates
            </Typography>
          </Box>
  
          <Slider {...settings}>
            {updates.map((item, idx) => (
              <Box key={idx} sx={{ px: 2 }}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 3,
                    width:"90%",
                    overflow: "hidden",
                    backgroundColor: "#444",
                    cursor: "grab",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.title}
                    sx={{ height: 200, objectFit: "cover" }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="b1" color="grey.100" gutterBottom>
                      {item.title}
                    </Typography>
                    <br/>
                    <br/>
                    <Typography variant="para12" color="grey.200">
                      {item.description}
                    </Typography>
                    <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
                      <IconButton
                        sx={{
                          bgcolor: "#EA3807",
                          color: "#fff",
                          "&:hover": { bgcolor: "#ff4c1e" },
                        }}
                      >
                        <ArrowForwardIcon />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Slider>
        </Container>
      </Box>
    );
  };
  
  export default UpdatesSection;
  