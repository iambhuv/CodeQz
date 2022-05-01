import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "./reducers/alert";

const store = configureStore({
  // Will Contain all Reducers there
  reducer: {
    alert: alertReducer,
  },

  // To Disable Warning/Errors, coz we will use callbacks in out state
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
