import {
  Box,
  Typography,
  Container,
  Paper,
  Button,
  Stack,
} from "@mui/material";
import FoxMascot from "../assets/images/foxMascot.png";
import OrangeLine from "./OrangeLine";
import ArrowUpRight from "../assets/images/arrow-up-right.svg";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import axios from "axios";

const FoxsyTokenSection = () => {
    const theme = useTheme();
    const [price, setPrice] = useState<number | null>(null);

    useEffect(() => {
      axios
        .get("https://api.multiversx.com/tokens/FOXSY-5d5f3e?fields=price")
        .then((response) => {
          const tokenPrice = response.data?.price;
          if (typeof tokenPrice === "number") {
            setPrice(tokenPrice);
          } else {
            console.warn("Invalid token price:", tokenPrice);
            setPrice(null); // Optional: fallback state
          }
        })
        .catch((error) => {
          console.error("Error fetching token price:", error);
          setPrice(null); // Optional: fallback state
        });
    }, []);
  return (
    <Box sx={{ bgcolor: "#fff", py: 10 }} id="foxsy-token-section">
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
          <Box sx={{ flex: 1, flexDirection: "column" }}>
            <OrangeLine />
            <Typography
              variant="subHeading1"
              sx={{ color: "primary.dark"}}
            >
              $FOXSY Token
            </Typography>
            <Typography
              variant="captionH1"
              sx={{ mb: 4, mt: 4, display: "block", maxWidth: "700px" }}
            >
              $FOXSY is your gateway to exploring and engaging in our
              collaborative ecosystem.
            </Typography>
            <Typography
              sx={{ color: "grey.300", maxWidth: "700px" }}
              variant="para14"
            >
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
                    display:"flex",
                    flexDirection:"column",
                  }}
                >
                  <Typography variant="subHeading3">
                    {item.title}
                  </Typography>
                  <Typography variant="para14" sx={{ mt: 2, color: "grey.300", }}>
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
            color: "#fff",
            borderRadius: 3,
           
            mt: 6,
          }}
        >
        <Box sx={{ bgcolor: "grey.500", width: "100%",p:5, boxSizing:"border-box",borderRadius: 3,borderBottomLeftRadius:0,borderBottomRightRadius:0 }}>
          <Typography variant="captionH1" sx={{ color: "primary.main"}}>
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
              mt: 4
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
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="subHeading3"
                  sx={{ color: "#fff" }}
                >
                  {item.title}
                </Typography>
                <Typography variant="para14" sx={{ mt: 1,color:"grey.200" }}>
                  {item.desc}
                </Typography>
              </Box>
            ))}
          </Box>

          </Box>

          {/* Token Price + Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 2,
              bgcolor: "black",
              p:2,
              px: 5,
              borderRadius: 3,
              borderTopLeftRadius:0,
              borderTopRightRadius:0,
            }}
          >
            <Box>
              <Typography variant="para14" sx={{ color: "#fff" }}>
                Current price
              </Typography>
              <Stack direction="row" gap={1} alignItems="center" >
                <Typography
                  variant="extra2"
                  sx={{ color: "secondary.main"}}
                >
                {price !== null ? `$${price.toFixed(5)}` : "Loading..."}
                </Typography>
                <Stack direction="row" gap={1} alignItems="center">
                  <Typography variant="para14" sx={{ color: "white" }} display="flex">
                    <img src={ArrowUpRight} alt="Token Price Change" />
                    11.07% (1d)
                  </Typography>
                </Stack>
              </Stack>
            </Box>
            <Button
              variant="contained"
              onClick={() => window.open('/get-foxsy', '_blank')}
              sx={{
                ...theme.typography.b1,
                bgcolor: "#EA3807",
                textTransform: "none",
                borderRadius: "999px",
                alignSelf: "center",
                px: 4,
                  py: 1.5,
                  "&:hover": { bgcolor: "#d23100" },
                  mt: { xs: 3, md: 0 }
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


