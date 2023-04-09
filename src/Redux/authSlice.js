import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const API_URL = process.env.NEXT_PUBLIC_API_KEY;
const initialState = {
  msg: false,
  user: "",
  token: "",
  loading: false,
  error: "",
};

export const signupUser = createAsyncThunk("auth/signupUser", async (body) => {
  const res = await fetch(`${API_URL}/signup`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return res.json();
});

export const signinUser = createAsyncThunk("auth/signinUser", async (body) => {
  const res = await fetch(`${API_URL}/login`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return res.json();
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      // state.token = action.payload;
      state.token = localStorage.getItem("token");
    },
    setUser: (state, action) => {
      // state.user = action.payload;
      state.user = localStorage.getItem("user");
    },
    logout: (state) => {
      state.token = "";
      state.user = "";
      state.msg = false;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
    cleanup: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        const { error, token, user } = action.payload;
        if (error) {
          state.error = error;
        } else {
          state.token = token;
          state.user = user;
          state.msg = true;
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("token", token);
        }
      })
      .addCase(signupUser.rejected, (state) => {
        state.loading = false;
      })
      .addCase(signinUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signinUser.fulfilled, (state, action) => {
        state.loading = false;
        const { error, token, user } = action.payload;
        if (error) {
          state.error = error;
        } else {
          state.token = token;
          state.user = user;
          state.msg = true;
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("token", token);
        }
      })
      .addCase(signinUser.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setToken, setUser, logout, cleanup } = authSlice.actions;

export default authSlice.reducer;
