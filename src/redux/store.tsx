import { configureStore } from "@reduxjs/toolkit";
import iconReducer from './iconSlice';
import homeSlice from "./homeSlice";
import SettingsSlice from "./SettingsSlice";
import colorThemeSlice from "./colorThemeSlice";

export const store = configureStore({
  reducer: {
    icon: iconReducer,
    image: homeSlice,
    settings: SettingsSlice,
    theme: colorThemeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
