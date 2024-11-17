import { Box, Modal, Paper } from "@mui/material";
import MyButton from "./common/Button";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

const MyModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <MyButton text={<AddIcon />} onClickHandler={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box sx={{ width: "40%", padding: 2 }}>
          <Paper elevation={3}>hi</Paper>
        </Box>
      </Modal>
    </>
  );
};

export default MyModal;
