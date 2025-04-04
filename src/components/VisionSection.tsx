import { Typography, Container, Box, Stack } from "@mui/material";

const items = [
  {
    title: "Vision",
    text: "Foxsy AI was born to bring a vision to life, where AI and robotics seamlessly blend into everyday life.",
    text1: "Through decades of expertise and community-driven engagement, we advance AI and robotics with interactive experiences and blockchain technologies.",
  },
  {
    title: "Mission",
    text: "Integrate robotics, AI and blockchain to create technologies and products that enrich lives.",
    text1: "Our platform brings together robotics, AI and blockchain enthusiasts worldwide to develop cutting-edge autonomous systems.",
  },
  {
    title: "Principles",
    text: "Our principles guide our vision and ensure technology serves humanity responsibly.",
  },
];

const VisionSection = () => {
  return (
    <Box sx={{ py: 8, bgcolor: "white" }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          useFlexGap
          flexWrap="wrap"
        >
          {items.map((item) => (
            <Box key={item.title} sx={{ flex: "1 1 300px", minWidth: 280 }}>
              {/* Red Square + Title */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    bgcolor: "#EA3807",
                    borderRadius: "1px",
                  }}
                />
                <Typography variant="subHeading2" fontWeight="bold">
                  {item.title}
                </Typography>
              </Box>
              
              <Stack
                sx={{
                  borderLeft: "2px solid #000000",
                  pl: 2,
                }}
              >
                <Typography variant="para20" sx={{ mb: 1 }}>
                  {item.text}
                </Typography>
                
                <Typography variant="para14" sx={{ mb: 1 }}>
                  {item.text1}
                </Typography>

                {item.title === "Principles" && (
                  <>
                    <Typography variant="para14">
                      <strong>Build</strong> connection and collaboration.
                    </Typography>
                    <Typography variant="para14">
                      <strong>Encourage</strong> innovation and creativity.
                    </Typography>
                    <Typography variant="para14">
                      <strong>Cultivate</strong> transparency and trust.
                    </Typography>
                    <Typography variant="para14">
                      <strong>Prioritize</strong> safety and ethics.
                    </Typography>
                    <Typography variant="para14">
                      <strong>Promote</strong> freedom worldwide.
                    </Typography>
                  </>
                )}
              </Stack>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default VisionSection;
