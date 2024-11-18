import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import { SwitchProps } from "../../types/switch-type";
import { Box } from "@mui/material";

const MySwitch: React.FC<SwitchProps> = ({ onClickHandler }) => {
  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 50,
    height: 25,
    padding: 0,
    display: "flex",

    // When the switch is active
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(20px)",
      },
    },
    // Switch base (handles the switch mechanism)
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
    // Thumb of the switch
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Adding shadow
      width: 20,
      height: 20,
      borderRadius: 10, // rounded corners for thumb
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    // Track of the switch (background)
    "& .MuiSwitch-track": {
      borderRadius: 25 / 2,
      opacity: 1,
      backgroundColor: "#133E87",
      boxSizing: "border-box",
      ...theme.applyStyles("dark", {
        backgroundColor: "#608BC1",
      }),
    },
    // Adding a shadow around the entire switch container
    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.5)", // Outer shadow
    borderRadius: "12px", // rounding the switch corners
  }));

  return (
    <Box width="100%" display="flex" justifyContent="end">
      <Stack
        onClick={onClickHandler}
        direction="row"
        spacing={1}
        sx={{ alignItems: "center" }}
      >
        <AntSwitch defaultChecked inputProps={{ "aria-label": "ant design" }} />
      </Stack>
    </Box>
  );
};

export default MySwitch;
