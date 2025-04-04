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
  
  const allFaqs = [
    {
      question: "What is the goal of the Foxsy AI project, and what is the role of the $FOXSY token?",
      answer: "hello",
    },
    {
      question: "What is the $FOXSY token’s maximum supply?",
      answer:
        "The theoretical maximum supply of the $FOXSY token is 1,978,082,104. However, with the burning mechanism implemented in our roadmap, this maximum will never be reached, and the token is designed to follow a deflationary model over time.",
    },
    {
      question: "How many tokens are allocated in the Pre-Seed round?",
      answer: "",
    },
    {
      question: "Will the $FOXSY token have a seed round, private round, or public round?",
      answer: "",
    },
    {
      question: 'What is the "Special Staking Rewards Program"?',
      answer: "",
    },
    {
      question: "How will the token be distributed across the ecosystem?",
      answer: "",
    },
    {
      question: "Is $FOXSY a governance token?",
      answer: "",
    },
    {
      question: "Can I earn $FOXSY without purchasing it?",
      answer: "",
    },
  ];
  
  const FaqSection = () => {
    const [expanded, setExpanded] = useState<number | false>(1);
    const [showAll, setShowAll] = useState(false);
  
    const handleChange = (panel: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  
    const visibleFaqs = showAll ? allFaqs : allFaqs.slice(0, 5);
  
    return (
      <Box sx={{ bgcolor: "#1A1A1A", color: "#fff", py: 8 }}>
        <Container>
          {/* Header */}
          <Box sx={{ mb: 4 }}>
            <Box sx={{ width: 40, height: 4, bgcolor: "#EA3807", mb: 2 }} />
            <Typography variant="h5" fontWeight={700}>
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
                bgcolor: expanded === i ? "#000" : "#222",
                color: "#fff",
                mb: 1,
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
                sx={{ fontWeight: expanded === i ? 700 : 500 }}
              >
                {faq.question}
              </AccordionSummary>
              {faq.answer && (
                <AccordionDetails sx={{ color: "#ccc", fontSize: "0.9rem" }}>
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
  