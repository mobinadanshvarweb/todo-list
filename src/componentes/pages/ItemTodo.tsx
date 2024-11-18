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
        borderRadius: "16px",
        padding: "20px",
        boxShadow:
          "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.06)", // زیبا و نرم
        transition: "transform 0.3s ease, box-shadow 0.3s ease", // افکت انیمیشن
        "&:hover": {
          transform: "scale(1.02)", // افزایش اندازه در حالت هاور
          boxShadow:
            "0px 10px 15px rgba(0, 0, 0, 0.15), 0px 4px 6px rgba(0, 0, 0, 0.1)", // شدوی قوی‌تر در هاور
        },
      }}
    >
      {/* بخش بالایی */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ color: "#133E87", fontWeight: "bold", fontSize: "18px" }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {isAdmin === "admin" && (
            <Box
              sx={{
                px: 2,
                py: 1,
                borderRadius: "12px",
                bgcolor: "#CBDCEB",
                color: "#800000",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              {hash}
            </Box>
          )}
          <DriveFileRenameOutlineIcon
            sx={{
              color: "#133E87",
              cursor: "pointer",
              "&:hover": { color: "#608BC1" },
            }}
          />
          <DeleteIcon
            sx={{
              color: "#133E87",
              cursor: "pointer",
              "&:hover": { color: "#E63946" },
            }}
          />
        </Box>
      </Box>

      {/* بخش جزئیات */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Typography sx={{ color: "#133E87", fontWeight: "500" }}>
          Priority: <span style={{ fontWeight: "bold" }}>{priority}</span>
        </Typography>
        <Typography sx={{ color: "#133E87", fontWeight: "500" }}>
          Status: <span style={{ fontWeight: "bold" }}>{status}</span>
        </Typography>
        <Typography sx={{ color: "#133E87", fontWeight: "500" }}>
          Date: <span style={{ fontWeight: "bold" }}>{date}</span>
        </Typography>
        <Typography sx={{ color: "#133E87", fontWeight: "500" }}>
          Estimate: <span style={{ fontWeight: "bold" }}>{estimate}</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default ItemTodo;
