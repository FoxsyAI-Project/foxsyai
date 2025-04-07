import {
  Box,
  Container,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Collapse,
  ListItemIcon,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../assets/images/FoxsyAILogo.png";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const [openHubMenu, setOpenHubMenu] = useState(false);

const handleToggleHubMenu = () => {
  setOpenHubMenu((prev) => !prev);
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

        {/* Desktop Navigation */}
        {!isMobile ? (
          <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
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
            <Typography variant="link14" sx={{ cursor: "pointer", "&:hover": { color: "#EA3807" } }}>
              What is Foxsy AI
            </Typography>
            <Typography variant="link14" sx={{ cursor: "pointer", "&:hover": { color: "#EA3807" } }}>
              Products
            </Typography>
            <Typography variant="link14" sx={{ cursor: "pointer", "&:hover": { color: "#EA3807" } }}>
              $FOXSY
            </Typography>
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
        ) : (
          <IconButton onClick={toggleDrawer(true)} sx={{ color: "#fff" }}>
            <MenuIcon />
          </IconButton>
        )}

        {/* Drawer for Mobile */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
  <Box sx={{ width: 250, bgcolor: "#000", height: "100%", color: "#fff", p: 2 }}>
    {/* Logo and Close */}
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
      <Box component="img" src={logo} alt="Foxsy Logo" sx={{ height: 30 }} />
      <IconButton onClick={toggleDrawer(false)} sx={{ color: "#fff" }}>
        <CloseIcon />
      </IconButton>
    </Box>

    {/* Navigation Items */}
    <List>
  {/* Expandable Foxsy Hub */}
  <ListItemButton onClick={handleToggleHubMenu}>
    <ListItemText primary="Foxsy Hub" />
    {openHubMenu ? <ExpandLess /> : <ExpandMore />}
  </ListItemButton>

  <Collapse in={openHubMenu} timeout="auto" unmountOnExit>
    <List component="div" disablePadding>
      {[
        "MVX - Stake w/ Foxsy AI",
        "MVX - Autostaking",
        "MVX - Metastaking",
        "MVX - Staking",
        "SOL - Staking",
      ].map((item, index) => (
        <ListItemButton key={index} sx={{ pl: 4 }}>
          <ListItemText primary={item} />
        </ListItemButton>
      ))}
    </List>
  </Collapse>

  {/* Main navigation */}
  {["What is Foxsy AI", "Products", "$FOXSY"].map((text, index) => (
    <ListItemButton key={index}>
      <ListItemText primary={text} />
    </ListItemButton>
  ))}

  {/* CTA Button */}
  <Box sx={{ mt: 2, px: 2 }}>
    <Button
      variant="contained"
      fullWidth
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
</List>

  </Box>
</Drawer>

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
          {["MVX - Stake w/ Foxsy AI", "MVX - Autostaking", "MVX - Metastaking", "MVX - Staking", "SOL - Staking"].map((item, i) => (
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
          {["Governance", "Token metrics", "Whitepaper", "Onepager"].map((item, i) => (
            <MenuItem key={i} sx={{ color: "#ccc", fontSize: 14 }}>
              {item}
            </MenuItem>
          ))}
        </Box>
      </Menu>
    </Box>
  );
};

export default Header;
