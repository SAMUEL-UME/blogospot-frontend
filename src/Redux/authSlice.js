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
  const res = await fetch(
    "https://misty-cowboy-hat-crow.cyclic.app/api/v1/blogospot/signup",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  return await res.json();
});

//*****************Singin user*****************//
export const signinUser = createAsyncThunk("signinuser", async (body) => {
  const res = await fetch(
    "https://misty-cowboy-hat-crow.cyclic.app/api/v1/blogospot/login",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );
  return await res.json();
});

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToken: (state) => {
      state.token = localStorage.getItem("token");
    },
    addUser: (state) => {
      state.user = localStorage.getItem("user");
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.msg = false;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
    cleanup: (state) => {
      state.error = null;
    },
  },
  extraReducers: {
    //Signin user  *********************************
    [signinUser.pending]: (state) => {
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
    [signinUser.rejected]: (state) => {
      state.loading = false;
    },
    //signup user ************************
    [signupUser.pending]: (state) => {
      state.loading = true;
    },
    [signupUser.fulfilled]: (state, { payload: { error, token, user } }) => {
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
    [signupUser.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { addToken, addUser, logout, cleanup } = authSlice.actions;
export default authSlice.reducer;
