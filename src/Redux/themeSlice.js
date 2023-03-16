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
      if (state.theme === "false") {
        state.theme = "true";
        localStorage.setItem("theme", state.theme);
      } else {
        state.theme = "false";
        localStorage.setItem("theme", state.theme);
      }
    },
    addTheme: (state) => {
      state.theme = localStorage.getItem("theme");
    },

    sideBar: (state, action) => {
      if (action.payload === "close") {
        state.menu = "close";
      } else {
        if (state.menu === "close") {
          state.menu = "open";
        } else {
          state.menu = "close";
        }
      }
    },
  },
});

export const { toggle, addTheme, sideBar } = themeSlice.actions;
export default themeSlice.reducer;
