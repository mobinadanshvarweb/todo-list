import { Button } from "@mui/material";
import React from "react";
import { ButtonProps } from "../../types/button-type";
const MyButton: React.FC<ButtonProps> = ({
  color,
  borderColor,
  bgColor,
  text,
  onClickHandler,
  width,
}) => {
  return (
    <Button
      onClick={onClickHandler}
      variant="outlined"
      sx={{
        color: color,
        borderColor: borderColor,
        width: width,
        backgroundColor: bgColor,
      }}
    >
      {text}
    </Button>
  );
};

export default MyButton;
