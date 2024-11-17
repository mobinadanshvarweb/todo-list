import { Button } from "@mui/material";
import React from "react";
import { ButtonProps } from "../../types/button-type";
const MyButton: React.FC<ButtonProps> = ({ text, onClickHandler }) => {
  return (
    <Button
      onClick={onClickHandler}
      variant="outlined"
      sx={{ color: "#133E87", borderColor: "#133E87" }}
    >
      {text}
    </Button>
  );
};

export default MyButton;
