import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { blueTheme } from "../theme/theme";

interface ThemeState {
  currentTheme: typeof blueTheme
  ;
}

const initialState: ThemeState = {
  currentTheme: blueTheme, // Par défaut, on peut choisir un thème initial
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<typeof blueTheme>) => {
      state.currentTheme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
