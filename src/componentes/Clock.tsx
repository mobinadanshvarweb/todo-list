import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [date, setDate] = useState(new Date().toLocaleDateString());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      setDate(new Date().toLocaleDateString());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#133E87",
        textAlign: "center",
      }}
    >
      <AccessTimeFilledIcon sx={{ color: "#133E87" }} fontSize="large" />
      {date} - {time}
    </Box>
  );
};

export default Clock;
