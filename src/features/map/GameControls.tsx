import ButtonGroup from "@mui/material/ButtonGroup";
import Avatar from "@mui/material/Avatar";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Box from "@mui/material/Box";
import { ColorButton, Header } from "../common";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "../../app/hooks";
import { gameControlStyles } from "./map.styles";

interface GetDashboardInterface {
  startNewGame: (level: number) => void;
}

const GameControls = ({ startNewGame }: GetDashboardInterface) => {
  const level = useAppSelector((state) => state.gameState.level);

  return (
    <Box sx={gameControlStyles.containerBox}>
      <Box sx={gameControlStyles.buttonGroupContainer}>
        <Header title="Minesweeper" />
        <Box sx={gameControlStyles.levelContainer}>
          <Typography
            id="modal-modal-title"
            color="#fff"
            variant="h6"
            component="h2"
            sx={{ marginRight: "15px" }}
          >
            Play New Game
          </Typography>

          <Avatar
            onClick={() => startNewGame(level ? level : 1)}
            sx={gameControlStyles.avatarPlayArrows}
          >
            <PlayArrowIcon />
          </Avatar>
        </Box>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <ColorButton onClick={() => startNewGame(1)}>Easy</ColorButton>
          <ColorButton onClick={() => startNewGame(2)}>Medium</ColorButton>
          <ColorButton onClick={() => startNewGame(3)}>Hard</ColorButton>
        </ButtonGroup>
      </Box>
      {/* <Box sx={gameControlStyles.buttonGroupContainer}>
      
      </Box> */}
    </Box>
  );
};

export default GameControls;
