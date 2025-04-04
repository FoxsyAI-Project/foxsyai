import { Box, Typography, Container, Paper, Button, Stack } from "@mui/material";
import FoxMascot from "../assets/images/foxMascot.png";
import OrangeLine from "./OrangeLine";
import ArrowUpRight from "../assets/images/arrow-up-right.svg";

const cardStyle = {
  flex: "1 1 250px",
  minWidth: "250px",
  margin: "12px",
};

const FoxsyTokenSection = () => {
  return (
    <Box sx={{ bgcolor: "#fff", py: 10 }}>
      <Container maxWidth="lg">
        {/* Flex row for text + mascot */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            mb: 8,
            gap: 4,
          }}
        >
          {/* Text Side */}
          <Box sx={{ flex: 1 }}>
            <OrangeLine />
            <Typography
              variant="h5"
              fontWeight={700}
              sx={{ color: "#EA3807", mb: 1 }}
            >
              $FOXSY Token
            </Typography>
            <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
              $FOXSY is your gateway to exploring and engaging in our
              collaborative ecosystem.
            </Typography>
            <Typography sx={{ color: "#555", maxWidth: "700px" }}>
              Here’s how $FOXSY enhances your experience.
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "1fr 1fr",
                },
                gap: 3,
                mt: 4,
              }}
            >
              {[
                {
                  title: "Unlock Lab Resources",
                  desc: "Use $FOXSY to seamlessly access our cutting-edge robotics lab, advanced AI tools, and innovative resources.",
                },
                {
                  title: "Earn Rewards",
                  desc: "Contribute your expertise in AI-driven games and projects to earn $FOXSY, recognizing your valuable input.",
                },
                {
                  title: "Marketplace Transactions",
                  desc: "Easily trade $FOXSY for premium services, specialized tools, and exclusive collaboration opportunities across the Foxsy AI platform.",
                },
                {
                  title: "Maximize Your Earnings",
                  desc: "Earn juicy APRs by staking $FOXSY on multiple DeFi platforms, growing your rewards through liquidity pools, metastaking and yield farming while contributing to the ecosystem.",
                },
              ].map((item, i) => (
                <Box
                  key={i}
                  sx={{
                    p: 2,
                    bgcolor: "#fff",
                    borderLeft: (theme) =>
                      `1px solid ${theme.palette.primary.dark}`,
                    mb: 3,
                  }}
                >
                  <Typography variant="subtitle1" fontWeight={700}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1, color: "#555" }}>
                    {item.desc}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Fox Mascot */}
          <Box sx={{ flexShrink: 0 }}>
            <Box
              component="img"
              src={FoxMascot}
              alt="Fox Mascot"
              sx={{ maxWidth: "280px", width: "100%" }}
            />
          </Box>
        </Box>

        {/* "How to Get $FOXSY" Section */}
        <Paper
          elevation={3}
          sx={{
            bgcolor: "#1a1a1a",
            color: "#fff",
            borderRadius: 3,
            p: 4,
            mt: 6,
          }}
        >
          <Typography variant="h6" sx={{ color: "#EA3807", mb: 4 }}>
            How to get $FOXSY?
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr 1fr 1fr",
              },
              gap: 3,
              mb: 4,
            }}
          >
            {[
              {
                title: "Participation",
                desc: "Participate actively in AI robotics games, contribute to community projects, and compete with peers to earn $FOXSY rewards.",
              },
              {
                title: "Earn & Grow",
                desc: "Put your $FOXSY to work through staking, farming and liquidity pools on multiple DeFi platforms, maximizing your rewards while supporting the ecosystem.",
              },
              {
                title: "Trading & Exchanges",
                desc: "Trade $FOXSY externally on platforms like Raydium (Solana), xExchange (MultiversX), and centralized exchanges such as Gate.io, Bitrue and MEXC Global.",
              },
              {
                title: "Referral Programs",
                desc: "Boost your earnings by inviting friends to Foxsy AI and earn attractive $FOXSY rewards for every successful referral.",
              },
            ].map((item, i) => (
              <Box
                key={i}
                sx={{
                  color: "#ccc",
                  p: 2,
                }}
              >
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  sx={{ color: "#fff" }}
                >
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {item.desc}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Token Price + Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Box>
              <Typography variant="body2" sx={{ color: "#ccc" }}>
                Current price
              </Typography>
              <Stack direction="row" gap={1} alignItems="center">
              <Typography
                variant="h5"
                sx={{ color: "secondary.main", fontWeight: 700 }}
              >
                $0.03187
              </Typography>
              <Stack direction="row" gap={1} alignItems="center">
              <Typography variant="caption" sx={{ color: "white" }}>
              <img src={ArrowUpRight} alt="Token Price Change" />
                 11.07% (1d)
              </Typography>
              </Stack>
              </Stack>
            </Box>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#EA3807",
                color: "#fff",
                textTransform: "none",
                alignSelf: "center",
              }}
            >
              Get $FOXSY
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default FoxsyTokenSection;
