import { Box, Modal, Paper, TextField, Typography } from "@mui/material";
import MyButton from "./common/Button";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import Input from "./common/Input";

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
        <Box sx={{ width: { xs: "90%", md: "60%", lg: "40%" }, padding: 2 }}>
          <Paper
            elevation={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "30px",
              gap: "20px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h3" color="#133E87">
              {" "}
              New Task
            </Typography>
            <Input onChangeHandler={() => {}} placeholder="Title" type="text" />
            <Box
              display="flex"
              justifyContent="space-between"
              width="100%"
              gap="10px"
              sx={{ flexDirection: { xs: "column", md: "row" } }}
            >
              <Input
                onChangeHandler={() => {}}
                placeholder="Priority"
                type="text"
              />
              <Input
                onChangeHandler={() => {}}
                placeholder="Status"
                type="text"
              />
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              width="100%"
              gap="10px"
              sx={{ flexDirection: { xs: "column", md: "row" } }}
            >
              <Input
                onChangeHandler={() => {}}
                placeholder="Date"
                type="text"
              />
              <Input
                onChangeHandler={() => {}}
                placeholder="Estimate"
                type="text"
              />
            </Box>
            <MyButton onClickHandler={() => {}} text="Add Task" width="100%" />
          </Paper>
        </Box>
      </Modal>
    </>
  );
};

export default MyModal;
