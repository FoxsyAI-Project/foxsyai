import { Box, Container, Typography } from "@mui/material";
import OrangeLine from "./OrangeLine";

const OpportunitiesSection = () => {
  const opportunities = [
    {
      title: "Hands-on AI & Robotics Experience",
      desc: "Gain direct exposure by testing software on real robots, accelerating the transition from development to real-world deployments.",
    },
    {
      title: "Monetization & Growth",
      desc: "Benefit financially by earning $FOXSY through impactful AI and robotics solutions, aligning success with tangible rewards.",
    },
    {
      title: "Exclusive Collaboration",
      desc: "Join a network of industry leaders, expert developers, and pioneering enthusiasts to co-create the future of technology.",
    },
    {
      title: "Cutting-Edge Innovation",
      desc: "Stay at the forefront of AI, robotics, and blockchain technology, positioning yourself as a pioneer in rapidly advancing industries.",
    },
  ];

  return (
    <Box sx={{ bgcolor: "#121212", color: "#fff", py: 8 }}>
      <Container>
        {/* Section Header */}
        <Box sx={{ mb: 4 }}>
         <OrangeLine />
          <Typography variant="h5" fontWeight={700}>
            Opportunities for Partners & Collaborators
          </Typography>
        </Box>

        {/* Cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr 1fr",
            },
            gap: 4,
          }}
        >
          {opportunities.map((item, i) => (
            <Box
              key={i}
              sx={{
                borderLeft: "2px solid #555",
                pl: 2,
              }}
            >
              <Typography variant="subtitle1" fontWeight={600}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: "#ccc" }}>
                {item.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default OpportunitiesSection;
