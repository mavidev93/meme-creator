//react
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

//app redyx
// import imagesReducer from "../features/Images/imagesSlice";
// import textReducer from "../features/memeTexts/memeTextsSlice";




export const store = configureStore({
  reducer: {
    images: imagesReducer,
    memeTexts: textReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
