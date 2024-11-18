import { Box, Typography, Tooltip, IconButton } from "@mui/material";
import { Task } from "../../types/task-type";
import Delete from "./edit-delete/Delete";
import Edit from "./edit-delete/Edit";
import React from "react";
import { formatEstimate } from "../../util/formatEstimate";

const ItemTodo: React.FC<Task> = ({
  id,
  title,
  priority,
  status,
  date,
  estimate,
  hash,
  isAdmin,
  isPassword,
}) => {
  const [copySuccess, setCopySuccess] = React.useState(false);

  const handleCopy = async (hash: string) => {
    try {
      await navigator.clipboard.writeText(hash);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        bgcolor: "#608BC1",
        borderRadius: "16px",
        padding: "20px",
        boxShadow:
          "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.06)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow:
            "0px 10px 20px rgba(0, 0, 0, 0.2), 0px 5px 10px rgba(0, 0, 0, 0.1)",
        },
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
        <Typography
          sx={{
            color: "#F3F3E0",
            fontWeight: "bold",
            fontSize: "18px",
          }}
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
          {isAdmin === "admin" && isPassword === "1234" && (
            <Tooltip
              title={copySuccess ? "Copied!" : "Copy to clipboard"}
              arrow
            >
              <IconButton
                onClick={() => handleCopy(hash)}
                sx={{
                  bgcolor: "#CBDCEB",
                  color: "#800000",
                  fontSize: "14px",
                  fontWeight: "bold",
                  borderRadius: "12px",
                  padding: "5px",
                  ":hover": {
                    bgcolor: "#a3c1d1",
                  },
                }}
              >
                {hash}
              </IconButton>
            </Tooltip>
          )}
          <Edit id={id} />
          <Delete id={id} hashTask={hash} />
        </Box>
      </Box>

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
        <Typography sx={{ color: "#F3F3E0", fontWeight: "500" }}>
          Priority: <span style={{ fontWeight: "bold" }}>{priority}</span>
        </Typography>
        <Typography sx={{ color: "#F3F3E0", fontWeight: "500" }}>
          Status: <span style={{ fontWeight: "bold" }}>{status}</span>
        </Typography>
        <Typography sx={{ color: "#F3F3E0", fontWeight: "500" }}>
          Date: <span style={{ fontWeight: "bold" }}>{date}</span>
        </Typography>
        <Typography sx={{ color: "#F3F3E0", fontWeight: "500" }}>
          Estimate:{" "}
          <span style={{ fontWeight: "bold" }}>{formatEstimate(estimate)}</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default ItemTodo;
