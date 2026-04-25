// Doctor API service calls
// Example: import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = import.meta.env.VITE_API_URL || '/api';

export const fetchDoctors = async () => {
  const res = await fetch(`${BASE_URL}/doctors`);
  if (!res.ok) throw new Error('Failed to fetch doctors');
  return res.json();
};

export const fetchDoctorById = async (id) => {
  const res = await fetch(`${BASE_URL}/doctors/${id}`);
  if (!res.ok) throw new Error('Failed to fetch doctor');
  return res.json();
};
