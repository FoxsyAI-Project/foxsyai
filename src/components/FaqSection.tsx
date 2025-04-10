import {
    Box,
    Container,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Button,
  } from "@mui/material";
  import AddIcon from "@mui/icons-material/Add";
  import RemoveIcon from "@mui/icons-material/Remove";
  import { useState } from "react";
  import { useTheme } from "@mui/material/styles";
import OrangeLine from "./OrangeLine";


  
  const FaqSection = () => {
    const [expanded, setExpanded] = useState<number | false>(1);
    const [showAll, setShowAll] = useState(false);
    const theme = useTheme();
  
  const allFaqs = [
    {
      question: "What is Foxsy AI?",
      answer: "Foxsy AI is a groundbreaking project merging AI, robotics and blockchain technology to revolutionize robotics. Our ultimate goal aligns with RoboCup’s mission: developing autonomous robots capable of defeating human World Cup champions by the mid-21st century.",
    },
    {
      question: "What's the role of the $FOXSY token?",
      answer:
        "The $FOXSY token fuels the Foxsy AI ecosystem, enabling users to participate in tournaments, customize strategies and earn rewards. It's integral to our decentralized governance, incentivizing community engagement and innovation.",
    },
    {
      question: "What new milestones has Foxsy AI achieved recently?",
      answer: (
        <Box>
          <Typography variant="para16" sx={{ mb: 1 }}>
            <strong>What new milestones has <span style={{ color: "#EA3807" }}>Foxsy AI</span> achieved recently?</strong>
          </Typography>
          <ul style={{ paddingLeft: "1.2rem", marginTop: 0 }}>
            <li>
              <strong>Foxkeeper:</strong> A play-to-earn Telegram-based penalty shootout game enhancing user interaction.
            </li>
            <li>
              <strong>Solana Expansion:</strong> Integration of the $FOXSY token into Solana via Raydium DEX, broadening our blockchain compatibility.
            </li>
            <li>
              <strong>U.S. Expansion:</strong> Establishment of Foxsy AI as a U.S.-incorporated entity, headquartered in Wyoming to boost innovation and strategic partnerships.
            </li>
            <li>
              <strong>Foxagent:</strong> Our first AI companion with a "Discover & Earn" feature, helping users engage interactively with blockchain tasks.
            </li>
          </ul>
        </Box>
      )
    },
    {
      question: "How does the Special Staking Rewards Program work?",
      answer: "This program rewards users who stake EGLD through Foxsy AI with additional $FOXSY tokens, enhancing rewards and encouraging long-term holding and engagement.",
    },
    {
      question: 'What is Metastaking?',
      answer: "Metastaking is our DeFi product combining liquidity provision, staking and yield farming, offering enhanced rewards for long-term commitment and participation.",
    },
    {
      question: "Can you describe the Foxsy AI online tournaments?",
      answer: "Participants create and train their own AI soccer teams using our tools and compete in tournaments based on RoboCup standards. Winners earn significant rewards in $FOXSY tokens, with part of the entry fees burned, ensuring token scarcity.",
    },
    {
      question: "What tools does Foxsy AI provide?",
      answer: (
        <Box>
          <ul style={{ paddingLeft: "1.2rem", marginTop: 0 }}>
            <li>
              <strong>Game Viewer:</strong> Visual tool for detailed match analysis.
            </li>
            <li>
              <strong>Tournament Runner:</strong> Docker-based backend for running soccer simulations.
            </li>
            <li>
              <strong>Team Formations Creator:</strong> No-code platform allowing strategy creation without coding expertise.
            </li>
            <li>
              <strong>Discord Scores Bot:</strong> Updates tournament progress and results.
            </li>
          </ul>
        </Box>
      )
    },
    {
      question: "What's available in the Foxsy AI Store?",
      answer: "Launching in Q4 2025, the store allows users to purchase unique customizations for robots, fields and strategies using $FOXSY tokens. Revenue supports creators, burns tokens to ensure scarcity and funds future development.",
    },
    {
      question: "Why integrate blockchain with robotics and AI?",
      answer: "Blockchain ensures transparency, decentralization and secure incentivization for participation. It helps maintain immutable records of game results and strategies, enhancing trust and integrity in AI-driven robotics competitions."
    },
    {
      question: "Is the Foxsy AI technology only applicable to soccer?",
      answer: "No. Soccer is our starting point due to its global popularity and competitive nature. However, our AI and robotics solutions have broad applications in industries such as healthcare, agriculture, automation, rescue operations and even space exploration."
    },
    {
      question: "Where can I buy and track the $FOXSY token?",
      answer: (
        <Box component="div">
        <Typography variant="para16" sx={{ mb: 1 }}>
          You can buy and trade $FOXSY on decentralized exchanges like 
          <a 
            href="https://raydium.io/swap/?inputMint=sol&outputMint=CgGWS19zR5xTzgCEcW5Svsuon4hBZwzBwUFimoJStCf2" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: theme.palette.primary.main, textDecoration:"none" }}
          >
            {" "}Raydium (Solana)
          </a>, 
          <a 
            href="https://xexchange.com/trade?firstToken=EGLD&secondToken=FOXSY-5d5f3e" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: theme.palette.primary.main, textDecoration:"none" }}
          >
            {" "}xExchange
          </a> and centralized platforms like 
          <a 
            href="https://www.gate.io/trade/FOXSY_USDT" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: theme.palette.primary.main, textDecoration:"none" }}
          >
            {" "}Gate.io
          </a> and 
          <a 
            href="https://www.mexc.com/exchange/FOXSY_USDT" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: theme.palette.primary.main, textDecoration:"none" }}
          >
            {" "}MEXC
          </a>. Track token metrics on platforms like 
          <a 
            href="https://coinmarketcap.com/currencies/foxsy-ai/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: theme.palette.primary.main, textDecoration:"none" }}
          >
            {" "}CoinMarketCap
          </a> and 
          <a 
            href="https://www.coingecko.com/en/coins/foxsy-ai" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: theme.palette.primary.main, textDecoration:"none" }}
          >
            {" "}CoinGecko
          </a>.
        </Typography>
      </Box>
      
      )
    },    
    {
      question: "How can I stay updated with Foxsy AI?",
      answer: (
        <Box component="div">
          <Typography variant="para16" sx={{ mb: 1 }}>
            Stay informed through our official channels:
          </Typography>
          <ul style={{ paddingLeft: "1.2rem", marginTop: 0 }}>
            <li>
              <a href="https://foxsy.ai/" target="_blank" rel="noopener noreferrer"  style={{ color: theme.palette.primary.main, textDecoration:"none" }}>
                Official Website
              </a>
            </li>
            <li>
              <a href="https://t.me/FoxsyAIAnnouncements" target="_blank" rel="noopener noreferrer"  style={{ color: theme.palette.primary.main, textDecoration:"none" }}>
                Telegram Announcements
              </a>
            </li>
            <li>
              <a href="https://t.me/FoxsyAICommunity" target="_blank" rel="noopener noreferrer"  style={{ color: theme.palette.primary.main, textDecoration:"none" }}>
                Telegram Community
              </a>
            </li>
            <li>
              <a href="https://twitter.com/FoxsyAI" target="_blank" rel="noopener noreferrer"  style={{ color: theme.palette.primary.main, textDecoration:"none" }}>
                Twitter/X
              </a>
            </li>
          </ul>
          <Typography variant="para16" sx={{ mt: 2 }}>
            Join us as we pioneer the intersection of AI, robotics, and blockchain to shape the future of autonomous systems.
          </Typography>
        </Box>
      )
    }
    
  ];

    const handleChange = (panel: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  
    const visibleFaqs = showAll ? allFaqs : allFaqs.slice(0, 5);
  
    return (
      <Box sx={{ bgcolor: "grey.500", color: "#fff", py: 8 }}>
        <Container>
          {/* Header */}
          <Box sx={{ mb: 4 }}>
          <OrangeLine />
            <Typography variant="subHeading1">
              Everything you need to know
            </Typography>
          </Box>
  
          {/* Accordions */}
          
          {visibleFaqs.map((faq, i) => (
            <Accordion
              key={i}
              expanded={expanded === i}
              onChange={handleChange(i)}
              sx={{
                bgcolor: expanded === i ? "#000" : "#2b2a2a",
                color: "#fff",
                mb: 2,
                borderRadius: "8px",
                px: 1,
              }}
            >
              <AccordionSummary
                expandIcon={
                  expanded === i ? (
                    <RemoveIcon sx={{ color: "#EA3807" }} />
                  ) : (
                    <AddIcon sx={{ color: "#EA3807" }} />
                  )
                }
                aria-controls={`panel${i}-content`}
                id={`panel${i}-header`}
                sx={{  flexDirection: "row-reverse", ...theme.typography[expanded === i ? 'subHeading4' : 'para14'] , "& .MuiAccordionSummary-expandIconWrapper": {
                  mr: 2, // spacing between icon and text
                },}}
              >
                {faq.question}
              </AccordionSummary>
              {faq.answer && (
                <AccordionDetails sx={{ color: "grey.200", fontSize: "0.9rem" }} className="HELLO">
                  {faq.answer}
                </AccordionDetails>
              )}
            </Accordion>
          ))}
  
          {/* Toggle Button */}
          <Box sx={{ textAlign: "right", mt: 2 }}>
            <Button
              variant="contained"
              onClick={() => setShowAll((prev) => !prev)}
              sx={{
                ...theme.typography.link14,
                bgcolor: "#fff",
                color: "#000",
                borderRadius: "999px",
                px: 3,
                fontWeight: 600,
                textTransform: "none",
                "&:hover": { bgcolor: "#eee" },
              }}
            >
              {showAll ? "Less" : "More"}
            </Button>
          </Box>
        </Container>
      </Box>
    );
  };
  
  export default FaqSection;
  