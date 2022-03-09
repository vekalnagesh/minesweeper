import React, { useEffect, MouseEvent } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

//Components
import { AlertBox } from "./features/common";
import { Map, GameControls } from "./features/map";

//Redux and hooks
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { incrementedTimer } from "./features/counter/counter-slice";

//Theme
const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#7e7e5d",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

function App() {
  //Redux Appdispatcher and selector
  const counter = useAppSelector((state) => state.counter.seconds);
  const message = useAppSelector((state) => state.gameState.message);
  const level = useAppSelector((state) => state.gameState.level);
  const dispatch = useAppDispatch();

  const [open, setOpen] = React.useState(false);
  const [result, setResult] = React.useState("");
  const [suggestion, setSuggestion] = React.useState("");

  //Modal open Close
  const handleOpen = (result: string, content: string) => {
    setResult(result);
    setSuggestion(content);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  //Start New Game
  useEffect(() => {
    const timer = setInterval(() => {
      if (counter >= 0) {
        dispatch(incrementedTimer());
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [dispatch, counter]);

  //Recieve New Message
  useEffect(() => {
    if (message.includes("open: You lose")) {
      handleOpen("You Loose the Game !!", "Wanna play again?");
    }

    if (message.includes("open: You win.")) {
      handleOpen(
        "Hurray!!! Congratulations you won the Game !!",
        `You can start playing next level now - Level ${level + 1} !!`
      );
    }
  }, [message, level]);

  //Restart Game
  const restartGame = () => {
    handleClose();
    startNewGame(level);
  };

  //Start New Game
  const startNewGame = (level: number) => {
    dispatch({ type: "START_NEW_GAME", payload: level });
    window.scrollTo(0, 200);
  };

  // Open Square
  const openSquare = (e: MouseEvent, x: number, y: number) => {
    e.preventDefault();
    if (e.type === "contextmenu" || e.nativeEvent.which === 3) {
      dispatch({ type: "FLAG_SQUARE", payload: { x, y, message: "" } });
    } else if (e.type === "click" || e.nativeEvent.which === 1) {
      dispatch({ type: "OPEN_SQUARE_X_Y", payload: { x, y, message: "" } });
    }
  };

  const appStyles = {
    container: {
      flexGrow: 1,
      marginTop: 4,
      marginBottom: 4,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifySelf: "center",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={appStyles.container}>
        <GameControls startNewGame={startNewGame} />
        <Map openSquare={openSquare} />
      </Box>
      <Modal
        open={open}
        onBackdropClick={restartGame}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <AlertBox
            restartGame={restartGame}
            title={result}
            content={suggestion}
          />
        </div>
      </Modal>
    </ThemeProvider>
  );
}

export default App;
