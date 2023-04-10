import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "false",
  menu: "close",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle: (state) => {
      const theme = state.theme === "false" ? "true" : "false";
      state.theme = theme;
      localStorage.setItem("theme", theme);
    },
    addTheme: (state) => {
      state.theme = localStorage.getItem("theme");
    },
    sideBar: (state, action) => {
      state.menu =
        action.payload === "close"
          ? "close"
          : state.menu === "close"
          ? "open"
          : "close";
    },
  },
});

export const { toggle, addTheme, sideBar } = themeSlice.actions;
export default themeSlice.reducer;
