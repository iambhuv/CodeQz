import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "Alert!",
  text: "",
  handleOk: () => {},
  handleClose: () => {},
  shown: false,
};

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    show: (_state, action) => {
      if (typeof action.payload === "string") {
        return {
          ...initialState,
          text: action.payload,
          shown: true,
        };
      } else {
        return {
          ...initialState,
          ...action.payload,
          shown: true,
        };
      }
    },
    hide: () => initialState,
  },
});

export const { show, hide } = alertSlice.actions;

export default alertSlice.reducer;
