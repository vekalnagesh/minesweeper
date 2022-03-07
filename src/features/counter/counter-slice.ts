import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 60,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incremented(state) {
      state.value++;
    },
    subtractCounter(state, action: PayloadAction<number>) {
      state.value -= action.payload;
    },
    setCounter(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
  },
});

export const { incremented, subtractCounter, setCounter } =
  counterSlice.actions;
export default counterSlice.reducer;
