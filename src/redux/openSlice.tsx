import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: {
    settings: false,
    garbageCan: false,
    word: false,
    chrome: false,
  },
};

const openSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleSettings: (state) => {
      state.isOpen.settings = !state.isOpen.settings;
    },
    toggleGarbageCan: (state) => {
      state.isOpen.garbageCan = !state.isOpen.garbageCan;
    },
    toggleWord: (state) => {
      state.isOpen.word = !state.isOpen.word;
    },
    toggleChrome: (state) => {
      state.isOpen.chrome = !state.isOpen.chrome;
    },
  },
});

export const { toggleSettings, toggleGarbageCan, toggleWord, toggleChrome } =
  openSlice.actions;

export default openSlice.reducer;
