import { Box, Modal, Paper, Typography } from "@mui/material";
import MyButton from "./common/Button";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import Input from "./common/Input";
import MySelect from "./common/Select";
import { Priority } from "../enum/priority-enum";
import { Status } from "../enum/status-enum";

const MyModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const options = Object.entries(Priority).map(([key, value]) => ({
    key,
    value,
  }));
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
              <MySelect
                label="Priority"
                onChangeHandler={() => {}}
                value=""
                optionsEnum={Priority}
              />
              <MySelect
                label="Status"
                onChangeHandler={() => {}}
                value=""
                optionsEnum={Status}
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
                type="date"
              />
              <Input
                onChangeHandler={() => {}}
                placeholder="Estimate"
                type="number"
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
