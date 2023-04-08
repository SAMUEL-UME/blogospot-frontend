import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import themeSlice from "./themeSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    user: authSlice,
    theme: themeSlice,
    search: searchSlice,
  },
});

export default store;
