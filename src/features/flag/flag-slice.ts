import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type OpenSquareXY = {
  x: number;
  y: number;
  message: string;
};

interface flagState {
  flags: number;
  markedFlags: OpenSquareXY[];
  totalFlags: number;
}

const initialState: flagState = {
  flags: 0,
  totalFlags: 0,
  markedFlags: [],
};

const flagSlice = createSlice({
  name: "flagState",
  initialState,
  reducers: {
    markFlags(state, action: PayloadAction<OpenSquareXY>) {
      if (state.flags > 0) {
        state.flags--;
        state.markedFlags = [...state.markedFlags, action.payload];
      }
    },
    setTotalFlags(state, action: PayloadAction<number>) {
      state.totalFlags = action.payload;
      state.flags = action.payload;
      state.markedFlags = [];
    },
  },
});

export const { markFlags, setTotalFlags } = flagSlice.actions;
export default flagSlice.reducer;
