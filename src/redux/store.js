import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./Login/LoginSlice";
import storiesSlice from "./Main/HomeSlice";

const store = configureStore({
  reducer: {
    story : storiesSlice.reducer,
    login : LoginSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
