import { configureStore } from "@reduxjs/toolkit";
import iconReducer from "./iconSlice";
import homeSlice from "./homeSlice";
import openSlice from "./openSlice";
import colorThemeSlice from "./colorThemeSlice";


export const store = configureStore({
  reducer: {
    icon: iconReducer,
    image: homeSlice,
    open: openSlice,
    theme: colorThemeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
