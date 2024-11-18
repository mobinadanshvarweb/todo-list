import { Box, Typography } from "@mui/material";
import { Task } from "../../types/task-type";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteIcon from "@mui/icons-material/Delete";

const ItemTodo: React.FC<Task> = ({
  id,
  title,
  priority,
  status,
  date,
  estimate,
  hash,
  isAdmin,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        bgcolor: "#F3F3E0",
        borderRadius: "20px",
        padding: 3,
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ color: "#133E87" }}>{title}</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "between",
            alignItems: "center",
            gap: "5px",
          }}
        >
          {isAdmin === "admin" && (
            <Box
              sx={{
                px: 2,
                py: 1,
                borderRadius: "20px",
                bgcolor: "#CBDCEB",
                color: "#800000",
                fontSize: "10px",
                marginX: 2,
              }}
            >
              {hash}
            </Box>
          )}
          <DriveFileRenameOutlineIcon
            sx={{ color: "#133E87", cursor: "pointer" }}
          />

          <DeleteIcon sx={{ color: "#133E87", cursor: "pointer" }} />
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ color: "#133E87" }}>Priority: {priority}</Typography>
        <Typography sx={{ color: "#133E87" }}>Status: {status}</Typography>
        <Typography sx={{ color: "#133E87" }}>Date: {date}</Typography>
        <Typography sx={{ color: "#133E87" }}>Estimate: {estimate}</Typography>
      </Box>
    </Box>
  );
};

export default ItemTodo;
