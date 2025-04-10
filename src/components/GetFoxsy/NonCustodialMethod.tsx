import { Box, Typography, Paper, Button, Stack, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import multiversLogo from "../../assets/images/mvxFullLogo.png";
import solanaLogo from "../../assets/images/solanaFullIcon.png";

const NonCustodialMethod = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 10 }}>
        <Container >
            <Box display={"flex"} flexDirection="column" >
      <Typography variant="subHeading2" sx={{ mb: 2 }}>
        2. Non-Custodial Method
      </Typography>

      <Typography
        variant="captionH1"
        sx={{ color: "primary.main", mb: 6 }}
      >
        For users who want full control over their crypto
      </Typography>
</Box>
<Box
  sx={{
    display: "flex",
    justifyContent: "space-between",
    flexWrap: { xs: "wrap", md: "nowrap" },
    gap: 6,
    mb: 6,
  }}
>
  {[
    {
      title: "What is a Non-Custodial Wallet?",
      desc: "It basically means you’re the boss of your own crypto. No one else holds your coins for you — not an exchange, not a company, just you.",
    },
    {
      title: "Imagine this",
      desc: "You’ve got a safe at home, and only you have the key. That key is like your recovery phrase. If you lose it, there’s no backup. But the good news? No one else can touch what’s inside.",
    },
    {
      title: "Why that’s cool",
      desc: "• You’re in full control.\n• No one can lock your account or mess with your money.\n• It’s more private and secure.",
    },
    {
      title: "Just one thing!",
      desc: "Because you’re in charge, you’ve gotta keep your recovery phrase safe. Lose it, and it’s like throwing away the key to your safe. There’s no “forgot password” button here.",
    },
  ].map((item, index) => (
    <Box
      key={index}
      sx={{ flex: "1", minWidth: 0 }}
      display="flex"
      flexDirection="column"
    >
      <Typography variant="subHeading4" sx={{ mb: 1 }}>
        {item.title}
      </Typography>
      <Typography variant="para14" sx={{ whiteSpace: "pre-line" }}>
        {item.desc}
      </Typography>
    </Box>
  ))}
</Box>


      <Paper
        elevation={0}
        sx={{
          bgcolor: "#f5f5f5",
          borderRadius: 3,
          px: { xs: 3, md: 6 },
          py: { xs: 4, md: 6 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          typography: "para16",
          gap: 4,
        }}
      >
        <Box>
          <ol style={{ margin: 0, paddingLeft: "1.2rem", color: "#555", }}>
            <li style={{marginBottom:8}}>Choose a Blockchain (EGLD or SOL)</li>
            <li style={{marginBottom:8}}>Download a Wallet (like xPortal or Phantom)</li>
            <li style={{marginBottom:8}}>Buy EGLD or SOL</li>
            <li style={{marginBottom:8}}>Swap for $FOXSY on a decentralized exchange</li>
          </ol>
        </Box>

        <Button
          variant="contained"
          sx={{
            bgcolor: "primary.main",
            borderRadius: 999,
            px: 4,
            py: 1.5,
            textTransform: "none",
            fontWeight: 600,
            "&:hover": {
              bgcolor: "primary.dark",
              alignSelf: "end"
            },
          }}
          onClick={() => navigate("/non-custodial-details")}
        >
          Learn more
        </Button>
      </Paper>

      {/* Logos */}
      <Stack direction="row" spacing={4} mt={6} alignItems="center">
        <Box
          component="img"
          src={multiversLogo}
          alt="MultiversX"
          sx={{
                height: 24,
                width: "auto",
                maxWidth: 150,
                mx: 1,
              }}
        />
        <Box
          component="img"
          src={solanaLogo}
          alt="Solana"
          sx={{
            height: 24,           // Reduced height
            width: "auto",
            maxWidth: 150,        // Optional: limit max width if needed
            mx: 1,                // horizontal margin for better spacing
          }}
        />
      </Stack>
      </Container>
    </Box>
  );
};

export default NonCustodialMethod;
