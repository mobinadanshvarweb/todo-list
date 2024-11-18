import { Button } from "@mui/material";
import React from "react";
import { ButtonProps } from "../../types/button-type";
const MyButton: React.FC<ButtonProps> = ({ text, onClickHandler , width }) => {
  return (
    <Button
      onClick={onClickHandler}
      variant="outlined"
      
      sx={{ color: "#133E87", borderColor: "#133E87" , width:{width} }}
    >
      {text}
    </Button>
  );
};

export default MyButton;
