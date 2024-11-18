import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./slice/task-slice";
import loginSlice from "./slice/login-slice";

export const store = configureStore({
  reducer: {
    task: taskSlice,
    login: loginSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
