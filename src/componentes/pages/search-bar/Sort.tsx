import SwapVertIcon from "@mui/icons-material/SwapVert";
import MyButton from "../../common/Button";
import { Box, Popover } from "@mui/material";
import MySelect from "../../common/Select";
import { Priority } from "../../../enum/priority-enum";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useState } from "react";
import { resetSort, setSort } from "../../../redux/slice/task-slice";

const Sort = () => {
  const dispatch = useDispatch();
  const sort = useSelector((state: RootState) => state.task.sort);
  const [containerEl, setContainerEl] = useState(null);

  const handleOpen = (e: any) => {
    setContainerEl(e.currentTarget);
  };
  const handleClose = () => {
    setContainerEl(null);
    // dispatch(resetSort());
  };
  const open = Boolean(containerEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <MyButton
        border="none"
        aria-describedby={id}
        onClickHandler={handleOpen}
        text={
          <SwapVertIcon
            sx={{ color: "#133E87", cursor: "pointer", fontSize: 35 }}
          />
        }
      />
      <Popover
        id={id}
        open={open}
        anchorEl={containerEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            width: "200px",
          }}
        >
          <MySelect
            label="Priority"
            onChangeHandler={(e) => {
              dispatch(setSort(e.target.value));
            }}
            value={sort}
            optionsEnum={Priority}
          />
        </Box>
      </Popover>
    </>
  );
};

export default Sort;
