import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from '../constants';
import { fetchAds } from './operations';

const handlePending = state => {
  state.loading = true;
  state.error = false;
};

const handleRejected = state => {
  state.loading = false;
  state.error = true;
};

const advertsSlice = createSlice({
  name: 'adverts',

  initialState: INITIAL_STATE.adverts,

  extraReducers: builder => {
    builder
      // fetchAds
      .addCase(fetchAds.pending, handlePending)
      .addCase(fetchAds.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchAds.rejected, handleRejected);
  },
});

export const advertsReducer = advertsSlice.reducer;
