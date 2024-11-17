import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { SwitchProps } from "../../types/switch-type";
import { Box } from "@mui/material";

const MySwitch: React.FC<SwitchProps> = ({
  onClickHandler,
  leftText,
  rightText,
}) => {
  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 50,
    height: 25,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(20px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(25px)",
        color: "#133E87",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: "#F3F3E0",
          ...theme.applyStyles("dark", {
            backgroundColor: "#177ddc",
          }),
        },
      },
      "&.Mui-unChecked": {
        color: "#F3F3E0",
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 20,
      height: 20,
      borderRadius: 10,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 25 / 2,
      opacity: 1,
      backgroundColor: "#133E87",
      boxSizing: "border-box",
      ...theme.applyStyles("dark", {
        backgroundColor: "#608BC1",
      }),
    },
  }));
  return (
    <Box width="100%" display="flex" justifyContent="end">
      <Stack
        onClick={onClickHandler}
        direction="row"
        spacing={1}
        sx={{ alignItems: "center" }}
      >
        <Typography color="#133E87" fontSize="14px">
          {leftText}
        </Typography>
        <AntSwitch defaultChecked inputProps={{ "aria-label": "ant design" }} />
        <Typography color="#133E87" fontSize="14px">
          {rightText}
        </Typography>
      </Stack>
    </Box>
  );
};

export default MySwitch;
