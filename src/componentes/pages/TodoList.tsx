import { Box } from "@mui/material";
import MySwitch from "../common/Switch";
import ListTodo from "./ListTodo";
import SearchBar from "./search-bar/SearchBar";

const TodoList = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="80%"
      gap="50px"
      alignItems="center"
      sx={{
        marginBottom: 6,
      }}
    >
      <MySwitch
        leftText="Kanb Show"
        onClickHandler={() => {}}
        rightText="List Show"
      />
      <SearchBar />
      <ListTodo />
    </Box>
  );
};

export default TodoList;
