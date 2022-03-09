import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import counterReducer from "../features/counter/counter-slice";
import gameReducer from "../features/game/game-slice";
import flagReducer from "../features/flag/flag-slice";

import saga from "../features/game/saga";

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    gameState: gameReducer,
    flagState: flagReducer,
  },
  middleware,
});

sagaMiddleware.run(saga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
