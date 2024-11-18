import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../../types/task-type";

export interface TaskState {
  tasks: Task[];
  search: string;
}

const loadLocal = () => {
  const saveTask = localStorage.getItem("task");
  return saveTask ? JSON.parse(saveTask) : [];
};
const initialState: TaskState = {
  tasks: loadLocal(),
  search: "",
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      localStorage.setItem("task", JSON.stringify(state.tasks));
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { addTask, setSearch } = taskSlice.actions;

export default taskSlice.reducer;
