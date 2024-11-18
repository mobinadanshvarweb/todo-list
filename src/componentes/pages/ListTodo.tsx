import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ItemTodo from "./ItemTodo";

const ListTodo = () => {
  const { tasks, search } = useSelector((state: RootState) => state.task);
  const isAdmin = useSelector((state: RootState) => state.login.admin.userName);

  const searchedTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );
  console.log(searchedTasks);

  return (
    <Box width="100%" display="flex" flexDirection="column" gap="20px">
      {searchedTasks?.map((task) => {
        return (
          <ItemTodo
            key={task.id}
            title={task.title}
            priority={task.priority}
            status={task.status}
            date={task.date}
            estimate={task.estimate}
            hash={task.hash}
            id={task.id}
            isAdmin={isAdmin}
          />
        );
      })}
    </Box>
  );
};

export default ListTodo;
