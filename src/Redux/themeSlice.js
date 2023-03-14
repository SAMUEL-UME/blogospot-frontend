import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "false",
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
  },
});

export const { toggle } = themeSlice.actions;
export default themeSlice.reducer;
