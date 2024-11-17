import { Box } from "@mui/material";
import MySwitch from "../common/Switch";

const TodoList = () => {
  return (
    <Box display="flex" flexDirection="column" width="80%" height="30px">
      <MySwitch
        leftText="Kanb Show"
        onClickHandler={() => {}}
        rightText="List Show"
      />
    </Box>
  );
};

export default TodoList;
