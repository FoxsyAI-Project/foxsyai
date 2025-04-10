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
  ListItemText,
  ListItemButton,
  Collapse,
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
import MvxIcon from "../assets/images/mvxLogo.png";
import SolIcon from "../assets/images/solanaIcon.png";
import BridgeIcon from "../assets/images/Bridge.png";

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

  const earningsLinks = [
    {
      label: "Stake w/ Foxsy AI",
      url: "https://explorer.multiversx.com/identities/oxsyai",
    },
    { label: "Autostaking", url: "https://prelaunch.foxsy.ai/" },
    {
      label: "Metastaking",
      url: "https://xexchange.com/staking/FOXSY-5d5f3e",
    },
    {
      label: "Staking",
      url: "https://xexchange.com/liquidity/FOXSYWEGLD-2a5635/create-position/pool",
    },
    {
      label: "Staking",
      url: "https://raydium.io/liquidity/increase/?mode=add&pool_id=9g33GBYw4BweTk6Bo6QbqHNsS9R8vwFSapsw7NcoZHzy",
    },
  ];

  const tokenLinks = [
    { label: "Bridge", url: "https://bridge.onefinity.network/" },
   
  ];

  const play2EarnLinks = [
    { label: "FoxKeeper", url: "https://foxkeeper.ai/" },
    { label: "FoxAgent", url: "https://foxagent.ai/" },
    { label: "FoxLeague", url: "https://foxleague.ai/" },
  ];
  
  const ecosystemLinks = [
    {
      label: "Governance",
      url: "https://docs.google.com/spreadsheets/d/1EFtC61jJD1kgcgz1KnhJ-r2RRwP6kLsUcGTK_YMPHgE/edit?gid=0#gid=0",
    },
    {
      label: "Token metrics",
      url: "https://docs.google.com/spreadsheets/d/1JWH57vvKGgzt3cmPbXrw1H14qxB1UPkT/edit?gid=252611105#gid=252611105",
    },
    {
      label: "Whitepaper",
      url: "https://project.docs.foxsy.ai/",
    },
    {
      label: "Onepager",
      url: "https://drive.google.com/file/d/1bwmAuBHYOUQUA2z0Gw8bj7XKaLXaYtOc/edit",
    },
  ];

  const handleToggleHubMenu = () => {
    setOpenHubMenu((prev) => !prev);
  };

  const windowLocation = window.location;
  const showMenu = windowLocation.pathname !== "/get-foxsy";

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
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Box component="img" src={logo} alt="Foxsy Logo" sx={{ height: 40 }} />

        {/* Desktop Navigation */}
        {!isMobile && showMenu ? (
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
            <Typography
              variant="link14"
              sx={{ cursor: "pointer", "&:hover": { color: "#EA3807" } }}
              onClick={() => document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth" })}

            >
              What is Foxsy AI
            </Typography>
            <Typography
              variant="link14"
              sx={{ cursor: "pointer", "&:hover": { color: "#EA3807" } }}
              onClick={() => document.getElementById("products-section")?.scrollIntoView({ behavior: "smooth" })}

            >
              Products
            </Typography>
            <Typography
              variant="link14"
              sx={{ cursor: "pointer", "&:hover": { color: "#EA3807" } }}
              onClick={() => document.getElementById("robocup-section")?.scrollIntoView({ behavior: "smooth" })}

            >
              RoboCup
            </Typography>
            <Typography
              variant="link14"
              sx={{ cursor: "pointer", "&:hover": { color: "#EA3807" } }}
              onClick={() => document.getElementById("foxsy-token-section")?.scrollIntoView({ behavior: "smooth" })}

            >
              $FOXSY
            </Typography>
            <Button
              variant="contained"
              onClick={() => window.open('/get-foxsy', '_blank')}
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
        ) :
        showMenu?
        (
          <IconButton onClick={toggleDrawer(true)} sx={{ color: "#fff" }}>
            <MenuIcon />
          </IconButton>
        )
      :
      ''
      }

        {/* Drawer for Mobile */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{
              width: 250,
              bgcolor: "#000",
              height: "100%",
              color: "#fff",
              p: 2,
            }}
          >
            {/* Logo and Close */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="Foxsy Logo"
                sx={{ height: 30 }}
              />
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
                  onClick={() => window.open('/get-foxsy', '_blank')}
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
            borderRadius: 0,
          },
        }}
      >
        {/* Earnings */}
        <Box display="flex" flexDirection="column">
          <Typography variant="b1" sx={{ mb: 4, color: "white" }}>
            Earnings
          </Typography>
          {earningsLinks.map(({ label, url }, i) => (
            <MenuItem
              key={i}
              component="a"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ ...theme.typography.t5, color: "#ccc", pl: 0 }}
            >
              {url.includes("raydium") ? (
                <img
                  src={SolIcon}
                  alt="SOL Icon"
                  style={{ marginRight: 8, width: "20px" }}
                />
              )
            :
            (
              <img
                src={MvxIcon}
                alt="MVX Icon"
                style={{ marginRight: 8, width: "20px" }}
              />
            )
            }
              {label}
            </MenuItem>
          ))}
        </Box>

        {/* Token */}
        <Box display="flex" flexDirection="column">
          <Typography variant="b1" sx={{ mb: 4, color: "white" }}
          >
            $FOXSY Token
          </Typography>
          {tokenLinks.map(({ label, url }, i) => (
            <MenuItem
              key={i}
              component="a"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ ...theme.typography.t5, color: "#ccc", pl: 0 }}
            >
              {label === "Bridge" && (
                <img
                  src={BridgeIcon}
                  alt="MVX Icon"
                  style={{ marginRight: 8, width: "20px" }}
                />
              )}
            
              {label}
            </MenuItem>
          ))}
        </Box>

        {/* Play2Earn */}
        <Box display="flex" flexDirection="column">
          <Typography variant="b1" sx={{ mb: 4, color: "white" }}>
            Play2Earn
          </Typography>
          {play2EarnLinks.map(({ label, url }, i) => (
    <MenuItem
      key={i}
      component="a"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      sx={{ ...theme.typography.t5, color: "#ccc", pl: 0 }}
    >
      {label}
    </MenuItem>
  ))}
        </Box>

        {/* Ecosystem */}
        <Box display="flex" flexDirection="column">
          <Typography variant="b1" sx={{ mb: 4, color: "white" }}>
            Ecosystem
          </Typography>
        {ecosystemLinks.map(({ label, url }, i) => (
    <MenuItem
      key={i}
      component="a"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      sx={{ ...theme.typography.t5, color: "#ccc", pl: 0 }}
    >
      {label}
    </MenuItem>
  ))}
        </Box>
      </Menu>
    </Box>
  );
};

export default Header;
