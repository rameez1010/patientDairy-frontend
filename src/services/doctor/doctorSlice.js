import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDoctors } from './doctorApi';

export const getDoctors = createAsyncThunk('doctor/getAll', async (_, thunkAPI) => {
  try {
    return await fetchDoctors();
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

const doctorSlice = createSlice({
  name: 'doctor',
  initialState: {
    doctors: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDoctors.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDoctors.fulfilled, (state, action) => {
        state.loading = false;
        state.doctors = action.payload;
      })
      .addCase(getDoctors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default doctorSlice.reducer;
