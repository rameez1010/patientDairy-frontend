import { configureStore } from '@reduxjs/toolkit';
import { doctorReducer, authReducer, patientReducer } from '../services';

const store = configureStore({
  reducer: {
    doctor: doctorReducer,
    auth: authReducer,
    patient: patientReducer,
  },
});

export default store;
