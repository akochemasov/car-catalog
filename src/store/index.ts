import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import cars from "./slices/cars.slice";
import { createWrapper } from "next-redux-wrapper";

const reducer = {
  cars,
};
export const store = configureStore({ reducer, devTools: true });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
