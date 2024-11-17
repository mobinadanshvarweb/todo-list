import { Box, Popover } from "@mui/material";
import MyButton from "./common/Button";
import { useState } from "react";
import Input from "./common/Input";
const Login = () => {
  const [containerEl, setContainerEl] = useState(null);

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
        onClickHandler={handleOpen}
        text="Login"
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
          <Input
            placeholder="User name"
            onChangeHandler={() => {}}
            type="text"
          />
          <Input
            placeholder="Password"
            onChangeHandler={() => {}}
            type="password"
          />
          <MyButton text="Login" onClickHandler={() => {}} />
        </Box>
      </Popover>
    </>
  );
};

export default Login;
