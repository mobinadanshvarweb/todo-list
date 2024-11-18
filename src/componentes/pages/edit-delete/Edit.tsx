import { Box, Modal, Paper, Typography } from "@mui/material";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import MyButton from "../../common/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MySelect from "../../common/Select";
import { Priority } from "../../../enum/priority-enum";
import { Status } from "../../../enum/status-enum";
import { RootState } from "../../../redux/store";
import Input from "../../common/Input";
import { setEdit } from "../../../redux/slice/task-slice";

const Edit = ({ id }: { id: number }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.task.tasks);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [estimate, setEstimate] = useState<number | null>(null);
  const [date, setDate] = useState("");

  const handleOpen = () => {
    setOpen(true);
    const editedTask = tasks.find((task) => task.id === id);
    if (editedTask) {
      setTitle(editedTask.title);
      setPriority(editedTask.priority);
      setStatus(editedTask.status);
      setDate(editedTask.date);
      setEstimate(editedTask.estimate);
    }
  };

  const handleClose = () => setOpen(false);

  const handleEditTask = () => {
    if (!title.trim()) {
      alert("Title is required!");
      return;
    }
    dispatch(
      setEdit({ ...tasks, id, title, priority, estimate, status, date })
    );
    handleClose();
  };

  return (
    <>
      <MyButton
        color="#133E87"
        border="none"
        text={
          <DriveFileRenameOutlineIcon
            sx={{
              color: "#091057",
              cursor: "pointer",
            }}
          />
        }
        onClickHandler={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
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
              Edit Task
            </Typography>
            <Input
              onChangeHandler={(e) => setTitle(e.target.value)}
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
                onChangeHandler={(e) => setPriority(e.target.value)}
                value={priority}
                optionsEnum={Priority}
              />
              <MySelect
                label="Status"
                onChangeHandler={(e) => setStatus(e.target.value)}
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
                onChangeHandler={(e) => setDate(e.target.value)}
                placeholder="Date"
                type="date"
                value={date}
              />
              <Input
                onChangeHandler={(e) => {
                  const value = parseInt(e.target.value, 10);
                  setEstimate(!isNaN(value) ? Math.max(1, value) : null);
                }}
                placeholder="Estimate"
                type="number"
                value={estimate ? String(estimate) : ""}
              />
            </Box>
            <MyButton
              color="#F3F3E0"
              bgColor="#133E87"
              onClickHandler={handleEditTask}
              text="Save Changes"
              width="100%"
            />
          </Paper>
        </Box>
      </Modal>
    </>
  );
};

export default Edit;
