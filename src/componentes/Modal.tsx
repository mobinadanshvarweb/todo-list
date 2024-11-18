import { Box, Modal, Paper, Typography } from "@mui/material";
import MyButton from "./common/Button";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import Input from "./common/Input";
import MySelect from "./common/Select";
import { Priority } from "../enum/priority-enum";
import { Status } from "../enum/status-enum";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/slice/task-slice";
import { generateHash } from "../util/generate-hash";

const MyModal = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [estimate, setEstimate] = useState<number | null>(null);
  const [date, setDate] = useState("");
  const [error, setError] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(date, "DATEEE");

  const handleAddTask = () => {
    if (title.trim() === "") {
      setError(true);
      return;
    } else {
      const newTask = {
        id: Date.now(),
        title: title,
        priority: priority,
        status: status,
        estimate: estimate,
        date: date,
        hash: generateHash(),
      };
      dispatch(addTask(newTask));
      setTitle("");
      setPriority("");
      setStatus("");
      setEstimate(null);
      setDate("");
      handleClose();
    }
  };
  return (
    <>
      <MyButton
        color="#133E87"
        borderColor="#133E87"
        text={<AddIcon />}
        onClickHandler={handleOpen}
      />
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
            <Input
              onChangeHandler={(e) => {
                setTitle(e.target.value);
                setError(false);
              }}
              placeholder="Title"
              type="text"
              value={title}
            />
            <Box
              display="flex"
              justifyContent="space-between"
              width="100%"
              gap="10px"
              sx={{ flexDirection: { xs: "column", md: "row" } }}
            >
              <MySelect
                label="Priority"
                onChangeHandler={(e) => {
                  setPriority(e.target.value);
                }}
                value={priority}
                optionsEnum={Priority}
              />
              <MySelect
                label="Status"
                onChangeHandler={(e) => {
                  setStatus(e.target.value);
                }}
                value={status}
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
                onChangeHandler={(e) => {
                  setDate(e.target.value);
                }}
                placeholder="Date"
                type="date"
                value={date}
              />
              <Input
                onChangeHandler={(e) => {
                  const value = Math.max(1, parseInt(e.target.value, 10));
                  setEstimate(value);
                }}
                placeholder="Estimate"
                type="number"
                value={String(estimate)}
              />
            </Box>
            <MyButton
              color="#F3F3E0"
              bgColor="#133E87"
              onClickHandler={handleAddTask}
              text="Add Task"
              width="100%"
            />
          </Paper>
        </Box>
      </Modal>
    </>
  );
};

export default MyModal;
