import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import { purple } from "@mui/material/colors";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: "#135058a8",
  "&:hover": {
    backgroundColor: "#135058a8",
  },
  "&:clicked": {
    backgroundColor: "#dcdf4b",
  },
}));

export default ColorButton;
