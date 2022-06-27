import { configureStore, createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

let initialState = ["", "", "", "", "", "", "", "", ""];

const boardSlice = createSlice({
  name: "board",
  initialState: initialState,
  reducers: {
    Xmove: (state, index) => {
      state[index.payload] = "X";
      return state;
    },
    Omove: (state, index) => {
      state[index.payload] = "O";
      return state;
    },
    Reset: (state) => {
      state = initialState;
      return state;
    },
  },
});

const gameModeSlice = createSlice({
  name: "mode",
  initialState: "",
  reducers: {
    Home: (state) => {
      state = "";
      return state;
    },
    PvsP: (state) => {
      state = "pvsp";
      return state;
    },
    PvsB: (state) => {
      state = "pvsb";
      return state;
    },
  },
});

const rootReducer = combineReducers({
  mode: gameModeSlice.reducer,
  board: boardSlice.reducer,
});

const store = configureStore({ reducer: rootReducer });

export const { Xmove, Omove, Reset } = boardSlice.actions;
export const { Home, PvsP, PvsB } = gameModeSlice.actions;
export default store;
