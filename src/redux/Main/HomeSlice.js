import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const storiesSlice = createSlice({
  name: "story",
  initialState: {
    storyList: [],
    userStoryAction: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(readStory.fulfilled, (state, { payload }) => {
      state.storyList = payload;
    });
    builder.addCase(userStoryActions.fulfilled, (state, { payload }) => {
      state.userStoryAction = payload;
    });
  },
});

export const readStory = createAsyncThunk("readStory/story", async () => {
  return await axios
    .get(`http://localhost:3333/api/stories`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response.data;
    });
});

export const userStoryActions = createAsyncThunk(
  "userStoryActions/story",
  async (id) => {
    return await axios
      .get(`http://localhost:3333/api/users/actions/${id}`)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return error.response.data;
      });
  }
);
export const actionFunny = createAsyncThunk(
  "actionFunny/story",
  async (data) => {
    return await axios
      .post(`http://localhost:3333/api/StoriesUsers/`, data)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.log(error);
        return error.response.data;
      });
  }
);
export const addStory = createAsyncThunk("addStory/story", async (story) => {
  return await axios
    .post(`http://localhost:3333/api/stories/`, story)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response.data;
    });
});
export default storiesSlice;
