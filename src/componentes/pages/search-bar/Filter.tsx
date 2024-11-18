import FilterListIcon from "@mui/icons-material/FilterList";
import { Box, Popover } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyButton from "../../common/Button";
import MySelect from "../../common/Select";
import { Priority } from "../../../enum/priority-enum";
import { Status } from "../../../enum/status-enum";
import Input from "../../common/Input";
import { setFilter } from "../../../redux/slice/task-slice";
import { RootState } from "../../../redux/store";

const Filter = () => {
  const dispatch = useDispatch();
  const priority = useSelector(
    (state: RootState) => state.task.filter.priority
  );
  const status = useSelector((state: RootState) => state.task.filter.status);
  const estimate = useSelector(
    (state: RootState) => state.task.filter.estimate
  );

  const [containerEl, setContainerEl] = useState(null);

  const handleOpen = (e: any) => {
    setContainerEl(e.currentTarget);
  };
  const handleClose = () => {
    setContainerEl(null);
    // dispatch(resetFilter());
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
          <FilterListIcon
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
              dispatch(setFilter({ priority: e.target.value }));
            }}
            value={priority}
            optionsEnum={Priority}
          />
          <MySelect
            label="Status"
            onChangeHandler={(e) => {
              dispatch(setFilter({ status: e.target.value }));
            }}
            value={status}
            optionsEnum={Status}
          />
          <Input
            onChangeHandler={(e) => {
              const value = e.target.value;
              if (!isNaN(Number(value)) && Number(value) >= 0) {
                dispatch(setFilter({ estimate: Number(value) }));
              }
            }}
            placeholder="Estimate"
            type="number"
            value={String(estimate)}
          />
        </Box>
      </Popover>
    </>
  );
};

export default Filter;
