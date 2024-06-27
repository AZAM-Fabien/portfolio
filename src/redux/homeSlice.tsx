import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ImageState {
  activeImage: string;
}
const initialState: ImageState = {
  activeImage: "bike",
};

const homeState = createSlice({
  name: "image",
  initialState,
  reducers: {
    setActiveImage(state, action: PayloadAction<string>) {
      state.activeImage = action.payload;
    },
  },
});

export const { setActiveImage } = homeState.actions;
export default homeState.reducer;
