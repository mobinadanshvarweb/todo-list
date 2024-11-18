import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../../types/task-type";

export interface TaskState {
  tasks: Task[];
}

const loadLocal = () => {
  const saveTask = localStorage.getItem("task");
  return saveTask ? JSON.parse(saveTask) : [];
};
const initialState: TaskState = {
  tasks: loadLocal(),
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      localStorage.setItem("task", JSON.stringify(state.tasks));
    },
  },
});

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
