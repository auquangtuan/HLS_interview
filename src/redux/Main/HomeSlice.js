import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "node_modules/axios";

const storiesSlice = createSlice({
  name: "story",
  initialState: {
    storyList: [],
    userStoryAction : []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(readStory.fulfilled, (state, { payload }) => {
      state.storyList = payload;
    });
    builder.addCase(userStoryAction.fulfilled, (state, { payload }) => {
      state.userStoryAction = payload;
    });
  },
});

export const readStory = createAsyncThunk("story/readStory", async () => {
  return await axios
    .get(`http://localhost:3333/api/stories`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response.data;
    });
});
export const userStoryAction = createAsyncThunk("userStoryAction/readStory", async (id) => {
  return await axios
    .get(`http://localhost:3333/api/users/action/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response.data;
    });
});
export default storiesSlice;
