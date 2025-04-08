import { Box, Container, Typography } from "@mui/material";
import amorPerfectoLogo from "../assets/images/amorPerfectoLogo.png";
import arcLogo from "../assets/images/arcLogo.png";
import carpathianSnakeLogo from "../assets/images/carpathianSnakeLogo.png";
import castleStakeLogo from "../assets/images/castleStakeLogo.png";
import equinoxeCapitalLogo from "../assets/images/equinoxeCapitalLogo.png";
import ielemanLogo from "../assets/images/ielemanLogo.png";
import oneDexLogo from "../assets/images/oneDexLogo.png";
import onefinityLogo from "../assets/images/onefinityLogo.png";
import pulsarMoneyLogo from "../assets/images/pulsarMoneyLogo.png";
import roboCupLogo from "../assets/images/roboCupLogo.png";
import stakingAgencyLogo from "../assets/images/stakingAgencyLogo.png";
import tortugaStakingLogo from "../assets/images/tortugaStakingLogo.png";
import validBlocksLogo from "../assets/images/validBlocksLogo.png";
import webWaterLogo from "../assets/images/webWaterLogo.png";
import oferoStakingLogo from "../assets/images/oferoStakingLogo.png";
import weHaveServersLogo from "../assets/images/weHaveServersLogo.png";
import xPortalLogo from "../assets/images/xPortalLogo.png";
import tradeSilvaniaLogo from "../assets/images/tradeSilvaniaLogo.png";
import OrangeLine from "./OrangeLine";

const logos = [
    { src: arcLogo, url: "https://explorer.multiversx.com/identities/arcstake" },
    { src: validBlocksLogo, url: "https://explorer.multiversx.com/identities/validblocks" },
    { src: webWaterLogo, url: "https://explorer.multiversx.com/identities/web3water" },
    { src: carpathianSnakeLogo, url: "https://explorer.multiversx.com/identities/carpathianstake" },
    { src: castleStakeLogo, url: "https://explorer.multiversx.com/identities/castlestake" },
    { src: tortugaStakingLogo, url: "https://explorer.multiversx.com/identities/tortugastaking" },
    { src: stakingAgencyLogo, url: "https://explorer.multiversx.com/identities/stakingagency" },
    { src: oferoStakingLogo, url: "https://explorer.multiversx.com/identities/oferostaking" },
    { src: weHaveServersLogo, url: "https://explorer.multiversx.com/identities/wehaveservers" },
    { src: amorPerfectoLogo, url: "https://explorer.multiversx.com/identities/amor-perfecto" },
    { src: equinoxeCapitalLogo, url: "https://explorer.multiversx.com/identities/equinoxecapital" },
    { src: ielemanLogo, url: "https://explorer.multiversx.com/identities/ieleman" },
    { src: roboCupLogo, url: "https://2024.robocup.org/" },
    { src: pulsarMoneyLogo, url: "https://beta.pulsar.money/" },
    { src: onefinityLogo, url: "https://www.onefinity.network/" },
    { src: oneDexLogo, url: "https://onedex.app/" },
    { src: xPortalLogo, url: "https://xportal.com/" },
    { src: tradeSilvaniaLogo, url: "https://tradesilvania.com/en/" },
  ];
  

const PartnersSection = () => {
  return (
    <Box sx={{ bgcolor: "#1a1a1a", py: 10, color: "#fff" }}>
      <Container>
        <Box sx={{ mb: 4 }}>
         <OrangeLine />
          <Typography variant="subHeading1">
            Partners
          </Typography>
        </Box>

        {/* Grid with 9 columns */}
        <Box
  sx={{
    display: "grid",
    gridTemplateColumns: {
      xs: "repeat(4, 1fr)",   // 6 logos per row on mobile
      sm: "repeat(4, 1fr)",
      md: "repeat(9, 1fr)",   // 9 on medium and larger screens
    },
    gap: 4,
    justifyItems: "flex-start",
    alignItems: "center",
  }}
>
  {logos.map(({ src, url }, index) => (
    <Box key={index} component="a" href={url} target="_blank" rel="noopener noreferrer">
      <Box
        component="img"
        src={src}
        alt={`Partner ${index + 1}`}
        sx={{
          height: 60,
          objectFit: "contain",
          maxWidth: "100%",
          transition: "transform 0.3s",
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      />
    </Box>
  ))}
</Box>
      </Container>
    </Box>
  );
};

export default PartnersSection;
