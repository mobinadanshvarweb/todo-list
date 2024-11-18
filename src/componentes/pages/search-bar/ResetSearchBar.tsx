import { Box, IconButton, Snackbar } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { resetSearchBar } from "../../../redux/slice/task-slice";

const ResetSearchBar = () => {
  const dispatch = useDispatch();
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleResetClick = () => {
    setSnackbarOpen(true);
    dispatch(resetSearchBar());
  };
  return (
    <Box>
      <IconButton
        onClick={handleResetClick}
        sx={{
          position: "absolute",
          top: "-15px",
          right: "-15px",
          bgcolor: "#800000",
          color: "#FFF",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            bgcolor: "#C00000",
            transform: "scale(1.1)",
            boxShadow: "0 6px 14px rgba(0, 0, 0, 0.4)",
          },
        }}
      >
        <RestartAltIcon />
      </IconButton>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={() => setSnackbarOpen(false)}
        message="Filters have been reset!"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </Box>
  );
};

export default ResetSearchBar;
