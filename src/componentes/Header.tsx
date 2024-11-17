import { Box } from "@mui/material";
import Clock from "./Clock";
import Login from "./Login";
import MyModal from "./Modal";

const Header = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        py: 1,
        px: 2,
        gap: { xs: 2, md: 0 },
        bgcolor: "#F3F3E0",
      }}
    >
      <Login />
      <Clock />
      <MyModal />
    </Box>
  );
};

export default Header;
