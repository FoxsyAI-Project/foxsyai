import { Box, Typography, Container } from "@mui/material";
import coinIcon from "../../assets/images/coins.png";

const GetFoxsyHeader = () => {
  return (
    <Box
      sx={{
        bgcolor:"black",
        py: { xs: 4, md: 6 },
        maxWidth: { xs: "100vw", md: "1200px", margin:"0 auto" }
      }}
    >
      <Container sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
        <Typography
          variant="tFoxsyHeader"
          sx={{
            color: "#fff",
          }}
        >
          HOW TO GET{" "}
          <Box component="span" sx={{ color: "#EA3807" }}>
            $FOXSY
          </Box>
        </Typography>

        <Box
          component="img"
          src={coinIcon}
          alt="Foxsy Coin"
          sx={{
            width: { xs: 50, md: 80 },
            height: "auto",
          }}
        />
      </Container>
    </Box>
  );
};

export default GetFoxsyHeader;
