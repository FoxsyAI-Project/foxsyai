import {
    Box,
    Container,
    Typography,
    Button,
    Menu,
    MenuItem,
  } from "@mui/material";
  import { useState } from "react";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
  
  import logo from "../assets/images/FoxsyAILogo.png";
  
  const Header = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <Box
        sx={{
          bgcolor: "#000",
          color: "#fff",
          py: 2,
          px: 0,
          position: "sticky",
          top: 0,
          zIndex: 1100,
          transition: "all 0.3s ease-in-out",
          boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
        }}
      >
        <Container
          sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
        >
          {/* Logo */}
          <Box component="img" src={logo} alt="Foxsy Logo" sx={{ height: 40 }} />
  
          {/* Navigation */}
          <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
            {/* Foxsy Hub with dropdown */}
            <Button
              onClick={handleClick}
              endIcon={<ExpandMoreIcon />}
              sx={{
                color: "#fff",
                textTransform: "none",
                fontWeight: 500,
                "&:hover": { color: "#EA3807" },
              }}
            >
              Foxsy Hub
            </Button>
  
            <Typography sx={{ cursor: "pointer", "&:hover": { color: "#EA3807" } }}>
              What is Foxsy AI
            </Typography>
            <Typography sx={{ cursor: "pointer", "&:hover": { color: "#EA3807" } }}>
              Products
            </Typography>
            <Typography sx={{ cursor: "pointer", "&:hover": { color: "#EA3807" } }}>
              $FOXSY
            </Typography>
  
            {/* CTA */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#EA3807",
                textTransform: "none",
                borderRadius: 999,
                px: 3,
                fontWeight: 600,
                "&:hover": { backgroundColor: "#c72f05" },
              }}
            >
              Get $FOXSY
            </Button>
          </Box>
        </Container>
  
        {/* Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          sx={{ mt: 1 }}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
          MenuListProps={{
            sx: {
              bgcolor: "#1c1c1c",
              p: 3,
              display: "flex",
              gap: 6,
              flexDirection: "row",
              borderRadius: 2,
            },
          }}
        >
          {/* Earnings */}
          <Box>
            <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 1 }}>
              Earnings
            </Typography>
            {[
              "MVX - Stake w/ Foxsy AI",
              "MVX - Autostaking",
              "MVX - Metastaking",
              "MVX - Staking",
              "SOL - Staking",
            ].map((item, i) => (
              <MenuItem key={i} sx={{ color: "#ccc", fontSize: 14 }}>
                {item}
              </MenuItem>
            ))}
          </Box>
  
          {/* Token */}
          <Box>
            <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 1 }}>
              $FOXSY Token
            </Typography>
            {["Bridge", "MultiversX", "Solana"].map((item, i) => (
              <MenuItem key={i} sx={{ color: "#ccc", fontSize: 14 }}>
                {item}
              </MenuItem>
            ))}
          </Box>
  
          {/* Play2Earn */}
          <Box>
            <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 1 }}>
              Play2Earn
            </Typography>
            {["FoxKeeper", "FoxAgent", "FoxLeague"].map((item, i) => (
              <MenuItem key={i} sx={{ color: "#ccc", fontSize: 14 }}>
                {item}
              </MenuItem>
            ))}
          </Box>
  
          {/* Ecosystem */}
          <Box>
            <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 1 }}>
              Ecosystem
            </Typography>
            {["Governance", "Token metrics", "Whitepaper", "Onepager"].map(
              (item, i) => (
                <MenuItem key={i} sx={{ color: "#ccc", fontSize: 14 }}>
                  {item}
                </MenuItem>
              )
            )}
          </Box>
        </Menu>
      </Box>
    );
  };
  
  export default Header;
  