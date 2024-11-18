import { TextField } from "@mui/material";
import React from "react";
import { InputProps } from "../../types/input-type";

const Input: React.FC<InputProps> = ({
  placeholder,
  type,
  onChangeHandler,
}) => {
  return (
    <TextField
      id="outlined-basic"
      variant="outlined"
      type={type}
      placeholder={placeholder}
      size="small"
      sx={{
        width: "100%",
        borderRadius: 1,
        bgcolor: "#CBDCEB",
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#CBDCEB",
          },
          "&:hover fieldset": {
            borderColor: "#CBDCEB",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#608BC1",
          },
        },
      }}
      onChange={onChangeHandler}
    />
  );
};

export default Input;
