import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
  Button,
} from "@mui/material";
import roboCup from "../assets/images/roboCup.png";
import OrangeLine from "./OrangeLine";
import flashImage from "../assets/images/flash.svg";
import { useTheme } from "@mui/material/styles";

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
  const theme = useTheme();

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
          <OrangeLine />
          <Typography variant="subHeading1" sx={{ color: "primary.dark"}}>
            RoboCup
          </Typography>
          <br />
          <Typography variant="captionH1" color="primary.dark" sx={{ mt: 1 }}>
            A team of fully autonomous humanoid robot soccer players
          </Typography>

          <Typography variant="subHeading3" sx={{ display: "flex", alignItems: "center", color: "primary.dark" }}>
            <img
              src={flashImage}
              alt="RoboCup official goal"
              style={{ marginRight: "5px" }}
            />
            RoboCup official goal
          </Typography>

          <Typography sx={{ mt: 1, color:"grey.300" }} variant="para16">
            “By the middle of the 21st century, a team of fully autonomous humanoid robot soccer players shall win a soccer game, complying with the official rules of FIFA, against the winner of the most recent World Cup.”
          </Typography>

          <Typography sx={{ mt: 2,color:"grey.300" }} variant="para16">
            RoboCup aims for autonomous robots to defeat World Cup champions by 2050. Foxsy AI team members have excelled in RoboCup, winning multiple top positions in over 22 years of participation.<Typography component="span" variant="para16" sx={{ color: 'primary.main' }}> Foxsy AI is using blockchain technologies to engage a broad audience.</Typography> Their massive creative input will accelerate progress towards RoboCup’s goals.
          </Typography>
          <br />
          <Typography sx={{ mt: 2, color:"grey.300" }} variant="para16">
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
            <Typography variant="para20" color="primary.dark">
              Kick starts
            </Typography>
            <br />
            <Typography variant="extra1" sx={{ color:"secondary.main" }}>
              {`${timeLeft.days}:${String(timeLeft.hours).padStart(2, "0")}:${String(timeLeft.minutes).padStart(2, "0")}:${String(timeLeft.seconds).padStart(2, "0")}`}
            </Typography>
            <br />
            <Typography variant="para14" color="grey.300">
              We are excited to welcome you and share this incredible experience together. See you there!
            </Typography>
          </Box>

          <Button
                variant="contained"
                sx={{
                  ...theme.typography.b1,
                  bgcolor: theme.palette.primary.main,
                  color: "#fff",
                  borderRadius: "999px",
                  textTransform: "none",
                  px: 4,
                  py: 1.5,
                  "&:hover": { bgcolor: "#d23100" },
                  alignSelf: "flex-end",
                  mt: { xs: 3, md: 0 }, // stack on small screens
                }}
              >
            More →
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default RoboCupSection;
