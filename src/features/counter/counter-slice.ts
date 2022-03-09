import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  mins: number;
  seconds: number;
  time: string;
}

const initialState: CounterState = {
  mins: 0,
  seconds: 0,
  time: "",
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementedTimer(state) {
      if (state.seconds >= 59) {
        state.mins++;
        state.seconds = 0;
      } else {
        state.seconds++;
      }
      let formatedSeconds: string = `${state.seconds}`;
      if (state.seconds < 10) {
        formatedSeconds = `0${state.seconds}`;
      }

      let formatedMinutes: string = `${state.mins}`;
      if (state.mins < 10) {
        formatedMinutes = `0${state.mins}`;
      }

      state.time = `${formatedMinutes}:${formatedSeconds}`;
    },
    resetTimer(state) {
      state.mins = 0;
      state.seconds = 0;
      state.time = `00:00`;
    },
  },
});

export const { incrementedTimer, resetTimer } = counterSlice.actions;
export default counterSlice.reducer;
