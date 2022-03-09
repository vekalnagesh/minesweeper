import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ColorButton from "./ColorButton";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

interface AlertBoxProps {
  restartGame: () => void;
  title: string;
  content: string;
}

const style = {
  alertContainer: {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "50%",
    border:
      "2px solid radial-gradient(circle at top left,#ffa500 0%,#ff00d0 50%)",
    boxShadow: 24,
    bgcolor: "#f8fbfbbf",
    color: "red",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "space-around",
    justifyContent: "space-around",
    p: 4,
  },
  subContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  gradientHeader: {
    backgroundImage:
      "radial-gradient(circle at top left,#ffa500 0%,#ff00d0 50%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  gradientSubtitle: {
    backgroundImage:
      "radial-gradient(circle at top left,#ffa500 0%,#ff00d0 50%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    mt: 5,
    mb: 5,
  },
  flashImageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  flashImage: {
    color: "red",
    width: "205px",
    height: "205px",
  },
};

const AlertBox = ({ restartGame, title, content }: AlertBoxProps) => {
  return (
    <Box sx={style.alertContainer}>
      <Box sx={style.subContainer}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={style.gradientHeader}
        >
          {title}
        </Typography>
        <Typography sx={style.gradientSubtitle} id="modal-modal-description">
          {content}
        </Typography>
        <ColorButton onClick={() => restartGame()}>New Game</ColorButton>
      </Box>
      <Box sx={style.flashImageContainer}>
        <LocalFireDepartmentIcon sx={style.flashImage} />
      </Box>
    </Box>
  );
};
export default AlertBox;
