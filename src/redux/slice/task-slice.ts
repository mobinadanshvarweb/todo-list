import { createSlice } from "@reduxjs/toolkit";

export interface TaskState {
  value: number;
}

const initialState: TaskState = {
  value: 0,
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const {} = taskSlice.actions;

export default taskSlice.reducer;
