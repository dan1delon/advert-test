import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66b494e19f9169621ea3972e.mockapi.io/';

export const fetchAds = createAsyncThunk(
  'ads/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/advert');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
