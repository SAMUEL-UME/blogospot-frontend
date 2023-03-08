import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  msg: false,
  user: "",
  token: "",
  loading: false,
  error: "",
};

//*****************Singup users*****************//
export const signupUser = createAsyncThunk("signupuser", async (body) => {
  const res = await fetch("http://localhost:4000/api/v1/blogospot/signup", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return await res.json();
});

//*****************Singin user*****************//
export const signinUser = createAsyncThunk("signinuser", async (body) => {
  const res = await fetch("http://localhost:4000/api/v1/blogospot/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await res.json();
});

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = localStorage.getItem("token");
    },
    addUser: (state, action) => {
      state.user = localStorage.getItem("user");
    },
    logout: (state, action) => {
      state.token = null;
      state.user = null;
      localStorage.clear();
    },
    cleanup: (state) => {
      state.error = null;
    },
  },
  extraReducers: {
    //Signin user  *********************************
    [signinUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signinUser.fulfilled]: (state, { payload: { error, token, user } }) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
        state.token = token;
        state.user = user;
        state.msg = true;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
      }
    },
    // [signinUser.rejected]: (state, action) => {
    //   state.loading = true;
    // },
    // //signup user ************************
    // [signupUser.pending]: (state, action) => {
    //   state.loading = true;
    // },
    // [signupUser.fulfilled]: (state, { payload: { error, msg } }) => {
    //   state.loading = false;

    //   if (error) {
    //     state.error = error;
    //   } else {
    //     state.msg = msg;
    //   }
    // },
    // [signupUser.rejected]: (state, action) => {
    //   state.loading = true;
    // },
  },
});

export const { addToken, addUser, logout, cleanup } = authSlice.actions;
export default authSlice.reducer;
