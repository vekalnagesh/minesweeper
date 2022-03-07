import React, { useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

//Components
import { Header, AlertBox } from "./features/common";
import { Map, GameControls } from "./features/map";

//Redux and hooks
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { subtractCounter, setCounter } from "./features/counter/counter-slice";

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
  const counter = useAppSelector((state) => state.counter.value);
  const message = useAppSelector((state) => state.gameState.message);
  const level = useAppSelector((state) => state.gameState.level);
  const dispatch = useAppDispatch();

  const [open, setOpen] = React.useState(false);

  //Modal open Close
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //Start New Game
  useEffect(() => {
    startNewGame(1);

    const timer = setInterval(() => {
      if (counter > 0) {
        dispatch(subtractCounter(1));
      }
    }, 6000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  //Recieve New Message
  useEffect(() => {
    if (message === "open: You lose") {
      handleOpen();
    }
  }, [message]);

  //Recieve Counter Value
  useEffect(() => {
    if (counter < 0) {
      handleOpen();
    }
  }, [counter]);

  //Restart Game
  const restartGame = () => {
    handleClose();
    dispatch(setCounter(60));
    startNewGame(level);
  };

  //Start New Game
  const startNewGame = (level: number) => {
    dispatch({ type: "START_NEW_GAME", payload: level });
    dispatch(setCounter(60));
  };

  // Open Square
  const openSquare = (x: number, y: number) => {
    dispatch({ type: "OPEN_SQUARE_X_Y", payload: { x, y, message: "" } });
  };

  const appStyles = {
    container: {
      flexGrow: 1,
      marginTop: 4,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifySelf: "center",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Header title="Minesweeper" />
      <Box sx={appStyles.container}>
        <GameControls startNewGame={startNewGame} />
        <Map openSquare={openSquare} />
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <AlertBox restartGame={restartGame} />
        </div>
      </Modal>
    </ThemeProvider>
  );
}

export default App;
