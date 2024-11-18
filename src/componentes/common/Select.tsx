import { MenuItem, TextField } from "@mui/material";
import { SelectProps } from "../../types/select-type";
const MySelect: React.FC<SelectProps> = ({
  label,
  value,
  onChangeHandler,
  optionsEnum,
}) => {
  const options = Object.entries(optionsEnum).map(([key, value]) => ({
    key,
    value,
  }));
  return (
    <TextField
      fullWidth
      variant="outlined"
      select
      label={label}
      value={value}
      onChange={onChangeHandler}
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
    >
      {options.map((option) => {
        return (
          <MenuItem key={option.key} value={option.key}>
            {option.value}
          </MenuItem>
        );
      })}
    </TextField>
  );
};

export default MySelect;
