import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IconState {
  activeIcon: string;
}
const initialState: IconState = {
  activeIcon: "",
};

const iconSlice = createSlice({
  name: "icon",
  initialState,
  reducers: {
    setActiveIcon(state, action: PayloadAction<string>) {
      state.activeIcon = action.payload;
    },

    resetActiveIcon(state) {
      state.activeIcon = "";
    },
  },
});

export const { setActiveIcon, resetActiveIcon } = iconSlice.actions;
export default iconSlice.reducer;
