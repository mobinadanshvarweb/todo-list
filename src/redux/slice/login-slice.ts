import { createSlice } from "@reduxjs/toolkit";
import { LoginProps } from "../../types/login-type";

export interface LoginState {
  admin: LoginProps;
}
const loadLocal = () => {
  const isAdmin = localStorage.getItem("admin");
  return isAdmin ? JSON.parse(isAdmin) : "";
};
export const initialState: LoginState = {
  admin: loadLocal(),
};
export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.admin = action.payload;
      if (state.admin.userName === "admin" && state.admin.password === "1234") {
        localStorage.setItem("admin", JSON.stringify(state.admin));
      } else {
        localStorage.removeItem("admin");
      }
    },
  },
});
export const { setLogin } = loginSlice.actions;
export default loginSlice.reducer;
