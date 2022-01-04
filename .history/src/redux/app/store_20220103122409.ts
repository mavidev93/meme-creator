//react
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

//app redyx
// import imagesReducer from "../features/Images/imagesSlice";
// import textReducer from "../features/memeTexts/memeTextsSlice";
import memeContainerReducer from "../features/memeContainer/memeContainerSlice"



export const store = configureStore({
  reducer: {
    memeContainer:
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
