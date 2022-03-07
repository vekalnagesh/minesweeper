import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "../../app/hooks";
import { LevelAndTimerWidgetStyles } from "./map.styles";

const LevelAndTimerWidget = () => {
  const mapList = useAppSelector((state) => state.gameState.map);
  const level = useAppSelector((state) => state.gameState.level);
  const counter = useAppSelector((state) => state.counter.value);

  return (
    <Box sx={LevelAndTimerWidgetStyles.containerBox}>
      <Box sx={LevelAndTimerWidgetStyles.levelContainer}>
        {mapList && mapList.length > 0 ? (
          <Typography
            id="modal-modal-title"
            color="#fff"
            variant="h6"
            component="h2"
          >
            You are playing Level{" - " + level}
          </Typography>
        ) : (
          <Typography
            id="modal-modal-title"
            color="#fff"
            variant="h6"
            component="h2"
          >
            Click on Play Button to start the game.
          </Typography>
        )}
      </Box>
      <Box sx={LevelAndTimerWidgetStyles.timerContainer}>
        {mapList && mapList.length > 0 ? (
          <Typography
            id="modal-modal-title"
            color="#fff"
            variant="h6"
            component="h2"
          >
            Timer - 00:{counter}
          </Typography>
        ) : null}
      </Box>
    </Box>
  );
};

export default LevelAndTimerWidget;
