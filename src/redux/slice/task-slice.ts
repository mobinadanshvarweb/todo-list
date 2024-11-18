import { createSlice } from "@reduxjs/toolkit";
import { Filter, Task } from "../../types/task-type";
export interface TaskState {
  tasks: Task[];
  search: string;
  filter: Filter;
  sort: string;
  hash: string;
}

const loadLocal = () => {
  const saveTask = localStorage.getItem("task");
  return saveTask ? JSON.parse(saveTask) : [];
};
const initialState: TaskState = {
  tasks: loadLocal(),
  search: "",
  sort: "",
  hash: "",
  filter: {
    priority: "",
    estimate: 0,
    status: "",
  },
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
    setFilter: (state, action) => {
      state.filter = {
        ...state.filter,
        ...action.payload,
      };
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setHash: (state, action) => {
      state.hash = action.payload;
    },
    setEdit: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      if (index !== -1) {
        state.tasks[index] = action.payload;
        localStorage.setItem("task", JSON.stringify(state.tasks));
      }
    },
    setDelete: (state, action) => {
      state.tasks = state.tasks.filter((task) => {
        if (state.hash === task.hash) {
          task.id !== action.payload;
        }
      });
      localStorage.setItem("task", JSON.stringify(state.tasks));
    },
    resetSearchBar: (state) => {
      state.search = "";
      state.sort = "";
      state.filter = {
        priority: "",
        status: "",
        estimate: 0,
      };
    },
  },
});

export const {
  addTask,
  setSearch,
  setFilter,
  setSort,
  setHash,
  setEdit,
  setDelete,
  resetSearchBar,
} = taskSlice.actions;

export default taskSlice.reducer;
