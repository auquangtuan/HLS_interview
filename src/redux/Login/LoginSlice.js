import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "node_modules/axios";

const LoginSlice = createSlice({
  name: "login",
  initialState: {
    user: [],
    logout: "",
  },
  reducers: {
    logout: (state, action) => {
      state.user = [];
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.user = payload;
      localStorage.setItem("user", JSON.stringify(payload));
    });
  },
});

export const login = createAsyncThunk("login/loginSlice", async (data) => {
  return await axios
    .post(`http://localhost:3333/api/users/login`, data)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response.data;
    });
});

export const registers = createAsyncThunk("register/loginSlice", async (data) => {
  return await axios
    .post(`http://localhost:3333/api/users/register`, data)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response.data;
    });
});
export const { logout } = LoginSlice.actions;
export default LoginSlice;
