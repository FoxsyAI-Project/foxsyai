import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import teamImage from "../assets/images/team.png";
import sebastianImage from "../assets/images/sebastianImage.png";
import dorinImage from "../assets/images/dorinImage.png";
import adrianImage from "../assets/images/adrianImage.png";
import archanaImage from "../assets/images/archanaImage.png";
import xIcon from "../assets/images/x.svg";
import linkedinIcon from "../assets/images/linkedin.svg";
import OrangeLine from "./OrangeLine";


const team = [
  {
    name: "Sebastian Marian",
    title: "CEO & Co-Founder",
    description:
      "A pioneer in AI and robotics for 22+ years, Sebastian was also a Core Team member and contributed to the MultiversX blockchain. His journey includes winning 1st place in RoboCup’s Cooperative Challenge and 4x 3rd place finishes in the main competition—proving his ability to innovate and lead under pressure.",
    image: sebastianImage,
    linkedin: "https://www.linkedin.com/in/sebastian-marian-a86b4614b/",
    x: "https://x.com/oxsy_sibiu",
  },
  {
    name: "Dorin Luca",
    title: "Chief Technology Officer",
    description:
      "A dedicated member of early versions of our project since 2005, Dorin has been instrumental in advancing our mission to become a global leader in AI and robotics. With over 20 years of experience in software development, he has specialized in designing custom solutions that integrate robots, CNC machines and measurement tools with production KPIs.",
    image: dorinImage,
    linkedin: "https://www.linkedin.com/in/dorin-luca-85a3178",
  },
  {
    name: "Adrian Sindile",
    title: "Chief Revenue Officer",
    description:
      "A NYC-based tech entrepreneur and consultant, Adrian holds a PhD in Physics and a Master’s in Computer Science. Passionate about startups, blockchain, and artificial intelligence, he has led tech-focused ventures driving innovation in fintech and AI.",
    image: adrianImage,
    linkedin: "https://www.linkedin.com/in/adriansindile/",
  },
  {
    name: "Archana Nambiar",
    title: "VP of Marketing",
    description:
      "Dubai-based consultant and marketing entrepreneur with a unique journey from medicine to blockchain. Holding an MD, she brings a sharp analytical mind to the world of Web3, leading and launching impactful campaigns across AI, RWA, healthcare, and ecological sectors. Passionate about blockchain’s transformative potential, she thrives on driving innovation and real-world adoption.",
    image: archanaImage,
    linkedin: "https://www.linkedin.com/in/archnanambiar/",
  },
];

const TeamSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ bgcolor: "#f5f5f5", py: 10 }}>
      <Container>
        {/* Section Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            mb: 6,
          }}
        >
          <Box maxWidth={isMobile ? "100%" : "60%"} display="flex" flexDirection="column">
            <OrangeLine />
            <Typography variant="subHeading1" gutterBottom>
              Team
            </Typography>
            <Box sx={{ display:"flex", flexDirection:"column", pl: 2, borderLeft: "1px solid #21262E", mt:4, mb:4}}>
            <Typography variant="subHeading3" color="primary.dark">
              Our passionate and diverse robotics team is driven by innovation,
              blending expertise in AI, automation, and engineering.
            </Typography>
            <Typography variant="para14" sx={{ color: "grey.300", mt: 3 }}>
              With limitless energy and creativity, we are pushing the
              boundaries of robotics through collaboration and cutting-edge
              solutions. With a shared vision as our foundation, we design
              intelligent, high-impact robotic systems that can now only be
              dreamed of.
            </Typography>
            </Box>
           
          </Box>
          {!isMobile && (
            <Box
              component="img"
              src={teamImage}
              alt="Fox Mascot"
              sx={{ height: 250 }}
            />
          )}
        </Box>

        {/* Cards Layout */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            rowGap: 4,
            columnGap: 4,
          }}
        >
          {team.map((member, index) => (
            <Card
              key={index}
              sx={{
                width: {
                  xs: "100%",
                  sm: "calc(45% - 8px)",
                },
                display: "flex",
                gap: 2,
                p: 3,
                borderRadius: 4,
                alignItems: "flex-start",
                backgroundColor: "#fff",
              }}
              elevation={3}
            >
              <Avatar
                src={member.image}
                alt={member.name}
                sx={{ width: 80, height: 80, borderRadius: "10px"}}
              />
              <CardContent sx={{ px: 0 , py:0, display: "flex", flexDirection: "column", }}>
                <Typography
                  variant="subHeading3"
                  sx={{ color: theme.palette.primary.main, }}
                >
                  {member.name}
                </Typography>
                <Typography variant="link14" sx={{ mb: 3 }} color="grey.300">
                  {member.title}
                </Typography>
                <Typography variant="para12" color="grey.300">
                  {member.description}
                </Typography>
                <Box
                  sx={{
                    mt: 2,
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: 1,
                  }}
                >
                  {member.x && (
                    <IconButton
                      href={member.x}
                      target="_blank"
                      size="small"
                      sx={{ p: 0.5 }}
                    >
                      <Box
                        component="img"
                        src={xIcon}
                        alt="X"
                        sx={{ width: 20, height: 20 }}
                      />
                    </IconButton>
                  )}
                  {member.linkedin && (
                    <IconButton
                      href={member.linkedin}
                      target="_blank"
                      size="small"
                      sx={{ p: 0.5 }}
                    >
                      <Box
                        component="img"
                        src={linkedinIcon}
                        alt="LinkedIn"
                        sx={{ width: 20, height: 20 }}
                      />
                    </IconButton>
                  )}
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TeamSection;
