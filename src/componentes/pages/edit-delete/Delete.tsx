import { Box, Modal, Paper, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import MyButton from "../../common/Button";
import { useState } from "react";
import Input from "../../common/Input";
import { useDispatch } from "react-redux";
import { setDelete } from "../../../redux/slice/task-slice";

const Delete = ({ id, hashTask }: { id: number; hashTask: string }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = (id: number) => {
    if (hash === hashTask) {
      dispatch(setDelete(id));
    }
  };
  return (
    <>
      <MyButton
        color="#133E87"
        border="none"
        text={
          <DeleteIcon
            sx={{
              color: "#091057",
              cursor: "pointer",
              "&:hover": { color: "#800000" },
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
            <Typography variant="h5" color="#800000">
              Delete Task
            </Typography>
            <Typography variant="h6" color="#133E87">
              To delete this task, please enter the task key.
            </Typography>
            <Input
              onChangeHandler={(e) => {
                setHash(e.target.value);
              }}
              placeholder="hash key"
              type="text"
              value={hash}
            />
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "end",
                gap: "4px",
              }}
            >
              <MyButton
                onClickHandler={() => {
                  setOpen(false);
                  setHash("");
                }}
                text="Cancle"
                bgColor=""
                color="#133E87"
                borderColor="#133E87"
              />
              <MyButton
                onClickHandler={() => {
                  handleDelete(id);
                }}
                text="Delete"
                bgColor="#800000"
                color="#F3F3E0"
                border="none"
              />
            </Box>
          </Paper>
        </Box>
      </Modal>
    </>
  );
};

export default Delete;
