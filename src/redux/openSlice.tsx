import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: {
    settings: false,
    garbageCan: false,
    cvWord: false,
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
    toggleCVWord: (state) => {
      state.isOpen.cvWord = !state.isOpen.cvWord;
    },
    toggleChrome: (state) => {
      state.isOpen.chrome = !state.isOpen.chrome;
    },
  },
});

export const { toggleSettings, toggleGarbageCan, toggleCVWord, toggleChrome } =
  openSlice.actions;

export default openSlice.reducer;
