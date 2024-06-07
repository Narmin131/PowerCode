import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allData: [],
  status: "",
  error: "",
};

export const sliceForData = createSlice({
  name: "data",
  initialState,
  reducers: {
    fetchDataStart: (state) => {
      state.status = "loading";
    },
    fetchDataSuccess: (state, action) => {
      state.status = "successed";
      state.allData = action.payload;
    },
    fetchDataFailure: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } =
  sliceForData.actions;

export default sliceForData.reducer;
