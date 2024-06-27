import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    openSettings: (state) => {
      state.isOpen = true;
    },
    closeSettings: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openSettings, closeSettings } = settingsSlice.actions;

export default settingsSlice.reducer;