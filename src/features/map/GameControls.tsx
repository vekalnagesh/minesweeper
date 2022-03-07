import ButtonGroup from "@mui/material/ButtonGroup";
import Avatar from "@mui/material/Avatar";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { ColorButton } from "../common";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "../../app/hooks";
import { gameControlStyles } from "./map.styles";

interface GetDashboardInterface {
  startNewGame: (level: number) => void;
}

const GameControls = ({ startNewGame }: GetDashboardInterface) => {
  const level = useAppSelector((state) => state.gameState.level);

  return (
    <>
      <Typography
        id="modal-modal-title"
        color="#fff"
        variant="h6"
        component="h2"
      >
        {" "}
        Play New Game
      </Typography>
      <Avatar
        onClick={() => startNewGame(level ? level : 1)}
        sx={gameControlStyles.avatarPlayArrows}
      >
        <PlayArrowIcon />
      </Avatar>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        sx={gameControlStyles.buttonGroups}
      >
        <ColorButton onClick={() => startNewGame(1)}>Level 1</ColorButton>
        <ColorButton onClick={() => startNewGame(2)}>Level 2</ColorButton>
        <ColorButton onClick={() => startNewGame(3)}>Level 3</ColorButton>
      </ButtonGroup>
    </>
  );
};

export default GameControls;
