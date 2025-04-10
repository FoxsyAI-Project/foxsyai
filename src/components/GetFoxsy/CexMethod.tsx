import {
    Box,
    Typography,
    Paper,
    Link,
    Stack,
    Container,
  } from "@mui/material";
  import foxIcon from "../../assets/images/foxsyIconSmall.png";
  import gateLogo from "../../assets/images/gate.png";
  import mexcLogo from "../../assets/images/mexc.png";
  import bitrueLogo from "../../assets/images/bitrue.png";
  import tradesilvaniaLogo from "../../assets/images/tradeSilvania.png";
  
  const CexMethod = () => {
  
    return (
      <Box sx={{ bgcolor: "#fff", px: { xs: 2, md: 8 }, py: 6 , }}>
         <Container>
        {/* Heading */}
        <Box display={"flex"} flexDirection="column" mb={4}>
        <Typography variant="subHeading2" sx={{ mb: 2, color: "primary.dark" }}>
          1. Centralized Exchange (CEX) Method
        </Typography>
  
        <Typography
          variant="captionH1"
          sx={{ color: "primary.main" }}
        >
          Best for beginners – quick and easy
        </Typography>
        </Box>
        {/* Explanation Section */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          mb={6}
          flexWrap="wrap"
        >
          {[
            {
              title: "What is a Custodial Wallet?",
              desc: "It means someone else — like an exchange or a platform — holds your crypto for you. They manage the keys and security, kind of like a bank holding your money.",
            },
            {
              title: "Imagine this",
              desc: "You’ve got a safe, but instead of keeping it at home, you leave it at a trusted facility. They hold the key for you, and you just log in with a username and password. Easy access, no need to worry about losing anything.",
            },
            {
              title: "Why that’s cool",
              desc: (
                <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
                  <li>Super beginner-friendly.</li>
                  <li>No need to manage keys or recovery phrases.</li>
                  <li>You can reset your password just like a regular account.</li>
                </ul>
              ),
            },
            {
              title: "Just one thing!",
              desc: "Because someone else holds your keys, they technically have control over your funds. So it's important to trust the platform you're using. Choose a reputable exchange with strong security.",
            },
          ].map((item, idx) => (
            <Box
              key={idx}
              sx={{
                flex: "1 1 200px",
                minWidth: "240px",
                maxWidth: "320px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="subHeading4" sx={{ mb: 1 }}>
                {item.title}
              </Typography>
              <Typography variant="para14" sx={{ color: "grey.300", width: "90% " }}>
                {item.desc}
              </Typography>
            </Box>
          ))}
        </Stack>
  
        <Stack spacing={3}>
  {/* Step 1: Full width */}
  <Paper
    sx={{
      bgcolor: "#f5f5f5",
      p: 5,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      borderRadius: "15px",
    }}
  >
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography variant="subHeading3" sx={{pb: 2}}>1. Choose an exchange</Typography>
    </Box>
    <Typography variant="para16" sx={{ mt: 1, color: "grey.700" }}>
      <>
        You can buy it right from{" "}
        <Link href="https://www.gate.io/" target="_blank" underline="none" color="secondary.main" fontWeight="700">Gate.io</Link>,{" "}
        <Link href="https://www.mexc.com/" target="_blank" underline="none" color="secondary.main" fontWeight="700">MEXC</Link>,{" "}
        <Link href="https://www.bitrue.com/" target="_blank" underline="none" color="secondary.main" fontWeight="700">Bitrue</Link>, or{" "}
        <Link href="https://tradesilvania.com/" target="_blank" underline="none" color="secondary.main" fontWeight="700">Tradesilvania</Link> in just a few clicks.
       
       <Typography display={"block"} variant="para16" sx={{ mt: 1, pt:2, color: "grey.700" }}>Go to their official website or download the app from the App Store or Google Play.</Typography> 
      </>
    </Typography>
  </Paper>

  {/* Steps 2–5: Two per row */}
  {[
    {
      title: "2. Create an account",
      desc: "Enter your email, create a strong password, and verify via email or SMS.",
    },
    {
      title: "3. Complete identity verification (KYC)",
      desc: "Upload a photo ID and sometimes a selfie. It usually takes a few minutes to a few hours.",
    },
    {
      title: "4. Deposit funds",
      desc: "Add money using a credit/debit card, bank transfer, or transfer crypto from another wallet.",
    },
    {
      title: "5. Buy $FOXSY",
      desc: "Search for “FOXSY” in the token list. Choose the amount and confirm the trade.",
      icon: foxIcon,
    },
  ]
    .reduce((acc, curr, idx) => {
      if (idx % 2 === 0) acc.push([curr]);
      else acc[acc.length - 1].push(curr);
      return acc;
    }, [] as Array<Array<any>>)
    .map((pair, i) => (
      <Box
        key={i}
        sx={{
          display: "flex",
          gap: 3,
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        {pair.map((step, j) => (
          <Paper
            key={j}
            sx={{
              bgcolor: "#f5f5f5",
              p: 5,
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius: "15px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="subHeading3" sx={{pb: 2}}>{step.title}</Typography>
              {step.icon && (
                <Box
                  component="img"
                  src={step.icon}
                  alt="fox icon"
                  sx={{ width: 50, height: 50 }}
                />
              )}
            </Box>
            <Typography variant="para16" sx={{ mt: 1, color: "grey.700" }}>
              {step.desc}
            </Typography>
          </Paper>
        ))}
      </Box>
    ))}
</Stack>

  
        {/* Exchange logos */}
        <Stack direction="row" spacing={4} mt={6} flexWrap="wrap" alignItems="center">
          {[gateLogo, mexcLogo, bitrueLogo, tradesilvaniaLogo].map((src, i) => (
            <Box
              key={i}
              component="img"
              src={src}
              alt={`exchange-logo-${i}`}
              sx={{
                height: 24,           // Reduced height
                width: "auto",
                maxWidth: 160,        // Optional: limit max width if needed
                mx: 1,                // horizontal margin for better spacing
              }}
            />
          ))}
        </Stack>
        </Container>
      </Box>
    );
  };
  
  export default CexMethod;
  