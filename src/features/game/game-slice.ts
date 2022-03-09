import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GameState {
  level: number;
  map: string[];
  score: number;
  message: string;
}

const initialState: GameState = {
  level: 1,
  map: [],
  score: 0,
  message: "No Result",
};

const convertData = (data: string): string[] => {
  const items = data.split("\n");
  return items.filter((item: string) => !!item.length);
};

const gameSlice = createSlice({
  name: "gameState",
  initialState,
  reducers: {
    playNewGame(state, action: PayloadAction<number>) {
      state["level"] = action.payload;
      state["message"] = "No Result";
    },
    getNewMap(state, action: PayloadAction<string>) {
      state["map"] = convertData(action.payload);
    },
    openSquare(state, action: PayloadAction<string>) {
      state["message"] = action.payload;
    },
  },
});

export const { playNewGame, getNewMap, openSquare } = gameSlice.actions;
export default gameSlice.reducer;
