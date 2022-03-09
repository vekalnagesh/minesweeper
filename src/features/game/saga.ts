import { call, takeEvery, put, take } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import WebsocketChannel from "../../app/websocket";
import { playNewGame, getNewMap, openSquare } from "./game-slice";
import { resetTimer } from "../counter/counter-slice";
import { markFlags, setTotalFlags } from "../flag/flag-slice";

export enum GameActions {
  START_NEW_GAME = "START_NEW_GAME",
  GET_NEW_MAP = "GET_NEW_MAP",
  OPEN_SQUARE_X_Y = "OPEN_SQUARE_X_Y",
  FLAG_SQUARE = "FLAG_SQUARE",
  FAILED_COMMAND = "FAILED_COMMAND",
}

export type OpenSquareXY = {
  x: number;
  y: number;
  message: string;
};

export function* StartNewGame(action: PayloadAction<number>): any {
  try {
    const FlagsPerLevel = [0, 15, 45, 104];
    const newGameCommand = `new ${action.payload}`;
    const wschannel = yield call(WebsocketChannel, newGameCommand);

    while (true) {
      const message = yield take(wschannel);
      if (message === "new: OK") {
        yield put(playNewGame(action.payload));
        yield put(resetTimer());
        yield put(setTotalFlags(FlagsPerLevel[action.payload]));
        yield put({ type: GameActions.GET_NEW_MAP });
      } else {
        yield put({ type: GameActions.FAILED_COMMAND });
      }
    }
  } catch (e) {
    yield put({ type: GameActions.FAILED_COMMAND });
  }
}

export function* GenerateNewMap(): any {
  try {
    const getNewMapCommand = `map`;
    const wschannel = yield call(WebsocketChannel, getNewMapCommand);

    while (true) {
      const message: string = yield take(wschannel);
      const result: string[] = message.split("map:");
      if (result[1]?.trimStart() !== "Not started") {
        yield put(getNewMap(result[1]));
      } else {
        yield put({ type: GameActions.FAILED_COMMAND });
      }
    }
  } catch (e) {
    yield put({ type: GameActions.FAILED_COMMAND });
  }
}

export function* OpenSquareAction(action: PayloadAction<OpenSquareXY>): any {
  try {
    const openSquareCommand = `open ${action.payload?.x} ${action.payload?.y}`;
    const wschannel = yield call(WebsocketChannel, openSquareCommand);

    while (true) {
      const message: string = yield take(wschannel);
      if (message) {
        yield put(openSquare(message));
        yield put({ type: GameActions.GET_NEW_MAP });
      } else {
        yield put({ type: GameActions.FAILED_COMMAND });
      }
    }
  } catch (e) {
    yield put({ type: GameActions.FAILED_COMMAND });
  }
}

export function* FlagSquareAction(action: PayloadAction<OpenSquareXY>): any {
  yield put(markFlags(action.payload));
}

export default function* rootSaga() {
  yield takeEvery(GameActions.START_NEW_GAME, StartNewGame);
  yield takeEvery(GameActions.GET_NEW_MAP, GenerateNewMap);
  yield takeEvery(GameActions.OPEN_SQUARE_X_Y, OpenSquareAction);
  yield takeEvery(GameActions.FLAG_SQUARE, FlagSquareAction);
}
