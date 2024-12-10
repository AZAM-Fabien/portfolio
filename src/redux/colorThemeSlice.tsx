import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { blueThemeLight } from "../theme/theme";

interface ThemeState {
  currentTheme: typeof blueThemeLight;
}

const initialState: ThemeState = {
  currentTheme: blueThemeLight, // Par défaut, on peut choisir un thème initial
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<typeof blueThemeLight>) => {
      state.currentTheme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
