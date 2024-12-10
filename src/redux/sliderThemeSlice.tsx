import { createSlice} from "@reduxjs/toolkit";

interface Theme {
  sliderTheme: boolean;
}

const initialState: Theme = {
  sliderTheme: true, // by default light theme
};

const themeSlice = createSlice({
  name: "sliderTheme",
  initialState,
  reducers: {
    changeThemeState: (state) => {
      state.sliderTheme = !state.sliderTheme;
    },
  },
});

export const { changeThemeState } = themeSlice.actions;

export default themeSlice.reducer;
