import { Box, Popover } from "@mui/material";
import MyButton from "./common/Button";
import { useState } from "react";
import Input from "./common/Input";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../redux/slice/login-slice";
import { RootState } from "../redux/store";
const Login = () => {
  const dispatch = useDispatch();
  const isAdmin = useSelector((state: RootState) => state.login.admin.userName);
  const isPassword = useSelector(
    (state: RootState) => state.login.admin.password
  );
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [containerEl, setContainerEl] = useState(null);
  const handleLogin = () => {
    const newLogin = {
      userName: userName,
      password: password,
    };
    dispatch(setLogin(newLogin));
    setContainerEl(null);
  };
  const handleLogOut = () => {
    dispatch(setLogin(""));
    localStorage.removeItem("admin");
    setContainerEl(null);
  };

  const handleOpen = (e: any) => {
    setContainerEl(e.currentTarget);
  };
  const handleClose = () => {
    setContainerEl(null);
  };

  const open = Boolean(containerEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <MyButton
        aria-describedby={id}
        color="#133E87"
        borderColor="#133E87"
        onClickHandler={handleOpen}
        text={isAdmin === "admin" && isPassword === "1234" ? "Logout" : "Login"}
      />

      <Popover
        id={id}
        open={open}
        anchorEl={containerEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box
          sx={{ p: 3, display: "flex", flexDirection: "column", gap: "8px" }}
        >
          {isAdmin === "admin" && isPassword === "1234" ? (
            ""
          ) : (
            <>
              <Input
                placeholder="User name"
                onChangeHandler={(e) => {
                  setUserName(e.target.value);
                }}
                type="text"
              />
              <Input
                placeholder="Password"
                onChangeHandler={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
              />
            </>
          )}
          <MyButton
            color="#F3F3E0"
            bgColor="#133E87"
            text={
              isAdmin === "admin" && isPassword === "1234" ? "Logout" : "Login"
            }
            onClickHandler={
              isAdmin === "admin" && isPassword === "1234"
                ? handleLogOut
                : handleLogin
            }
          />
        </Box>
      </Popover>
    </>
  );
};

export default Login;
