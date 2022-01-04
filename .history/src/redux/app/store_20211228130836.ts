//react
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

//app redyx
import imagesReducer from "../features/Images/imagesSlice";



export const store = configureStore({
  reducer: {
    images: imagesReducer,
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
