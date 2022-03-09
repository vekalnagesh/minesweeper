import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "../../app/hooks";
import { LevelAndTimerWidgetStyles } from "./map.styles";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import TourIcon from "@mui/icons-material/Tour";
import StairsIcon from "@mui/icons-material/Stairs";

const LevelAndTimerWidget = () => {
  const mapList = useAppSelector((state) => state.gameState.map);
  const flags = useAppSelector((state) => state.flagState.flags);
  const level = useAppSelector((state) => state.gameState.level);
  const counter = useAppSelector((state) => state.counter.time);

  return (
    <Box sx={LevelAndTimerWidgetStyles.containerBox}>
      <Box sx={LevelAndTimerWidgetStyles.levelContainer}>
        {mapList && mapList.length > 0 ? (
          <>
          <StairsIcon sx={LevelAndTimerWidgetStyles.tourIcon} />
          <Typography
            id="modal-modal-title"
            color="#fff"
            variant="h6"
            component="h2"
          >
            Level{" - " + level}
          </Typography>
          </>
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
      {flags ? (
        <Box sx={LevelAndTimerWidgetStyles.levelContainer}>
          <TourIcon sx={LevelAndTimerWidgetStyles.tourIcon} />

          <Typography
            id="modal-modal-title"
            color="#fff"
            variant="h6"
            component="h2"
          >
            Flags - {flags}
          </Typography>
        </Box>
      ) : null}
      {mapList && mapList.length > 0 ? (
        <Box sx={LevelAndTimerWidgetStyles.levelContainer}>
          <AccessAlarmsIcon sx={LevelAndTimerWidgetStyles.tourIcon} />

          <Typography
            id="modal-modal-title"
            color="#fff"
            variant="h6"
            component="h2"
          >
            Timer - {counter}
          </Typography>
        </Box>
      ) : null}
    </Box>
  );
};

export default LevelAndTimerWidget;
