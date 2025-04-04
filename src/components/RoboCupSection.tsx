import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
  Button,
} from "@mui/material";
import roboCup from "../assets/images/roboCup.png";

const TARGET_DATE = new Date("2025-07-15T00:00:00");

const getTimeLeft = () => {
  const now = new Date();
  const diff = TARGET_DATE.getTime() - now.getTime();

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
};

const RoboCupSection = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ bgcolor: "#f2f2f2", py: 10 }}>
      <Container maxWidth="lg" sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", gap: 4 }}>
        
        {/* Text Section */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" fontWeight={700}>
            RoboCup
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mt: 1 }}>
            A team of fully autonomous humanoid robot soccer players
          </Typography>

          <Typography variant="subtitle2" sx={{ mt: 2, fontWeight: 600, display: "flex", alignItems: "center", color: "#EA3807" }}>
          
            RoboCup official goal
          </Typography>

          <Typography sx={{ mt: 1 }}>
            “By the middle of the 21st century, a team of fully autonomous humanoid robot soccer players shall win a soccer game, complying with the official rules of FIFA, against the winner of the most recent World Cup.”
          </Typography>

          <Typography sx={{ mt: 2 }}>
            RoboCup aims for autonomous robots to defeat World Cup champions by 2050. Foxsy AI team members have excelled in RoboCup, winning multiple top positions in over 22 years of participation. <strong style={{ color: "#EA3807" }}>Foxsy AI is using blockchain technologies to engage a broad audience.</strong> Their massive creative input will accelerate progress towards RoboCup’s goals.
          </Typography>

          <Typography sx={{ mt: 2 }}>
            From July 15th to 21st, 2025, Brazil will host RoboCup 2025 in Salvador, Bahia.
          </Typography>
        </Box>
        <Box sx={{ flex: 1, textAlign: "center" }}>
          <Box
            component="img"
            src={roboCup}
            alt="Robot lifecycle"
            sx={{ width: "100%", maxWidth: 500 }}
          />
        </Box>
      </Container>
      <Container sx={{ mt: 6 }}>
        <Paper
          elevation={3}
          sx={{
            px: 4,
            py: 3,
            borderRadius: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
          }}
        >
          <Box>
            <Typography variant="subtitle1" color="text.secondary">
              Kick starts
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 700, color:"secondary.main" }}>
              {`${timeLeft.days}:${String(timeLeft.hours).padStart(2, "0")}:${String(timeLeft.minutes).padStart(2, "0")}:${String(timeLeft.seconds).padStart(2, "0")}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We are excited to welcome you and share this incredible experience together. See you there!
            </Typography>
          </Box>

          <Button variant="contained" color="error" sx={{ textTransform: "none" }}>
            More →
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default RoboCupSection;
