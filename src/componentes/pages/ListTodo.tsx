import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ItemTodo from "./ItemTodo";

const ListTodo = () => {
  const { tasks, search, filter } = useSelector(
    (state: RootState) => state.task
  );
  const isAdmin = useSelector((state: RootState) => state.login.admin.userName);

  const searchedTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );
  const filteredTasks = searchedTasks.filter((task) => {
    const matchPriority = filter.priority
      ? task.priority === filter.priority
      : true;
    const matchStatus = filter.status ? task.status === filter.status : true;
    const matchEstimate = filter.estimate
      ? String(task.estimate).toLowerCase() ===
        String(filter.estimate).toLowerCase()
      : true;

    return matchPriority && matchStatus && matchEstimate;
  });

  return (
    <Box width="100%" display="flex" flexDirection="column" gap="20px">
      {filteredTasks?.map((task) => {
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
