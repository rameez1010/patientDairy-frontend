import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPatients, createPatient } from './patientApi';

export const getPatients = createAsyncThunk('patient/getAll', async (_, thunkAPI) => {
  try {
    return await fetchPatients();
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const addPatient = createAsyncThunk('patient/add', async (patientData, thunkAPI) => {
  try {
    return await createPatient(patientData);
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

const patientSlice = createSlice({
  name: 'patient',
  initialState: {
    patients: [],
    currentPatient: null,
    loading: false,
    error: null,
  },
  reducers: {
    setCurrentPatient: (state, action) => {
      state.currentPatient = action.payload;
    },
    clearPatientError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPatients.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPatients.fulfilled, (state, action) => {
        state.loading = false;
        state.patients = action.payload;
      })
      .addCase(getPatients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addPatient.fulfilled, (state, action) => {
        state.patients.push(action.payload);
      });
  },
});

export const { setCurrentPatient, clearPatientError } = patientSlice.actions;
export default patientSlice.reducer;
